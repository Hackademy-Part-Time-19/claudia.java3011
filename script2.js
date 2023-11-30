var images = ["immagine1.jpg", "immagine2.jpg", "immagine3.jpg"];
var currentIndex = 0;
var imageElement = document.getElementById("myImage");

function changeImage() {
  imageElement.style.opacity = 0;
  setTimeout(function() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
    imageElement.style.opacity = 1;
  }, 1000);
}

setInterval(changeImage, 5000);