var today = moment();
var saveButton = document.querySelector(".saveBtn");
//figure out how the text will get entered
var taskEntry = document.querySelector(".input");
$("#currentDay").text(today.format("MMM Do, YYYY"));

// console.log(taskEntry);

saveButton.addEventListener("click", function() {
    
    localStorage.setItem("taskEntry", JSON.stringify(taskEntry.value));
    
    saveInput();
    console.log(taskEntry.value);

});

function saveInput() {
    var taskOutput = localStorage.getItem("taskEntry");
    var key = true;
    if (key) {
        taskOutput = JSON.parse(localStorage.getItem("taskEntry"));
    }
    // var newTask = JSON.stringify(taskOutput);
    // console.log(newTask);
    // localStorage.setItem("taskEntry", newTask);
    return taskOutput;

   
}
