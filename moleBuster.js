const divPrincipal = document.querySelector(".divPrincipal");
const urlSuelo = "/assets/assets/miau.gif";
const urlDigglet = "/assets/assets/digglet.webp";
const botonJugar = document.querySelector(".botonJugar");
let puntuacion = 0;

botonJugar.addEventListener("click", () => pintarJuego());

const pintarJuego = () => {

    divPrincipal.innerHTML = `<div class ="juego"></div>`;

    puntuacion = 0;
    let actualizarPuntuacion = document.querySelector(".puntuacion");
    actualizarPuntuacion.textContent = ("Puntuación: " + puntuacion);


    for (let i = 0; i < 9; i++) {
        
        const div$$ = document.querySelector(".juego");
        const suelo = document.createElement("img");

        suelo.addEventListener("click", () => mazazo(suelo));

        suelo.setAttribute("src", urlSuelo);
        suelo.classList.add("suelos");

        div$$.appendChild(suelo);
        
    }

    jugar();

}

const jugar = () => {

    const suelos = document.querySelectorAll(".suelos");

    let timeOut = 1000;

    let anterior = 0;

    for (let i = 7; i >= 0; i--) {

        let random = Math.floor(Math.random()*9);

        setTimeout(() => {

            if (i != 0) {
                
                const cambiarContador = document.querySelector(".contador");

                suelos[anterior].setAttribute("src", urlSuelo);
                suelos[anterior].classList.replace("digglet", "suelos");
    
                suelos[random].setAttribute("src", urlDigglet);
                suelos[random].classList.replace("suelos", "digglet");
                anterior = random;
                
                if (i < 10) {
    
                    cambiarContador.textContent = "00:0" + i;
                    cambiarContador.style = "color: red";
    
                } else {
    
                    cambiarContador.style = "color: white";
                    cambiarContador.textContent = "00:" + i;
    
                }

            } else {

                const cambiarContador = document.querySelector(".contador");
                suelos[random].setAttribute("src", urlSuelo);
                suelos[random].classList.replace("digglet", "suelos");
                cambiarContador.textContent = "00:0" + i;

                comprobacion();

            }
            
        }, timeOut);

        timeOut += 1000;
        
    }

}


const mazazo = (suelo) => {

    if (suelo.className.includes("digglet")) {
        
        puntuacion += 1;
            
        let actualizarPuntuacion = document.querySelector(".puntuacion");
        actualizarPuntuacion.textContent = ("Puntuación: " + puntuacion);

    }   

}


const comprobacion = () => {

    if (puntuacion >= 5) {
        
        divPrincipal.innerHTML = `<div class="resultado"><img src="./assets/assets/skarmory.gif"/><h3>GANADOR, ERES UN POKEMON</h3></div>`;

    } else {

        divPrincipal.innerHTML = `<div class="resultado"><img src="./assets/assets/Squirtle.gif"/><h3>DERROTA, MEJOR VETE A SEGUIR PROGRAMANDO</h3></div>`;

    }

}


divPrincipal.addEventListener("click", () => moverMartillo());


const moverMartillo = () => {
    
    setTimeout(() => {

        divPrincipal.style = "cursor: url('./imgs/hammer.png', auto";
        
    }, 200);

    divPrincipal.style = "cursor: url('./imgs/hammer2.png', auto";

}

