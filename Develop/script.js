//displays current time/ tried to use jquery but couldnt get it to show up
var CurrentDay = document.querySelector("#currentDay")
var Today = moment();

CurrentDay.textContent = Today.format("dddd, MMMM Do YYYY");

//i need a click listener for the save button
$(".saveBtn").on("click", function() {
    //set variables for text and time
    event.preventDefault();
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //save the text in local storage
    localStorage.setItem(text, time);
});

//now i need it to persist after