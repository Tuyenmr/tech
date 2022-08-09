let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

let themeToggler = document.querySelector("#theme-toggler");

themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-sun");
  if (themeToggler.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};

// document.addEventListener("DOMcontentLoaded", () => {
//   function counter(id, start, end, duration) {
//     let obj = document.getElementById(id),
//       current = start,
//       range = end - start,
//       increment = end > start ? 1 : -1,
//       step = Math.abs(Math.floor(duration / range)),
//       timer = setInterval(() => {
//         current += increment;
//         obj.textContent = current;
//         if (current == end) {
//           clearInterval(timer);
//         }
//       }, step);
//   }
//   counter("t1", 0, 80, 3000);
//   counter("t1", 0, 100, 3000);

//   counter("t1", 0, 100, 3000);
// });
const counters = document.querySelectorAll(".count");
counters.forEach((counter) => {
  counter.innerText = "0";
  const update = () => {
    const target = counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 200;
    if (c < target) {
      counter.innerText = ` ${Math.ceil(c + increment)} `;
      setTimeout(update, 120);
    } else {
      counter.innerText = target;
    }
  };
  update();
});
