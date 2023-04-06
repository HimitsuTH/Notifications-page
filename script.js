const notRead = document.querySelectorAll("article.active");
const mark = document.getElementById("read");
const count = document.getElementById("count");

// console.log(mark);
// console.log(notRead)

mark.addEventListener("click", () => onClick());

const onClick = () => {
  notRead.forEach((nr, i) => {
    nr.classList.remove("active");
    const checkRead = document.querySelectorAll("article.active");
    count.textContent = `${checkRead.length}`;
  });
};

window.addEventListener("load", () => {
  count.textContent = `${notRead.length}`;
});

notRead.forEach((nr, i) => {
  nr.addEventListener("click", () => removeActive(i));
});

const removeActive = (i) => {
  notRead[i].classList.remove("active");
  const checkRead = document.querySelectorAll("article.active");
  count.textContent = `${checkRead.length}`;
};
