

document.addEventListener("DOMContentLoaded", () => {
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
    
    const sections = document.querySelectorAll(".translatey--section");
    
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

  const logos = [
    'images/bonus/V1.png',
    'images/bonus/V2.png',
    'images/bonus/V3.png',
    'images/bonus/V4.png',
    'images/bonus/V5.png',
    'images/bonus/V6.png'
  ];

  const directions = [1, -1, 1]; // Напрямки
  const speeds = [0.5, 0.5, 0.5]; // Швидкості
  const rows = document.querySelectorAll(".scroll-row");

  // Додаємо достатню кількість зображень
  rows.forEach((row) => {
    let totalWidth = 0;
    while (totalWidth < window.innerWidth * 3) {
      logos.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Логотип";
        row.appendChild(img);
        totalWidth += 140; // ширина зображення + margin
      });
    }
  });

  // Початкове положення для тих, що рухаються вліво
  // rows.forEach((row, index) => {
  //   if (directions[index] === -1) {
  //     row.scrollLeft = row.scrollWidth / 2;
  //   }
  // });
  // setTimeout(() => {
    rows.forEach((row, index) => {
      if (directions[index] === -1) {
        row.scrollLeft = row.scrollWidth / 2;
      }
    });
  // }, 50);

  let isScrolling = false;
  let scrollTimeout;
  let animationFrame;

  function moveRows() {
    rows.forEach((row, index) => {
      const dir = directions[index];
      const speed = speeds[index];
      row.scrollLeft += speed * dir;

      const maxScroll = row.scrollWidth / 2;

      if (dir === 1 && row.scrollLeft >= maxScroll) {
        row.scrollLeft = 0;
      } else if (dir === -1 && row.scrollLeft <= 0) {
        row.scrollLeft = maxScroll;
      }
    });
  }

  function onScroll() {
    isScrolling = true;
    if (!animationFrame) {
      animationFrame = requestAnimationFrame(animateScroll);
    }

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isScrolling = false;
    }, 100);
  }

  function animateScroll() {
    if (isScrolling) {
      moveRows();
      animationFrame = requestAnimationFrame(animateScroll);
    } else {
      cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }
  }

  window.addEventListener("scroll", onScroll);
});

