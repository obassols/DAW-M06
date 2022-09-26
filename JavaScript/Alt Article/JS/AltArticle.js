window.onload = function start() {
    insertFamilies();
    let inputs = document.getElementsByTagName("input");
    inputs[0].addEventListener("input", checkCode);
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

function checkCode(e) {
    // Comprovo que tingui algun caracter
    if(e.target.value != "") {
        const rex = /^[A-Z/a-z]{3}-[0-9]{7}-[A/X/M/T/B/C/S/O/P/Z]$/;
        console.log(e.target.value);
        console.log(rex.test(e.target.value));
        // Comprovo que segueixi la expresio regular
        if (rex.test(e.target.value)) {
            let codeParts = e.target.value.split("-");
            // Faig les comprovacions adicionals
            if (checkFamilyCode(codeParts[0]) && checkLastDigitCode(codeParts[1],codeParts[2])) {
                document.getElementsByTagName("img")[0].src = "./Images/success.png";
            } else {
                document.getElementsByTagName("img")[0].src = "./Images/error.png";
            }
        } else {
            document.getElementsByTagName("img")[0].src = "./Images/error.png";
        }
    } else {
        document.getElementsByTagName("img")[0].src = "";
    }
}

// Comprovo que les 3 primeres lletres siguin les 3 primeres de la familia
function checkFamilyCode(str) {
    let select = document.getElementsByTagName("select")[0];
    return select.options[select.selectedIndex].value.substring(0, 3).toLowerCase() == str.toLowerCase();
}

// Comprovo que el conjunt de numeros sigui correcte amb la lletra final
function checkLastDigitCode(codeNumbers, lastDigit) {
    const lastDigitTable = ['A','X','M','T','B','C','S','O','P','Z']
    let numbers = parseInt(codeNumbers);
    return lastDigitTable[numbers % 10] == lastDigit;
}