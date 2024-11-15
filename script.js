/*Slideshow*/

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].classList.add('active');
    setTimeout(showSlides, 7000); // Muda a imagem a cada 5 segundos
}

/*Abrir e fechar botão do menu mobile - popup (menu) aparece e desaparece*/
var openBtn = document.querySelector(".open-btn");
var closeBtn = document.querySelector(".close-btn");
var popup = document.querySelectorAll(".popup");

//Quando o botão é clicado, o menu aparece

openBtn.addEventListener('click', function (){
    for(let x = 0; x < popup.length; x++ ){
        popup[x].classList.add('visible');
    }
})

///Quando o botão é clicado, o menu desaparece

closeBtn.addEventListener('click', function (){
    for(let x = 0; x < popup.length; x++ ){
        popup[x].classList.remove('visible');
    }
})