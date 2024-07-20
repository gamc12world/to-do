const btn = document.querySelector(".add");
const div = document.querySelector("div");
const remove = document.querySelector(".remove");
const input = document.querySelector("input");
let text;
let emt = JSON.parse(localStorage.getItem("aman")) || [];
window.addEventListener("load", () => {
  emt.forEach((text) => {
    const p = document.createElement("li");
    p.innerText = text;
    div.appendChild(p);
  });
});

input.addEventListener("input", (e) => {
  text = e.target.value;
});

btn.addEventListener("click", () => {
  if (text) {
    const p = document.createElement("li");
    p.innerText = text;
    div.appendChild(p);
    emt.push(text);
    localStorage.setItem("aman", JSON.stringify(emt));
    input.value = "";
    text = "";
  }
});

remove.addEventListener("click", () => {
  if (emt.length > 0) {
    div.removeChild(div.firstChild);
    emt.pop();
    localStorage.setItem("aman", JSON.stringify(emt));
  }
});
