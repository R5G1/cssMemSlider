/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("header__slide");
    let dots = document.getElementsByClassName("slider-dots_item");
	let text = document.getElementsByClassName("slider-text-p");
    if (n > slides.length) {
    	slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

	if (n < 1) {
        slideIndex = text.length
    }
	for (i = 0; i < text.length; i++) {
        text[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
	text[slideIndex - 1].style.display = "block";
};
