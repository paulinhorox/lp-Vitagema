const accordion = document.querySelectorAll('.question')
accordion.forEach(acc => {
    acc.addEventListener('click', () => {
        let pai = acc.parentNode
        pai.classList.toggle('active')
    })
})

var swiper = new Swiper(".testimonials-items", {
    slidesPerView: 3,
    spaceBetween: 32,
    loop: true,
})

AOS.init({
    duration: 1000,
    delay: 200,
    once: true
  });