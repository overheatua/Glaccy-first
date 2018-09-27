var link = document.querySelector(".contact-link");
var modal = document.querySelector(".modal-contact-form");
var close = document.querySelector(".modal-contact-form .close-btn");
var overlay = document.querySelector(".modal-overlay");
var firstName = modal.querySelector("[name=first-name]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  overlay.classList.add("modal-show");
  firstName.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
    }
  }
});
