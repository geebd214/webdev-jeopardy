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

// Global variable  score...
var teamAscore = 0;
var teamBscore = 0;
var teamCscore = 0;

var teamA = "Team A";
var teamB = "Team B";
var teamC = "Team C";

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

function updateScore(team, score)
{  
  var id = '#' + team.replace(/\s/g, '') +'score'
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
  chaching.play();
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

// Populate modal window with specific question
function showQuestion(event, $modal) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var num = parseInt(button.data('num'));
  var question = questions[num];
  window.currentQuestion = num;
  $modal.find('.modal-title').text(question.prompt);
  $modal.find('.modal-body').empty().append(getOptions(question));
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