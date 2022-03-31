var today = moment();
var hour = moment().hour();
var tableRows = $("#table tr");
var buttonEl = $("button");

//sets the current day on the Title
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

//Checks time and changes the color of the time block elements
function checkTime() {

  //creates object of all elements with the textArea Class
  var timeBlockElements = $("textarea");
  //console.log(timeBlockElements);
  for (var i = 0; i < timeBlockElements.length; i++) {
    var timeBlockID = timeBlockElements[i].id;

    $(timeBlockID).removeClass(".past .present .future");

    if (timeBlockID < hour) {
      $(timeBlockElements[i]).addClass("past");
    } else if (timeBlockID > hour) {
      $(timeBlockElements[i]).addClass("future");
    } else {
      $(timeBlockElements[i]).addClass("present");
    }
    //console.log(timeBlockID);
  }
}

//initializes localStorage time log
function initTimeLog() {
  var storedTimeLog = JSON.parse(localStorage.getItem('timeLog'));

  if (storedTimeLog !== null) {
    timeLog = storedTimeLog;
  }

};

  //click button function
  buttonEl.on("click", function () {
    // saving the text and hour from the targeted block
    //console.log(buttonEl.id);
    var hourRow = $(this).parentsUntil("tr").siblings(1).children().attr('id');
    console.log(hourRow);
    var savedText = $(this).parentsUntil("tr").siblings(1).children().val();
    console.log(savedText);
    // saving hourBlock and savedText to local storage 
    localStorage.setItem(hourRow, savedText);
  })

  checkTime();

  //loops through localStorage and calls it to the text area
  for (var j = 9; j <= 18; j++){
    $("#"+j).val(localStorage.getItem(j));
  }
