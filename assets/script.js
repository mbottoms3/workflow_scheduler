var today = moment();
var saveButton = document.querySelector(".saveBtn");
//figure out how the text will get entered
var taskEntry = document.querySelector(".input");
$("#currentDay").text(today.format("MMM Do, YYYY"));

//finish finding a way to target the text user enters, then save it to local storage that persists through a page refresh
var taskOutput = localStorage.getItem("taskEntry");

taskEntry.textContent = taskOutput;

saveButton.addEventListener("click", function() {
    
    localStorage.setItem("taskEntry", (taskEntry));
    // renderMessage();
    console.log(taskEntry);

});

// function renderMessage() {
//     var key = true;
//     var finalTask = JSON.parse(localStorage.getItem("taskEntry"));

//     if (key) {
//         taskEntry.textContent = finalTask;
        
//     }
    
// }
