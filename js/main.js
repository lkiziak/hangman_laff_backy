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


//function for letters to come up on screen
//have operting buttons function on screen


var words = ["apple", "monkey", "car", "school", "house"];
var spanWords = ["manzana", "mono", "carro", "escuela", "casa"];
var guessLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var word = {};
var $display = $("#display");
var $clear = $("#clear");
var $play = $("#play");
var $newGame = $("#new");
var MaxGuesses = "";


// takes a random word, sets it to my word object, and saves the index in that
// word object, as well
function chooseWord() {
  var index = Math.floor(Math.random()*words.length);
  word.index = index;
  word.english = words[index];
  word.spanish = spanWords[index];
  console.log(word);
  return(word);
}

function makeNewWordBlanks(word) {
  $('#english').html("");
  for (var i = 0; i < word.english.length; i++) {
    var letter = document.createElement('span');
    letter.innerHTML = '_ ';
    letter.className = "english-letter";
    letter.char = word.english[i];
    console.log(letter, letter.char);
    $('#english').append(letter);
  }
}

$('.letter').on('click', function(e) {
  console.log(e.target.value);
  var charLetter = e.target.value,
      lettersArray = $('.english-letter');
      console.log(lettersArray);
  for (var i = 0; i < word.english.length; i++) {
//step 1- check word letter 'i' vs. lettersArray 'i'
if (charLetter === lettersArray[i].char.toUpperCase()) {
  $(lettersArray[i]).html(lettersArray[i].char);
}
//check if successful then change lettersArray 'i' html
  }
//if no more blank letters end game
});

$('#clear').on('click', function(e) {
  console.log(e.target.value);
})

$('#play').on('click', function(e) {
  console.log(e.target.value);
})

$('#new').on('click', function(e) {
  console.log(e.target.value);
})

$('.display').on('click', function(e) {
  console.log(e.target.value);
})

makeNewWordBlanks(chooseWord());




//Guess Letters
//function guessLetters () {
//var letters = [];
// if (guess === null) {
//    break;
//  } else if (guess.length != 1) {
//    alert("Try again.");
//  } else {
//    for (var j = 0; j < word.length; j++);
//      if (words[j] === guess) {
//        blanks[j] === guess;
//     }
//    }
//}




