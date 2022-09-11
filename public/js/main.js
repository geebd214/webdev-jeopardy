// import questions from './questions.js';

// Buzzer & Chaching sounds
var buzzer = document.getElementById("buzzer");
buzzer = window.buzzer;

function playbuzzer() {
  buzzer.play();
}

function pausebuzzer() {
  buzzer.pause();
}
var chaching = document.getElementById("chaching");
chaching = window.chaching;

function playchaching() {
  chaching.play();
}

function pausechaching() {
  chaching.pause();
}

function playdailydouble() {
  dailydouble.play();
}

// Global variable  score...
var teamAscore = 0;
var teamBscore = 0;
var teamCscore = 0;

var teamA = "Team A";
var teamB = "Team B";
var teamC = "Team C";

var category = ["NAPSTER", "ICON", "626", "THE HILLS", "SCREENS", "TAG YOU'RE IT"]

$(document).ready(function() {
  $('#category0').text(category[0]);
  $('#category1').text(category[1]);
  $('#category2').text(category[2]);
  $('#category3').text(category[3]);
  $('#category4').text(category[4]);
});

//
$(function () {
  // Hide the Modal after submit
  $("#correctSubmit").click(function () {
    $("#myModal").modal("hide");
  });
});

$(function () {
  // Remove Element after click
  $(".gridbtn").click(function () {
    $(this).addClass("disabled");
    $(this).remove();
  });
});

$("#wrongSubmit").on("click", function () {
  wrongSubmit();
});

$("#correctSubmit").on("click", function () {
  correctSubmit();
});

function updateScore(team, score) {
  var id = '#' + team.replace(/\s/g, '') + 'score'
  $(id).html("  $" + score);
  if (!Math.sign(score)) {
    $(id).addClass("negative");
  } else {
    $(id).removeClass("negative");
  }
}

function correctSubmit(a, b) {
  var selected = $(".modal-body input:checked").val();
  console.log(selected + " was selected");
  chaching.play();
  var prize = questions[window.currentQuestion].cashPrize;
  if (selected === teamA) {
    teamAscore = teamAscore + prize;
    updateScore(teamA, teamAscore)
  }

  if (selected === teamB) {
    teamBscore = teamBscore + prize;
    updateScore(teamB, teamBscore)
  }

  if (selected === teamC) {
    teamCscore = teamCscore + prize;
    updateScore(teamC, teamCscore)
  }
}

function wrongSubmit(a, b) {
  var selected = $(".modal-body input:checked").val();
  console.log(selected + " was selected");
  buzzer.play();
  var prize = questions[window.currentQuestion].cashPrize;
  if (selected === teamA) {
    teamAscore = teamAscore - prize;
    updateScore(teamA, teamAscore)
  }

  if (selected === teamB) {
    teamBscore = teamBscore - prize;
    updateScore(teamB, teamBscore)
  }

  if (selected === teamC) {
    teamCscore = teamCscore - prize;
    updateScore(teamC, teamCscore)
  }
}

// Get question info from array, prepare
function getOptions(question) {
  var $buttonDiv = $('<div id="disabled" class="btn-group" data-toggle="buttons"></div>');
  question.options.forEach(function (opt) {
    var $div = $('<div class="radio">');
    var $label = $('<label class="radio-inline"></label');
    var $input = $('<input type="radio" name="opts" value="' + opt + '">');
    $label.append($input);
    $label.append(opt);
    $div.append($label);
    $buttonDiv.append($div);
  });
  return $buttonDiv;
}

function getQuestion(question) {
  var $questionDiv = $('<div></div>');
  $questionDiv.text(question.prompt);

  if (question.media != '') {
    var $mediaDiv = $('<div></div>');
    var $centerDiv = $('<center></center>');
    
    var source = question.media;    
    if (source.search("audio") >=  0) {
      var $audioDiv = $('<audio controls></audio>');
      var $audioSource = $('<source src=' + question.media + ' type="audio/mpeg">');
      $audioDiv.append($audioSource);
      $centerDiv.append($audioDiv);
    } else if (source.search("video") >=  0) {
      var $videoDiv = $('<video width="640" height="480" controls></video>');
      var $videoSource = $('<source src=' + question.media + ' type="video/mp4">');
      $videoDiv.append($videoSource);
      $centerDiv.append($videoDiv);
    } else { // assume image
      var $imgDiv = $('<img src=' + question.media + ' width="480">');            
      $centerDiv.append($imgDiv);
    }

    $mediaDiv.append($centerDiv);
    $questionDiv.append($mediaDiv);
  }

  console.log($questionDiv);
  return $questionDiv
}

// Populate modal window with specific question
function showQuestion(event, $modal) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var num = parseInt(button.data('num'));
  var question = questions[num];
  var prize = question.cashPrize;
  window.currentQuestion = num;
    
  if (question.dailyDouble === "true") {
    dailydouble.play();
    $('#myModaldd').modal('show');
  }

  $modal.find('.modal-title').text(question.category + " - $" + question.cashPrize);

  //fill question and media
  $modal.find('.modal-question').empty().append(getQuestion(question));

  //fill team selects
  $modal.find('.modal-options').empty().append(getOptions(question));
}

// Modal show/close functions
$(function () {
  $("#myModal").on('show.bs.modal', function (event) {
    showQuestion(event, $(this));
  });
});

$("#myModal").on('hidden.bs.modal', function () {
  // console.log('The modal is now hidden.');
});

$('.modal-body input:checked').submit(function () {
  $('#myModal').modal('toggle');
  return false;
});