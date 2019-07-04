var link = document.querySelector(".write-us-link");
var popup = document.querySelector(".modal-form");
var close = document.querySelector(".modal-close");
var fullname = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");
var storage = localStorage.getItem("email");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  fullname.focus();
  if (storage) {
    email.value = storage;
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    }
  }
});
