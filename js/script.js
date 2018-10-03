var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 50.116477, lng: 30.636405},
    zoom: 17,
    disableDefaultUI: true
  });

  var image = 'img/map-pin.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 50.116477, lng: 30.636405},
    map: map,
    icon: image
  });
}

var link = document.querySelector(".contact-link");
var modal = document.querySelector(".modal-contact-form");
var close = document.querySelector(".modal-contact-form .close-btn");
var overlay = document.querySelector(".modal-overlay");
var firstName = modal.querySelector("#first-name");

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
