
const clickMenu = () => {
    if(menuHamburguer.style.display == 'none'){
        menuHamburguer.style.display = 'block';
    } else {
        menuHamburguer.style.display = 'none';
    }
}

const clickFiltro = () => {
    if(filtroDromdown.style.display == 'none'){
        filtroDromdown.style.display = 'block';
    }else{
        filtroDromdown.style.display = 'none';
    }
}

const clickPerfil = () => {
    if(areaPerfil.style.display == 'none'){
        areaPerfil.style.display = 'block';
    }else{
        areaPerfil.style.display = 'none';
    }
}

/*carrossel*/
const slider = document.querySelectorAll('.slider')
const btnPrev = document.getElementById('prev-button')
const btnNext = document.getElementById('next-button')

let currentSlide = 0;

function hideSlider(){
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider(){
    slider[currentSlide].classList.add('on')
}

function nextSlider(){
    hideSlider()
    if(currentSlide === slider.length -1){
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlider()
}
function prevSlider(){
    hideSlider()
    if(currentSlide === 0){
        currentSlide = slider.length -1
    } else {
        currentSlide--
    }
    showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)
/*Fim do carrossel*/