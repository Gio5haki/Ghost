//Define a local konami password
var konamiPass = [38, 39, 40, 37, 97, 98, 99];
//                up, down, left, right, 1, 2, 3

var userInput = [];

//Listen to keyboard input from user
var handleUserInput = function(event) {
  //Pushing the event keycode in the array
  userInput.push(event.keyCode);

  //Comparison statement
  if (konamiPass.length === userInput.length) {
    var comparison = compareArrays(konamiPass, userInput); // true or false value
    if (comparison) {

      // variable is defined, not null and true if its a boolean value
      var bodyElement = document.getElementById("body");
      bodyElement.classList.add("fade-in");
      var ghostElement = document.getElementById("ghost");
      ghostElement.style.visibility = "visible";
      ghostElement.style.position = "absolute";
      ghostElement.style.top = 0;
      ghostElement.style.left = 0;

      // Remove the listener on my page
      document.removeEventListener("keydown", handleUserInput);

      //creating new listner
      document.addEventListener("keydown", moveGhosty);
    } else {
      userInput = [];
    }
  }
};

document.addEventListener("keydown", handleUserInput);

//compare them when user has entered the correct amount of input
var compareArrays = function(array1, array2) {

  //Loop through the first array
  var areArraysEqual = true;
  for (var index in array1) {
    if (array1[index] !== array2[index]) areArraysEqual = false;
  }
  return areArraysEqual;
};

var moveLeft = function() {
  var ghosty = document.getElementById("ghost");
  ghosty.style.left = parseInt(ghosty.style.left) - 5 + "px";
};

var moveUp = function() {
  var ghosty = document.getElementById("ghost");
  ghosty.style.top = parseInt(ghosty.style.top) - 5 + "px";
};

var moveRight = function() {
  var ghosty = document.getElementById("ghost");
  ghosty.style.left = parseInt(ghosty.style.left) + 5 + "px";
};

var moveDown = function() {
  var ghosty = document.getElementById("ghost");
  ghosty.style.top = parseInt(ghosty.style.top) + 5 + "px";
};

var moveGhosty = function(event) {
  
  //Using a switch to execute functions according to arrow pressed
  switch (event.keyCode) {
    case 37:
      //move left
      moveLeft();
      break;
    case 38:
      //move up
      moveUp();
      break;
    case 39:
      //move right
      moveRight();
      break;
    case 40:
      //move down
      moveDown();
      break;
    default:
      break;
  }
};
