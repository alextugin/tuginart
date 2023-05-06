var menu = [ 'Кофе Merous', 'НПК Энергия', 'Нижегородметалл', 'Фитнес-Чайка', 'Репетитор английского', 'Загородный отель Чайка']

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1.1,
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
      breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 1.5,
        }
    }
    });
