//for simple things this is
//although probably right.But typically the ui reflects the data not be the sole place where it is.
//therefore will add an object oriented way.

//in this added validation also and not added live inline validation the one which we see in facebook or google forms.
//but this is of the sort that if we click submit we can get the errors.the live one we can code as well.
//was given a project in odin forms section to code up live inline validation,will do it later.Its easy.
let mylibrary = [];

function createbook(name, title, pages) {
  this.name = name;
  this.pages = pages;
  this.title = title;
}
const button = document.querySelector("button");
const container = document.querySelector(".books-container");
const close = document.querySelector(".close");
const modal = document.querySelector(".modal-container");

function random() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let str = `rgb(${x},${y},${z})`;
  return str;
}

button.addEventListener("click", function () {
  modal.classList.add("show");
  document.querySelector(".x").value = "";
  document.querySelector(".y").value = "";
  document.querySelector(".z").value = "";
  document.querySelector(".p").value = "";
});

const form = document.querySelector("form");
close.addEventListener("click", function () {
  if (form.checkValidity()) {
    modal.classList.remove("show");
    const div = document.createElement("div");
    div.className = "box";
    div.innerHTML =
      document.querySelector(".x").value +
      "<br>" +
      document.querySelector(".y").value +
      "<br>" +
      document.querySelector(".z").value;
    const book = new createbook(
      document.querySelector(".x").value,
      document.querySelector(".y").value,
      document.querySelector(".z").value
    );
    mylibrary.push(book);

    let str = random();
    div.style.backgroundColor = str;
    div.addEventListener("click", function () {
      div.remove();
    });
    container.appendChild(div);
  }
});
