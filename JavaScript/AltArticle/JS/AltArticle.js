window.onload = function start() {
    insertFamilies();
    document.getElementsByTagName("select")[0].addEventListener("change", checkCode);
    document.getElementsByTagName("input")[0].addEventListener("input", checkCode);
    document.getElementsByName("parameters").forEach(element => {
        element.addEventListener("input", updateParameters);
    });
    let locationInputs = document.getElementsByName("location");
    locationInputs[0].addEventListener("input", checkHallway);
    locationInputs[1].addEventListener("input", checkBookshelf);
    locationInputs[2].addEventListener("input", checkHole);
    document.getElementsByTagName("button")[0].addEventListener("click", checkAll);
}

function insertFamilies() {

    // Variable de totes les families
    const families = [
        {
            label: "Ahri",
            value: "ahri"
        },
        {
            label: "Kindred",
            value: "kindred"
        },
        {
            label: "Taliyah",
            value: "taliyah"
        },
        {
            label: "Xayah",
            value: "xayah"
        },
        {
            label: "Sylas",
            value: "sylas"
        }
    ]

    //Agafo el primer select
    let select = document.getElementsByTagName("select")[0];

    //Ordeno l'array de families
    families.sort((a, b) => (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0));

    //Per cada element a l'array de families creo una opcio i li passo el valor i la label
    families.forEach(element => {
        let opt = document.createElement('option');
        opt.value = element.value;
        opt.label = element.label;
        //Finalment afegeixo la opcio com a child del select
        select.appendChild(opt);
    });
}

function checkCode() {
    const rex = /^[A-Z/a-z]{3}-[0-9]{7}-[A/X/M/T/B/C/S/O/P/Z]$/;
    let check = false;
    let codeInput = document.getElementsByTagName("input")[0];
    let imageString = "./Images/error.png";
    // Comprovo que segueixi la expresio regular
    if (rex.test(codeInput.value)) {
        let codeParts = codeInput.value.split("-");
        // Faig les comprovacions adicionals
        if (checkFamilyCode(codeParts[0]) && checkLastDigitCode(codeParts[1], codeParts[2])) {
            imageString = "./Images/success.png";
            check = true;
        }
    }
    document.getElementsByTagName("img")[0].src = imageString;
    return check;
}

// Comprovo que les 3 primeres lletres siguin les 3 primeres de la familia
function checkFamilyCode(str) {
    let select = document.getElementsByTagName("select")[0];
    return select.options[select.selectedIndex].value.substring(0, 3).toLowerCase() == str.toLowerCase();
}

// Comprovo que el conjunt de numeros sigui correcte amb la lletra final
function checkLastDigitCode(codeNumbers, lastDigit) {
    const lastDigitTable = ['A', 'X', 'M', 'T', 'B', 'C', 'S', 'O', 'P', 'Z'];
    let numbers = parseInt(codeNumbers);
    return lastDigitTable[numbers % 10] == lastDigit;
}

// Comprova que els valors son numeros i actualitza el text
function updateParameters() { // Si no es nomes numeros dona error !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const parametersInputs = document.getElementsByName("parameters");
    const rex = /^[0-9][0-9]*$/;
    let check = false;
    let width = 0, length = 0, heigth = 0;
    if (rex.test(parametersInputs[0].value) && rex.test(parametersInputs[1].value) && rex.test(parametersInputs[2].value)) {
        width = parametersInputs[0].value;
        length = parametersInputs[1].value;
        heigth = parametersInputs[2].value;
        check = true;
        document.getElementsByTagName("p")[0].innerText = width + " x " + length + " x " + heigth;
    } else {
        document.getElementsByTagName("p")[0].innerText = "";
    }
    return check;
}

function checkHallway() {
    const rex = /^P-[0-9]{2}-[E/D]$/;
    let check = false;
    let hallwayInput = document.getElementsByName("location")[0];
    let imageString = "./Images/error.png";
    // Comprovo que el passadis segueixi la expresio regular
    if (rex.test(hallwayInput.value)) {
        imageString = "./Images/success.png";
        check = true;
    }
    document.getElementsByTagName("img")[1].src = imageString;
    return check;
}

function checkBookshelf() {
    const rex = /^EST[+][0-9]{2}[.][0-9]{2}$/;
    let check = false;
    let bookshelfInput = document.getElementsByName("location")[1];
    let imageString = "./Images/error.png";
    // Comprovo que la estanteria segueixi la expresio regular
    if (rex.test(bookshelfInput.value)) {
        imageString = "./Images/success.png";
        check = true;
    }
    document.getElementsByTagName("img")[2].src = imageString;
    return check;
}

function checkHole() {
    const rex = /^[0-9]{2}[*][A-Z/a-z]{3}[*][0-9]{2}\\[0-9]{2}$/;
    let check = false;
    let holeInput = document.getElementsByName("location")[2];
    let imageString = "./Images/error.png";
    // Comprovo que el forat segueixi la expresio regular
    if (rex.test(holeInput.value)) {
        imageString = "./Images/success.png";
        check = true;
    }
    document.getElementsByTagName("img")[3].src = imageString;
    return check;
}

function checkAll() {
    // Netejo el div de resultats
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    // Comprovo que tot estigui validat
    if (checkCode() && checkHallway() && checkBookshelf() && checkHole()) {
        let familyP = document.createElement('p');
        familyP.innerText = "Familia: " + document.getElementsByTagName("select")[0]
            .options[document.getElementsByTagName("select")[0].selectedIndex].label;
        resultsDiv.appendChild(familyP);

        let codeP = document.createElement('p');
        codeP.innerText = "Codi: " + document.getElementsByTagName("input")[0].value;
        resultsDiv.appendChild(codeP);

        let nameP = document.createElement('p');
        nameP.innerText = "Nom: " + document.getElementsByTagName("input")[1].value;
        resultsDiv.appendChild(nameP);

        let parametersP = document.createElement('p');
        parametersP.innerText = "Característiques: " + document.getElementsByTagName("p")[0].innerText;
        resultsDiv.appendChild(parametersP);

        let locationP = document.createElement('p');
        let locationInputs = document.getElementsByName("location");
        locationP.innerText = "Ubicació: " + locationInputs[0].value + " " + locationInputs[1].value + " " + locationInputs[2].value;
        resultsDiv.appendChild(locationP);
    } else {
        console.log("No tens tots els camps correctes");

    }
}