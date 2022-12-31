const gethamburgers = document.getElementById("hamburgers");
const getmenus = document.getElementById("menus");
const getnavs = document.querySelectorAll(".navs");
const getbody = document.querySelector("body");
const getmoon = document.getElementById("moon");

getmoon.addEventListener("click", function () {
  getbody.classList.toggle("dark");
});

gethamburgers.addEventListener("click", function () {
  getmenus.classList.toggle("hidden");
  gethamburgers.classList.toggle("bg-white");
  gethamburgers.querySelectorAll("div").forEach((ele) => {
    ele.classList.toggle("bg-indigo-900");
  });
});

getnavs.forEach((ele) => {
  ele.addEventListener("click", () => {
    getmenus.classList.toggle("hidden");
    gethamburgers.classList.toggle("bg-white");
    gethamburgers.querySelectorAll("div").forEach((ele) => {
      ele.classList.toggle("bg-indigo-900");
    });
  });
});

const exampleText = ["NyiZin", "Developer", "Frelancer", "Learner"];
const exampleTyping = new AutoTyping("#text", exampleText, {
  typeSpeed: 100,
  deleteSpeed: 100,
  waitBeforeDelete: 2000,
  waitBetweenWords: 500,
});
exampleTyping.start();

const getYear = document.getElementById("year");

const currentYear = new Date().getFullYear();
getYear.textContent = currentYear;
