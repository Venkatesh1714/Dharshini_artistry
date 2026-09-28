const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("show"));
});

document.getElementById("year").textContent = new Date().getFullYear();
