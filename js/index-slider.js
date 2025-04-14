// const logos = [
//     'images/bonus/V1.png',
//     'images/bonus/V2.png',
//     'images/bonus/V3.png',
//     'images/bonus/V4.png',
//     'images/bonus/V5.png',
//     'images/bonus/V6.png',
//     'images/bonus/V7.png'
//   ];

//   const directions = [1, -1, 1];
//   const speeds = [0.5, 0.5, 0.5];
//   const contents = [
//     document.getElementById('row1'),
//     document.getElementById('row2'),
//     document.getElementById('row3')
//   ];

//   contents.forEach((container, index) => {
//     for (let i = 0; i < 3; i++) {
//       logos.forEach(src => {
//         const img = document.createElement('img');
//         img.src = src;
//         img.alt = "Логотип";
//         container.appendChild(img);
//       });
//     }
//   });

//   let offsets = [0, 0, 0];
//   let isScrolling = false;
//   let scrollTimeout;
//   let animationFrame;

//   function animate() {
//     contents.forEach((el, i) => {
//       offsets[i] += speeds[i] * directions[i];
//       const resetAt = el.scrollWidth / 3; // приблизно 1 цикл

//       if (offsets[i] >= resetAt) offsets[i] = 0;
//       if (offsets[i] <= -resetAt) offsets[i] = 0;

//       el.style.transform = `translateX(${offsets[i] * -1}px)`;
//     });

//     if (isScrolling) {
//       animationFrame = requestAnimationFrame(animate);
//     } else {
//       cancelAnimationFrame(animationFrame);
//       animationFrame = null;
//     }
//   }

//   window.addEventListener('scroll', () => {
//     isScrolling = true;
//     if (!animationFrame) animationFrame = requestAnimationFrame(animate);

//     clearTimeout(scrollTimeout);
//     scrollTimeout = setTimeout(() => {
//       isScrolling = false;
//     }, 100);
//   });
// ========================
// const logos = [
//   'images/bonus/V1.png',
//   'images/bonus/V2.png',
//   'images/bonus/V3.png',
//   'images/bonus/V4.png',
//   'images/bonus/V5.png',
//   'images/bonus/V6.png',
//   'images/bonus/V7.png'
// ];

// const directions = [1, -1, 1];
// const speeds = [0.5, 0.5, 0.5];
// const contents = [
//   document.getElementById('row1'),
//   document.getElementById('row2'),
//   document.getElementById('row3')
// ];

// // contents.forEach((container, index) => {
// //   const wrapper = document.createDocumentFragment();

// //   // Додаємо повтори і в кінець, і на початок
// //   for (let i = 0; i < 3; i++) {
// //     logos.slice().reverse().forEach(src => {
// //       const img = document.createElement('img');
// //       img.src = src;
// //       img.alt = "Логотип";
// //       // wrapper.appendChild(img);
// //       wrapper.insertBefore(img, container.firstChild); // 👈 це нове
// //     });
// //   }
// //   for (let i = 0; i < 3; i++) {
// //     logos.forEach(src => {
// //       const img = document.createElement('img');
// //       img.src = src;
// //       img.alt = "Логотип";
// //       wrapper.appendChild(img);
// //     });
// //   }

// //   container.appendChild(wrapper);
// // });
// contents.forEach((container, index) => {
//   for (let i = 0; i < 6; i++) {
//     logos.forEach(src => {
//       const img = document.createElement('img');
//       img.src = src;
//       img.alt = "Логотип";
//       if (directions[index] === -1) {
//         container.insertBefore(img, container.firstChild);
//       } else {
//         container.appendChild(img);
//       }
//     });
//   }
// });
// let offsets = [0, 0, 0];
// let isScrolling = false;
// let scrollTimeout;
// let animationFrame;

// function animate() {
//   contents.forEach((el, i) => {
//     offsets[i] += speeds[i] * directions[i];
//     const totalWidth = el.scrollWidth;

//     if (offsets[i] >= totalWidth / 2) offsets[i] = 0;
//     if (offsets[i] <= -totalWidth / 2) offsets[i] = 0;

//     el.style.transform = `translateX(${offsets[i] * -1}px)`;
//   });

//   if (isScrolling) {
//     animationFrame = requestAnimationFrame(animate);
//   } else {
//     cancelAnimationFrame(animationFrame);
//     animationFrame = null;
//   }
// }

// window.addEventListener('scroll', () => {
//   isScrolling = true;
//   if (!animationFrame) animationFrame = requestAnimationFrame(animate);

//   clearTimeout(scrollTimeout);
//   scrollTimeout = setTimeout(() => {
//     isScrolling = false;
//   }, 100);
// });
// ========================>>>>>>>>>>>>>>>>>>

  // const slider1 = document.getElementById('slider-1');
  // const slider2 = document.getElementById('slider-2');
  // const slider3 = document.getElementById('slider-3');



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
  // cloneSliderItems(slider3);


  // function moveSliders() {
  //   slider1.scrollLeft += speed;      // вліво
  //   slider2.scrollLeft -= speed;      // вправо
  //   slider3.scrollLeft += speed; 
  //   // зациклення
  //   if (slider1.scrollLeft >= slider1.scrollWidth / 2) {
  //     slider1.scrollLeft = 0;
  //   }
  //   if (slider2.scrollLeft <= 0) {
  //     slider2.scrollLeft = slider2.scrollWidth / 2;
  //   }
  //   if (slider3.scrollLeft >= slider3.scrollWidth / 2) {
  //     slider3.scrollLeft = 0;
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

// ====================================<<<<<<<<<==============
const sliders = document.querySelectorAll('.slider');
const directions = [1, -1, 1, 1, -1, 1]; // напрямки для кожного слайдера


let scrollDirection = 0;
  let scrollTimeout;
  let speed = 1;

  // Клонування вмісту для нескінченного ефекту

  // function cloneSliderItems(slider) {
  //   const items = Array.from(slider.children);
  //   items.forEach(item => {
  //     const clone = item.cloneNode(true);
  //     slider.appendChild(clone);
  //   });
  // }
  
  function cloneSliderItems(slider) {
    const items = Array.from(slider.children);
    for (let i = 0; i < 3; i++) { // клонувати 3 рази
      items.forEach(item => {
        const clone = item.cloneNode(true);
        slider.appendChild(clone);
      });
    }
  }

  sliders.forEach(slider => {
    cloneSliderItems(slider);
  });

//    function moveSliders() {
//     sliders.forEach((slider, index) => {
// if (index % 2 === 0) {
//   slider.scrollLeft += speed;
// } else {
//   slider.scrollLeft -= speed; 
// }
//       // slider1.scrollLeft += speed;      // вліво
//       // slider2.scrollLeft -= speed;      // вправо
//       // slider3.scrollLeft += speed; 
//       // зациклення
//       if (slider.scrollLeft >= slider.scrollWidth / 2) {
//         slider.scrollLeft = 0;
//       }
//       if (slider.scrollLeft <= 0) {
//         slider.scrollLeft = slider.scrollWidth / 2;
//       }
   
//       });

   
//   }
function moveSliders() {
  sliders.forEach((slider, index) => {
    const direction = directions[index];
    slider.scrollLeft += speed * direction;

    // Зациклення
    if (direction > 0 && slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollLeft = 0;
    }
    if (direction < 0 && slider.scrollLeft <= 0) {
      slider.scrollLeft = slider.scrollWidth / 2;
    }
  });
}
  let isScrolling = false;
  let animationFrame;

  function onScroll() {
    isScrolling = true;
    if (!animationFrame) {
      animationFrame = requestAnimationFrame(animateSliders);
    }

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isScrolling = false;
    }, 100); // зупиняється через 100мс після останнього скролу
  }

  function animateSliders() {
    if (isScrolling) {
      moveSliders();
      animationFrame = requestAnimationFrame(animateSliders);
    } else {
      cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }
  }

  window.addEventListener('scroll', onScroll);