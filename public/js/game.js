var mostCommonConsonants = ["D", "H", "L", "N", "R", "S", "T"];
var commonConsonants = ["C", "F", "G", "M", "W", "Y"];
var lessCommonConsonants = ["B", "K", "P", "V"];
var uncommonConsonants = ["J", "Q", "X", "Z"];
var mostCommonVowels = ["A", "E"];
var commonVowels = ["I", "O"];
var u = ["U"];
var cellNumbers;

// function to create a range of numbers
function range (n) {
  var arr = Array(n);
  for (var i = 0; i < n; i++) {
      arr[i] = i + 1;
  }
  return arr;
}

// function to randomize elements in an array
var randomize = function(array) {
  return array.sort(function() { return 0.5 - Math.random(); });
};

var populate = function(number, group) {
  for (var i = 1; i <= number; i++) {
    var letter = randomize(group)[0];
    var $cellNumber = $("#cell" + cellNumbers.shift());
    $cellNumber.text(letter);
  }
};

// load letters function
var loadLetters = function() {
  cellNumbers = randomize(range(81));

  populate(3, u);
  populate(4, uncommonConsonants);
  populate(9, commonVowels);
  populate(15, mostCommonVowels);
  populate(20, lessCommonConsonants);
  populate(30, commonConsonants);
};

function warningMessage (message) {
  var n = noty({text: message,
                layout: 'center',
                theme: 'relax',
                type: 'warning',
                modal: true,
                closeWith: ['click', 'backdrop']
              });
}

function clearWordSelection () {
  $(".board-cell").removeClass("selected-square");
  $(".selected-word").empty();
  wordArray = [];
}
