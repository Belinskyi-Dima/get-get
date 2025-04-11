
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".translatey--section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.3 // можна змінити (напр. 0.1 або 0.5)
    });

    sections.forEach(section => {
      observer.observe(section);
    });
  });

