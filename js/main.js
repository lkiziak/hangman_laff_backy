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
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var word = {};
var $display = $("#display");
var $clear = $("#clear");
var $newGame = $("#new");
var img = ["http://i.imgur.com/H99R7c2.png", "http://i.imgur.com/3srMXwg.png", "http://i.imgur.com/A1algeB.png", "http://i.imgur.com/PB6Vut3.png", "http://i.imgur.com/jpMAWFH.png", "http://i.imgur.com/Vjctm0x.png"];
var counter = 0; //count correct guesses
var guesses = 0;


// takes a random word, sets it to my word object, and saves the index in that
// word object, as well
function chooseWord() {
  var index = Math.floor(Math.random()*words.length);
  word.index = index;
  word.english = words[index];
  word.spanish = spanWords[index];
  console.log(word);
  makeNewWordBlanks(word);
  return word;
}

function chooseSrc() {
  var index = Math.floor(Math.random()*img.length);
  //console.log(img);
  return img[index];
}

chooseSrc();
chooseWord();

function add() {
  counter +=1;
}


//var guess;
var guessCnt = 4;
var player = { correct: [], incorrect: []};
for (var i = 0; i < letters.length; i++) {
    if (player.correct.length === letters.length) {
     $('img').append();
    } else if (player.incorrect.length >= 4) {
        alert('Game Over');
  }
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
  //console.log(e.target.value);
  var charLetter = e.target.value,
      lettersArray = $('.english-letter');
      console.log(lettersArray);
      // how to loop through an object
  // $.each(word, function (key, value) {
  // })
  for (var i = 0; i < word.english.length; i++) {
//step 1- check word letter 'i' vs. lettersArray 'i'
    if (charLetter.toLowerCase() === word.english[i]) { //.char.toUpperCase()
      console.log(word);
      //push to player.correct
      $(lettersArray[i]).html(lettersArray[i].char);
      add();
    }
    // console.log("in loop");
    // else unsucessful, then we need to add to the misses array
    // create logic for when misses get to a certain point, we end the game
//check if successful then change lettersArray 'i' html
  }
//if no more blank letters end game
});



$('#clear').on('click', function(e) {
  console.log(e.target.value);
})

$('#new').on('click', function(e) {
  console.log(e.target.value);
})

$('.display').on('click', function(e) {
  console.log(e.target.value);
})







