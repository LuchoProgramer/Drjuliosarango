document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let position = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.opacity = 1; // Establece la opacidad de la imagen actual a 1
                slide.classList.add('active'); // Añade la clase 'active' para mostrar la imagen
            } else {
                slide.style.opacity = 0; // Establece la opacidad de otras imágenes a 0
                slide.classList.remove('active'); // Elimina la clase 'active' de otras imágenes
            }
        });
    }

    function moveToNextSlide() {
        position = (position + 1) % totalSlides;
        showSlide(position);
    }

    setInterval(moveToNextSlide, 3000); // Cambia la imagen cada 3 segundos (ajusta el valor según tus necesidades)
});
