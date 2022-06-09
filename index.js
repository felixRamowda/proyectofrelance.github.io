const BtnBarra = document.querySelector(".btn-barra")
const navBg = document.querySelector(".ul-container")

BtnBarra.addEventListener("click", ()=>{
    navBg.classList.toggle("barra_visible");   
} );
