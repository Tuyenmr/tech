let bar = document.getElementById("bar");
let nav = document.getElementById("navbar");
let closes = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (closes) {
  closes.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
