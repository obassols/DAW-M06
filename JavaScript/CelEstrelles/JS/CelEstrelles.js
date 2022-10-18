window.onload = function start() {
    setInputsValues();
    document.getElementsByName("params").forEach(element => {
        element.addEventListener("change", updateValue);
    });
    document.getElementsByTagName("button")[0].addEventListener("click", createSky);
}

// Comprova que els valors siguin al localStorage i sino hi son posa un valor per defecte
function setInputsValues() {
    let starNum = document.getElementById("starNum");
    let starNumValue = document.getElementById("starNumValue");
    let maxRadius = document.getElementById("maxRadius");
    let maxRadiusValue = document.getElementById("maxRadiusValue");
    let minDistance = document.getElementById("minDistance");
    let minDistanceValue = document.getElementById("minDistanceValue");

    starNum.value = 500;
    maxRadius.value = 3;
    minDistance.value = 5;

    if (localStorage.getItem("starNum") != undefined) starNum.value = localStorage.getItem("starNum");
    if (localStorage.getItem("maxRadius") != undefined) maxRadius.value = localStorage.getItem("maxRadius");
    if (localStorage.getItem("minDistance") != undefined) minDistance.value = localStorage.getItem("minDistance");

    starNumValue.innerText = starNum.value;
    maxRadiusValue.innerText = maxRadius.value;
    minDistanceValue.innerText = minDistance.value;
}

// Actualitza el valor del slider que hem modificat
function updateValue(e) {
    let key = e.target.id;
    localStorage.setItem(key, e.target.value);

    switch (key) {
        case "starNum": 
            document.getElementById("starNumValue").innerText = e.target.value;
            break;
        case "maxRadius":
            document.getElementById("maxRadiusValue").innerText = e.target.value;
            break;
        case "minDistance":
            document.getElementById("minDistanceValue").innerText = e.target.value;
            break;
    }
}

// Va a la pagina on es crearà el cel estrellat
function createSky() {
    window.location.href = "ImatgeEstrelles.html";
}