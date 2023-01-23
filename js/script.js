var menu = ['Нижегородметалл', 'Фитнес-Чайка', 'Репетитор английского', 'Загородный отель Чайка']

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1.5,
      centeredSlides: true,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        // type: "fraction",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
