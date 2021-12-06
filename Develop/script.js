//displays current time/ tried to use jquery but couldnt get it to show up
var CurrentDay = document.querySelector("#currentDay")
var Today = moment();

CurrentDay.textContent = Today.format("dddd, MMMM Do YYYY, h:mm:ss a");



