var link = document.querySelector(".write-us-link");
var popup = document.querySelector(".modal-form");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var text = popup.querySelector("[name=your-name]");
var text = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=write-text]");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  your-name.focus();
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
form.addEventListener("submit", function (evt) {
  if (!text.value || !text.value || !text.value ) {
    evt.preventDefault();
    console.log("Заполните поля");
  }
});

