$(function() {
  // container to hold player's chosend letters
  var wordArray = [];

  //populate the playing board with letters
  loadLetters();

  // 
  $(".board-cell").on("click", function() {
    var $cell = $(this);
    var letter = $cell.text();
    if ($cell.hasClass("berry")) {
      $cell.addClass("selected-square");
      wordArray.push(letter);
      $(".selected-word").append("<span class='selected-letter'>" + letter + "</span>");
      console.log(wordArray);
    }
    else {
      warningMessage("That's nacho square!");
    }
  });

  $(".submit").on("click", function(event) {
    event.preventDefault();

    if (wordArray.length === 0) {
      warningMessage("You didn't make a word!");
    }
    if (wordArray.length > 0 && wordArray.length < 3) {
      warningMessage("Words must be at least 3 letters long");
      clearWordSelection();
    }

    var data = "word=" + wordArray.join("").toLowerCase();
    console.log(data);
    var route = $(this).attr("action");
    var method = $(this).attr("method");

    var request = $.ajax({
      url: route,
      method: method,
      data: data,
    });

    request.done(function(response) {
        console.log(response);
        clearWordSelection();
    });
  });

});
