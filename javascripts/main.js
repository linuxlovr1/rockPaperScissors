
var options = ["rock", "paper", "scissors"];

var selectors = document.getElementsByClassName('selector');
for(var i = 0; i < selectors.length; i++) {
  var el = selectors[i];
  el.addEventListener("click", function() {
    game(this.id);
  })
}

function sample(options) { 
  var userChoice = options[Math.floor(Math.random() * options.length)];
  console.log(userChoice)
  
}

function game(choice) {
  console.log(choice);
}
