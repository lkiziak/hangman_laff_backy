//setup initial state variables - variables defined
//var wordIndex;
//function randomIndex() {
  // random index of words array
  // wordIndex = randomIndex;
//}
// FUNCTION: for (var i = 0; i < words[1].length; i++) {
//   newWordBlanks += '_ '
// }
// FUNCTION: for (var i = 0; i < words[i].length; i++) {
//   $('#english').text('_ ');
// }
//newGame()
//document.getElementById("button").onclick = guessLetter;
//

var words = ["apple", "monkey", "car", "school", "house"];
var spanWords = ["manzana", "mono", "carro", "escuela", "casa"];
var newWordBlanks = "";
var guessLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var word = {};


// takes a random word, sets it to my word object, and saves the index in that
// word object, as well
function chooseWord() {
  var index = Math.floor(Math.random()*words.length);
  word.index = index;
  word.english = words[index];
  console.log(word);
}

function newWordBlanks (word) {
  var blanks = "";
  for (var i = 0; i < word.length; i++) {
    blanks += '_ '
  }
  return blanks
}

//guess letters
function guessLetters () {
var letters = [];
  if (guess === null) {
    break;
  } else if (guess.length != 1) {
    alert("Try again.");
  } else {
    for (var j = 0; j < word.length; j++);
      if (words[j] === guess) {
        blanks[j] === guess;
     }
    }
}




