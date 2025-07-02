const cursor = document.querySelector(".custom-cursor");
const cursorCircle = document.querySelector(".cursor-circle");

// Движение курсора
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Эффект при наведении
const hoverElements = document.querySelectorAll("a, button, [data-hover]");
hoverElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
  });
});

// Эффект клика
document.addEventListener("mousedown", () => {
  cursorCircle.style.transform = "translate(-50%, -50%) scale(0.8)";
});
document.addEventListener("mouseup", () => {
  cursorCircle.style.transform = "translate(-50%, -50%) scale(1)";
});

//filtr--action
const filtrNavLi = document.querySelectorAll(".filtr-nav li");
filtrNavLi.forEach(function (li) {
  li.addEventListener("click", function (e) {
    e.preventDefault();

    filtrNavLi.forEach(function (li1) {
      li1.classList.remove("filtr-nav--active");
    });

    this.classList.add("filtr-nav--active");
  });
});
