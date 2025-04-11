const body = document.body;
const html = document.documentElement;

const setGradientHeight = () => {
  const pageHeight = Math.max(
    body.scrollHeight, html.scrollHeight,
    body.offsetHeight, html.offsetHeight,
    body.clientHeight, html.clientHeight
  );

  document.body.style.height = `${pageHeight}px`;
};

// ===== slide ===
// document.addEventListener("DOMContentLoaded", () => {
//   const section = document.querySelector(".carousel-section");
//   const carousel = document.querySelector(".carousel");

//   // Відстеження скролу для появи секції
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           section.classList.add("visible");
//         }
//       });
//     },
//     { threshold: 0.1 }
//   );

//   observer.observe(section);

//   // Анімація каруселі під час скролу
//   let isScrolling;
//   window.addEventListener("scroll", () => {
//     carousel.style.animationPlayState = "running"; // Запускаємо анімацію
//     clearTimeout(isScrolling);
//     isScrolling = setTimeout(() => {
//       carousel.style.animationPlayState = "paused"; // Зупиняємо анімацію
//     }, 100); // Зупинка через 100 мс після завершення скролу
//   });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const sections = document.querySelectorAll(".carousel-section");

//   // Відстеження скролу для появи кожної секції
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible");
//         }
//       });
//     },
//     { threshold: 0.1 }
//   );

//   sections.forEach((section) => observer.observe(section));

//   // Анімація каруселі під час скролу
//   const carousels = document.querySelectorAll(".carousel");
//   let isScrolling;

//   window.addEventListener("scroll", () => {
//     carousels.forEach((carousel) => {
//       carousel.style.animationPlayState = "running"; // Запускаємо анімацію
//     });

//     clearTimeout(isScrolling);
//     isScrolling = setTimeout(() => {
//       carousels.forEach((carousel) => {
//         carousel.style.animationPlayState = "paused"; // Зупиняємо анімацію
//       });
//     }, 100); // Зупинка через 100 мс після завершення скролу
//   });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const sections = document.querySelectorAll(".carousel-section");

//   // Відстеження скролу для появи кожної секції
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible");
//         }
//       });
//     },
//     { threshold: 0.1 }
//   );

//   sections.forEach((section) => observer.observe(section));

//   // Анімація каруселей під час скролу
//   const carousels = document.querySelectorAll(".carousel");
//   let isScrolling;

//   window.addEventListener("scroll", () => {
//     carousels.forEach((carousel) => {
//       carousel.style.animationPlayState = "running"; // Запускаємо анімацію
//     });

//     clearTimeout(isScrolling);
//     isScrolling = setTimeout(() => {
//       carousels.forEach((carousel) => {
//         carousel.style.animationPlayState = "paused"; // Зупиняємо анімацію
//       });
//     }, 100); // Зупинка через 100 мс після завершення скролу
//   });
// });
// 







// ================ work ======================================
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".translatey--section");

  // Відстеження скролу для появи кожної секції
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => observer.observe(section));

  // Анімація каруселей під час скролу
  const slider1 = document.querySelector("#slider-1");
  const slider2 = document.querySelector("#slider-2");
  let isScrolling;

  window.addEventListener("scroll", () => {
    // Запускаємо анімацію для обох слайдерів
    slider1.style.animationPlayState = "running";
    slider2.style.animationPlayState = "running";

    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      // Зупиняємо анімацію після завершення скролу
      slider1.style.animationPlayState = "paused";
      slider2.style.animationPlayState = "paused";
    }, 100); // Зупинка через 100 мс після завершення скролу
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".translatey--section");

  // Відстеження скролу для появи кожної секції
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => observer.observe(section));

    const setupInfiniteScroll = (slider, direction = "left") => {
      const items = Array.from(slider.children);
      let scrollPosition = direction === "left" ? 0 : -slider.scrollWidth; // Початкова позиція
  
      // Клонування елементів для безперервного циклу
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        if (direction === "left") {
          slider.appendChild(clone); // Додаємо в кінець для руху вліво
        } else {
          slider.prepend(clone); // Додаємо на початок для руху вправо
        }
      });
  
      // Оновлення ширини слайдера після клонування
      const sliderWidth = slider.scrollWidth;
  
      // Оновлення позиції слайдера
      const updateSliderPosition = () => {
        scrollPosition += direction === "left" ? -2 : 2; // Рухаємо слайдер вліво або вправо
        if (direction === "left" && Math.abs(scrollPosition) >= sliderWidth / 2) {
          // Якщо досягли половини ширини для руху вліво
          scrollPosition = 0;
        } else if (direction === "right" && scrollPosition >= 0) {
          // Якщо досягли початку для руху вправо
          scrollPosition = -sliderWidth / 2;
        }
        slider.style.transform = `translateX(${scrollPosition}px)`;
      };
  
      return updateSliderPosition;
    };
  const slider1 = document.querySelector("#slider-1");
  const slider2 = document.querySelector("#slider-2");

  // const updateSlider2 = setupInfiniteScroll(slider2);
  // const updateSlider1 = setupInfiniteScroll(slider1)
  const updateSlider1 = setupInfiniteScroll(slider1, "left");

  // Другий слайдер рухається вправо
  const updateSlider2 = setupInfiniteScroll(slider2, "right");

  

  let isScrolling;

  // Відстеження скролу
  window.addEventListener("scroll", () => {
    clearInterval(isScrolling); // Зупиняємо попередній інтервал
    isScrolling = setInterval(() => {
      updateSlider1();
      updateSlider2();
    }, 20); // Оновлення позиції кожні 20 мс
  });

  // Зупинка руху через 100 мс після завершення скролу
  window.addEventListener("scroll", () => {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      clearInterval(isScrolling); // Зупиняємо рух
    }, 100);
  });
});