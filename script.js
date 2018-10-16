const articleHeader = document.querySelector(".article__header");
articleHeader.textContent = "Welcome to the Kelly Blog";

const header = document.querySelectorAll(".article__header");

for (let i = 0; i < header.length; i++){
  header[i].classList.add("important");
}

const dashed = document.querySelector(".dashed");
dashed.remove();

const footer = document.querySelector(".article__footer");
footer.classList.add("goldenrod");