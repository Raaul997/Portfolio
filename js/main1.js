// ------------------------------ WEB PORTFOLIO ---------------------------- //
// Modo oscuro y modo claro
const cambioContenedor = document.getElementById("cambioContenedor");
const sun = document.getElementById("sun");
const cambioTxt = document.getElementById("cambioTxt");

cambioContenedor.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(sun.src.includes("moon.svg")){
    
        sun.src = "icons/sun.svg";
        cambioTxt.textContent = "Dark Mode";

    }else{

        sun.src = "icons/moon.svg";
        cambioTxt.textContent = "Light Mode";

    }
});

// Modo español e inglés
const cambioIdioma = document.getElementById("cambioIdioma");
const eng = document.getElementById("eng");
const cambioIdiomaTxt = document.getElementById("cambioIdiomaTxt");
const mainEsp = document.getElementById("mainEsp");
const mainEng = document.getElementById("mainEng");

cambioIdioma.addEventListener("click", () => {
    if (eng.src.includes("spain.svg")) {
        // Cambiar a inglés
        eng.src = "icons/eng.svg";
        cambioIdiomaTxt.textContent = "Lenguaje en Español";
        mainEsp.style.display = "none";
        mainEng.style.display = "grid";
    } else {
        // Cambiar a español
        eng.src = "icons/spain.svg";
        cambioIdiomaTxt.textContent = "English Language";
        mainEsp.style.display = "grid";
        mainEng.style.display = "none";
    }
});