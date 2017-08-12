  var link = document.querySelector(".login");
  var popup = document.querySelector(".modal-content");
  var close = document.querySelector(".modal-content-close");

link.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.add("modal-content-show");
});
close.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event){
  if (event.keyCode === 27){
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
    }
  }
});

  var mapOpen = document.querySelector(".js-open-map");
  var mapPopup = document.querySelector(".modal-content-map");
  var mapClose = document.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event){
  event.preventDefault();
  mapPopup.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function(event){
  event.preventDefault();
  mapPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event){
  if (event.keyCode === 27){
    if (mapPopup.classList.contains("modal-content-show")) {
      mapPopup.classList.remove("modal-content-show");
    }
  }
});