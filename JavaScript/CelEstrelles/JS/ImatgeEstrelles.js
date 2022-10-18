import {Estrella} from './Estrella.js';
let stars = [];
window.onload = function start() {
    setInputsValues();
    document.getElementById("starNum").addEventListener("change", updateValue);
    document.getElementsByTagName("button")[0].addEventListener("click", goMainPage);
    createSky();
}

// Agafa el valor de el numero de estrelles del localStorage o el canvia a 500
function setInputsValues() {
    let starNum = document.getElementById("starNum");
    let starNumValue = document.getElementById("starNumValue");

    starNum.value = 500;
    if (localStorage.getItem("starNum") != undefined) {
        starNum.value = localStorage.getItem("starNum");
    } else {
        localStorage.setItem("starNum", starNum.value);
    }
    starNumValue.innerText = starNum.value;
}

// Actualitza el valor de l'slider starNum
function updateValue() {
    let starNum = document.getElementById("starNum");
    localStorage.setItem("starNum", starNum.value);
    document.getElementById("starNumValue").innerText = starNum.value;
    createSky();
}

// Torna a la pagina anterior
function goMainPage() {
    window.location.href = "CelEstrelles.html";
}

// Crea les estrelles dins el div negre
function createSky() {
    var canvas = document.getElementById('starsCanvas');
    canvas.height = 1200;
    canvas.width = 1200;
    let ctx = canvas.getContext('2d');
    if (stars.length == 0) stars = generateStars(1000, canvas.width, canvas.height);

    for(let i = 0; i < localStorage.getItem("starNum"); i++) {
        draw(ctx, stars[i]);

        // No entenc perque no funciona, si ho saps agrairia que m'ho diguesis, Gràcies!
        // stars[i].draw(ctx);
    }
}

// Crea un array amb el numero d'estrelles que li passis per parametre
function generateStars(num, width, height) {
    let starsArray = [];
    for(let i = 0; i < num; i++) {
        let star = new Estrella(Math.floor(Math.random() * width), Math.floor(Math.random() * height), Math.floor(Math.random() * localStorage.getItem("maxRadius")) + 1);         
        while (checkDistance(starsArray, star)) {
            star.x = Math.floor(Math.random() * width);
            star.y = Math.floor(Math.random() * height);
        }
        starsArray.push(star);
    }
    return starsArray;
}

// Dibuixa un estrella dins el context que li passes per parametre
function draw(context, star) {
    context.beginPath();
    let color = 'rgba(255,255,255,' + star.opacity + ')';
    context.fillStyle = color;
    context.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    context.fill();
}

// Comporva la distancia de la estrella entre totes les de l'array
function checkDistance(starArray, star) {
    let minDistance = localStorage.getItem("minDistance");
    let exit = false;
    for (let i = 0; i < starArray.length && exit == false; i++) {
        let x = starArray[i].x - star.x;
        let y = starArray[i].y - star.y;

        let distance = Math.floor(Math.sqrt(x * x + y * y));
        distance = distance - (starArray[i].radius + star.radius);

        if(distance < minDistance) {
            exit = true;
        }
    }
    return exit;
}