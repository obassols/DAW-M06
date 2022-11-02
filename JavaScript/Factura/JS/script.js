import { ArticleRow } from "./modules/Article.mjs";
import { Factura } from "./modules/Factura.mjs";
let factura;
window.onload = function start() {
    printHeaderTable();
    addArticles();
    printCode();
    document.getElementById("addArticle").addEventListener("click", addProduct);
    document.getElementById("restoreButton").addEventListener("click", restoreFactura);
    document.getElementById("imposableBase").innerText = 0;
    document.getElementById("iva").innerText = 0;
    document.getElementById("totalImport").innerText = 0;
}

function printHeaderTable() {
    let tr = document.createElement('tr');

    let th = document.createElement('th');
    th.innerText = "Codi";
    tr.appendChild(th);

    th = document.createElement('th');
    th.innerText = "Nom";
    tr.appendChild(th);

    th = document.createElement('th');
    th.innerText = "Quantitat";
    tr.appendChild(th);

    th = document.createElement('th');
    th.innerText = "Preu";
    tr.appendChild(th);

    th = document.createElement('th');
    th.innerText = "Total";
    tr.appendChild(th);

    document.getElementById("articleTable").appendChild(tr);
}

async function addArticles() {
    getArticles();
    let articles;
    articles = await getArticles();
    let select = document.getElementById("articleSelect");
    // Per cada element a l'array de families creo una opcio i li passo el valor i la label
    articles.forEach(element => {
        let opt = document.createElement('option');
        opt.value = element.code;
        opt.label = element.name;
        //Finalment afegeixo la opcio com a child del select
        select.appendChild(opt);
    });
}

async function getArticles() {
    let articles;
    await fetch('./JSON/Articles.json')
        .then((response) => response.json())
        .then((json) => articles = json);
    return articles;
}

// No sé si cada any comença en 1 les factures
function printCode() {
    if (factura != undefined) {
        document.getElementById("numCode").innerText = factura.code;
    } else {
        if (localStorage.getItem("code") == undefined) localStorage.setItem("code", 1);
        let codeNum = localStorage.getItem("code");
        let date = new Date();
        document.getElementById("numCode").innerText = date.getFullYear() + "/" + codeNum.padStart(2, '0');
    }
}

async function addProduct() {
    // Agafa el producte del select i genera un ArticleRow amb aquest
    let article = document.getElementById("articleSelect").value;
    let articles = await getArticles();
    article = articles[article - 1];
    let articleRow = new ArticleRow(article);

    // Comprova que la factura no tingui ja el producte
    let rowElement = document.getElementById(articleRow.article.name);
    if (rowElement == null) {
        printArticleRow(articleRow);
        // Com que no hi era comprova també si és el primer producte a ser afegit
        if (factura == undefined) {
            // Crea la factura i hi afegeix l'ArticleRow
            let codeNum = localStorage.getItem("code");
            let date = new Date();
            factura = new Factura(date.getFullYear() + "/" + codeNum.padStart(2, '0'), articleRow.totalPrice);
            factura.articles.push(articleRow);
            updateFacturaImport();
        } else {
            // Com que ja estava creada simplement afegeix l'ArticleRow a dins l'array d'aquests, també actualitza la base imposable
            factura.articles.push(articleRow);
            factura.imposableBase += articleRow.totalPrice;
            updateFacturaImport();
        }
    } else {
        // Com que ja hi era l'agafa de l'array de factura i suma 1 a la quantitat, actualitza preu total i base imposable
        let search = factura.articles.findIndex(el => el.article.name == articleRow.article.name);
        factura.articles[search].quantity++;
        factura.articles[search].totalPrice = factura.articles[search].quantity * factura.articles[search].article.price;

        factura.imposableBase += factura.articles[search].article.price;
        updateFacturaImport();

        document.getElementById("input" + articleRow.article.name).value = factura.articles[search].quantity;
        document.getElementById("totalPrice" + articleRow.article.name).innerText = factura.articles[search].totalPrice + " €";
    }
    saveFactura();
}

function printArticleRow(articleRow) {
    let tr = document.createElement('tr');
    tr.id = articleRow.article.name;

    // Code
    let td = document.createElement('td');
    td.innerText = articleRow.article.code.toString().padStart(4, '0');
    tr.appendChild(td);

    // Name
    td = document.createElement('td');
    td.innerText = articleRow.article.name;
    tr.appendChild(td);

    // Quantity
    td = document.createElement('td');
    let input = document.createElement('input');

    input.addEventListener("change", changeQuantity);
    input.value = articleRow.quantity;
    input.type = "number";
    input.min = 0;
    input.id = "input" + articleRow.article.name;
    td.appendChild(input);
    tr.appendChild(td);

    // Price
    td = document.createElement('td');
    td.innerText = articleRow.article.price + "€";
    tr.appendChild(td);

    // Total Price
    td = document.createElement('td');
    td.id = "totalPrice" + articleRow.article.name;
    td.innerText = articleRow.totalPrice + " €";
    tr.appendChild(td);

    document.getElementById("articleTable").appendChild(tr);
} 

async function changeQuantity(e) {
    e.target.value = Math.round(parseInt(e.target.value));
    let itemName  = e.target.id.replace("input", "");
    let search = factura.articles.findIndex(el => el.article.name == itemName);
    if (e.target.value < 1) {
        // Si han baixat el valor a 0, elimina l'article i actualitza la base imposable
        factura.imposableBase -= factura.articles[search].totalPrice;
        updateFacturaImport();
        factura.articles.splice(search, 1);
        document.getElementById(itemName).remove();
    } else {
        // Actualitza la quantitat dins la factura, el preu de l'ArticleRow i la base imposable
        factura.articles[search].quantity = e.target.value;
        factura.imposableBase -= factura.articles[search].totalPrice;
        factura.articles[search].totalPrice = factura.articles[search].quantity * factura.articles[search].article.price;
        factura.imposableBase += factura.articles[search].totalPrice;

        updateFacturaImport();
        document.getElementById("totalPrice" + itemName).innerText = factura.articles[search].totalPrice + " €";
    }
    saveFactura();
}

function saveFactura() {
    if (localStorage.getItem("factures") == undefined) {
        // Com que no hi ha cap array de factures el crea i afegeix la nova
        let array = new Array();
        array.push(factura);
        localStorage.setItem("factures", JSON.stringify(array));

        // També incrementa el codi
        let codeNum = localStorage.getItem("code");
        codeNum++;
        localStorage.setItem("code", codeNum);
    } else {
        let factures = JSON.parse(localStorage.getItem("factures"));
        let search = factures.findIndex(el => el.code == factura.code);

        if (search == -1) {
            // Puja una nova factura e incrementa el codi
            factures.push(factura);
            let codeNum = localStorage.getItem("code");
            codeNum++;
            localStorage.setItem("code", codeNum);
        } else {
            // Actualitza la factura que ha trobat amb el mateix codi
            factures[search] = factura;
        }

        localStorage.setItem("factures", JSON.stringify(factures));
    }
}

function updateFacturaImport() {
    factura.calcIva();
    document.getElementById("imposableBase").innerText = factura.imposableBase;
    document.getElementById("iva").innerText = factura.iva;
    document.getElementById("totalImport").innerText = factura.totalImport;
}

function restoreFactura() {
    let code = document.getElementById("restoreCode").value;
    let factures = JSON.parse(localStorage.getItem("factures"));
    let indexFactura = factures.findIndex(el => el.code == code);
    if (indexFactura == -1) {
        alert("No s'ha trobat la factura");
    } else {
        factura = new Factura(factures[indexFactura].code, factures[indexFactura].imposableBase);
        factura.articles = factures[indexFactura].articles;
        updateFacturaImport();
        printCode();

        document.getElementById("articleTable").innerHTML = "";
        printHeaderTable();

        factura.articles.forEach(articleRow => {
            printArticleRow(articleRow);
        });
    }
}