document.addEventListener('DOMContentLoaded', function () {
  let swiper = new Swiper('.project-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: false,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 900,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});


let copy = document.querySelector(".logos-slide").cloneNode(false);
document.querySelector(".logos").appendChild(copy);



document.addEventListener("DOMContentLoaded", function () {
  const elements = [
      { id: 'development', },
  ];

  elements.forEach(el => {
      const element = document.getElementById(el.id);
      const border = document.createElement('div');
      border.className = 'animated-border';
      border.style.borderColor = el.color;
      element.appendChild(border);
  });
});

