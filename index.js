// Detecting button press
var totaldrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < totaldrums; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    // this.style.color = "white";
    //var audio = new Audio(ring);
    var keypressBtnInnerHTML = this.innerHTML;
       makeSound(keypressBtnInnerHTML);
       buttonAnimation(keypressBtnInnerHTML);  //calling animation on click
  });
}

//  Detecting keyboard press
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key); // calling animation on key pressing by keyboard
});

function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();

      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kickbash = new Audio("sounds/kick-bass.mp3");
      kickbash.play();
      break;

    default: console.log(keydown);

  }
}
// Button animation
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." +currentKey);

  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");}, 100);
}
