
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

    document.addEventListener("DOMContentLoaded", () => {
      const sections = document.querySelectorAll(".translatey--section");
      const sections2 = document.querySelectorAll(".fade-in-up");
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, {
        threshold: 0.2 // можна змінити (напр. 0.1 або 0.5)
      });
  
      sections.forEach(section => {
        observer.observe(section);
      });

      sections2.forEach(section => {
        observer.observe(section);
      });

    });

    // document.addEventListener("DOMContentLoaded", () => {
    //   const sections = document.querySelectorAll(".fade-in-up");
  
    //   const observer = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //       if (entry.isIntersecting) {
    //         entry.target.classList.add("visible");
    //       }
    //     });
    //   }, {
    //     threshold: 0.2 // можна змінити (напр. 0.1 або 0.5)
    //   });
  
    //   sections.forEach(section => {
    //     observer.observe(section);
    //   });



    // });

    document.addEventListener("DOMContentLoaded", function () {

      const menuButton = document.querySelector(".menu-button");
      const menu = document.querySelector(".header__menu");
      const menuLinks = document.querySelectorAll(".header__menu-link"); 
  
     
      menuButton.addEventListener("click", function () {
          menu.classList.toggle("active"); 
          menuButton.classList.toggle("active"); 
      });
  
      
      menuLinks.forEach(link => {
          link.addEventListener("click", function () {
              menu.classList.remove("active"); 
              menuButton.classList.remove("active"); 
          });
      });

  });
// ================================= slider
  // const slider1 = document.getElementById('slider-1');
  // const slider2 = document.getElementById('slider-2');

  // let scrollDirection = 0;
  // let scrollTimeout;
  // let speed = 1;

  // // Клонування вмісту для нескінченного ефекту
  // function cloneSliderItems(slider) {
  //   const items = Array.from(slider.children);
  //   items.forEach(item => {
  //     const clone = item.cloneNode(true);
  //     slider.appendChild(clone);
  //   });
  // }

  // cloneSliderItems(slider1);
  // cloneSliderItems(slider2);

  // function moveSliders() {
  //   slider1.scrollLeft += speed;      // вліво
  //   slider2.scrollLeft -= speed;      // вправо

  //   // зациклення
  //   if (slider1.scrollLeft >= slider1.scrollWidth / 2) {
  //     slider1.scrollLeft = 0;
  //   }
  //   if (slider2.scrollLeft <= 0) {
  //     slider2.scrollLeft = slider2.scrollWidth / 2;
  //   }
  // }

  // let isScrolling = false;
  // let animationFrame;

  // function onScroll() {
  //   isScrolling = true;
  //   if (!animationFrame) {
  //     animationFrame = requestAnimationFrame(animateSliders);
  //   }

  //   clearTimeout(scrollTimeout);
  //   scrollTimeout = setTimeout(() => {
  //     isScrolling = false;
  //   }, 100); // зупиняється через 100мс після останнього скролу
  // }

  // function animateSliders() {
  //   if (isScrolling) {
  //     moveSliders();
  //     animationFrame = requestAnimationFrame(animateSliders);
  //   } else {
  //     cancelAnimationFrame(animationFrame);
  //     animationFrame = null;
  //   }
  // }

  // window.addEventListener('scroll', onScroll);

// =================

//   const logos = [
//     'images/bonus/V1.png',
//     'images/bonus/V2.png',
//     'images/bonus/V3.png',
//     'images/bonus/V4.png',
//     'images/bonus/V5.png',
//     'images/bonus/V6.png',
//     'images/bonus/V7.png',
//     // 'images/bonus/V8.png',
//     // 'images/bonus/V9.png',
//     // 'images/bonus/V10.png',
//     // 'images/bonus/V11.png',
//     // 'images/bonus/V12.png',
//     // 'images/bonus/V13.png'
//   ];

//   const directions = [1, -1, 1]; // напрямки для кожного рядка
//   const rows = document.querySelectorAll('.scroll-row');

//   rows.forEach((row, index) => {
//     for (let i = 0; i < 3; i++) { // кілька повторень
//       logos.forEach(src => {
//         const img = document.createElement('img');
//         img.src = src;
//         img.alt = "Логотип";
//         row.appendChild(img);
//       });
//     }
//   });

//   // rows.forEach((row) => {
//   //   let totalWidth = 0;
//   //   while (totalWidth < window.innerWidth * 3) {
//   //     logos.forEach(src => {
//   //       const img = document.createElement('img');
//   //       img.src = src;
//   //       img.alt = "Логотип";
//   //       row.appendChild(img);
//   //       totalWidth += 140; // ширина картинки + відступ
//   //     });
//   //   }
//   // });
// // !!! ВАЖЛИВО: встановлюємо початкову позицію для тих, що рухаються вліво
// rows.forEach((row, index) => {
//   if (directions[index] === -1) {
//     row.scrollLeft = row.scrollWidth / 2;
//   }
// });

//   let isScrolling = false;
//   let scrollTimeout;
//   let animationFrame;
//   // const speed = 0.5;

//   const speeds = [0.5, 0.5, 0.5];
//   // function moveRows() {
//   //   rows.forEach((row, index) => {
//   //     // row.scrollLeft += speed * directions[index];
      
//   //     row.scrollLeft += speeds[index] * directions[index];
//   //     // зациклення
//   //     if (row.scrollLeft >= row.scrollWidth / 2) {
//   //       row.scrollLeft = 0;
//   //     } else if (row.scrollLeft <= 0) {
//   //       row.scrollLeft = row.scrollWidth / 2;
//   //     }
//   //   });
//   // }


//   // const speeds = [0.5, 0.3, 0.5]; // для кожного рядка окремо

// function moveRows() {
//   rows.forEach((row, index) => {
//     const dir = directions[index];
//     const speed = speeds[index];
//     row.scrollLeft += speed * dir;

//     const maxScroll = row.scrollWidth / 2;
// console.log(dir === -1 && row.scrollLeft <= 0);
// // console.log(dir === -1 );
// // console.log(row.scrollLeft <= 0);
// console.log(`Row ${index}, direction: ${dir}, scrollLeft: ${row.scrollLeft}`);
//     if (dir === 1 && row.scrollLeft >= maxScroll) {
//       row.scrollLeft = 0;
      
//     } else if (dir === -1 && row.scrollLeft <= 1) {
//       row.scrollLeft = maxScroll;
//     }
//   });
// }
// // function moveRows() {

// //   rows.forEach((row, index) => {
// //     const dir = directions[index];
// //     const speed = speeds[index];
// //     row.scrollLeft += speed * dir;

// //     const maxScroll = row.scrollWidth / 3;

// //     if (dir === 1 && row.scrollLeft >= maxScroll) {
// //       row.scrollLeft = 0;
// //     } else if (dir === -1 && row.scrollLeft <= 0) {
// //       row.scrollLeft = maxScroll;
// //     }
// //   });
// //   // rows.forEach((row, index) => {
// //   //   if (directions[index] === -1) {
// //   //     row.scrollLeft = row.scrollWidth / 2;
// //   //   }
// //   // });
// // }

//   function onScroll() {
//     isScrolling = true;
//     if (!animationFrame) {
//       animationFrame = requestAnimationFrame(animateScroll);
//     }

//     clearTimeout(scrollTimeout);
//     scrollTimeout = setTimeout(() => {
//       isScrolling = false;
//     }, 100);
//   }

//   function animateScroll() {
//     if (isScrolling) {
//       moveRows();
//       animationFrame = requestAnimationFrame(animateScroll);
//     } else {
//       cancelAnimationFrame(animationFrame);
//       animationFrame = null;
//     }
//   }

//   window.addEventListener('scroll', onScroll);
  

  

 

