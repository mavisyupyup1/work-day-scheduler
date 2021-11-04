var descriptionEl= document.querySelector(".description");
// create array to hold tasks
var tasks =[];
function updateHourItems(){
    //assign classes (past/present/future)
    // work hour 9 is 9:00-9:59:59
    //is present if current time isBetween 9 and 9:59
    // is past if current time isAfter 9:59
    // is future is current time isBefore 9
    var todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    var currentDayEl = document.getElementById("currentDay");
    currentDayEl.textContent = todaysDate;

    for(var i=9; i<18; i++) {
        var hourEl=document.getElementById("hour-"+i);
        var workHourBegin = $("#hour-"+i);
        workHourBegin =  moment().hour(i).minute(0).second(0);
        var workHourEnd = moment(workHourBegin).add(3559,'s')
        if(moment().isBefore(workHourBegin)){
            $(hourEl).children().addClass("future");
        } if(moment().isAfter(workHourEnd)){
        $(hourEl).children().addClass("past");
        } if(moment().isBetween(workHourBegin,workHourEnd)){
        $(hourEl).children().addClass("present");
        }
    };
    $(".description").each(function(){
        var timeId =$(this).parent('.time-block').attr('id');
        var description = localStorage.getItem(timeId);
        $(this).text(description);
    });
};
var createTasks =function(){
    
}
var loadTasks =function(){
    //read relevant local storage data (about relevant hour slot)    
    tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) {
        tasks = {
          hour9: [],
          hour10: [],
          hour11: [],
          hour12: [],
          hour13: [],
          hour14: [],
          hour15: [],
          hour16: [],
          hour17: [],
        };
      }
    // loop over object properties
    $.each(tasks, function(list, arr) {
    //console.log(list, arr);
    // then loop over sub-array
    arr.forEach(function(task) {
    createTask(task.text, task.date, list);
    });
  });
  console.log(tasks)
};

var saveTasks=function(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function handleSave(event){
    console.log(event.target);     
    //tree traversal getting sibling element 
    var value= ($(event.target).siblings('.description').val());
    console.log(value);
    var taskText =$(descriptionEl).text(value);
    console.log( $(descriptionEl).text(value));
console.log(taskText)
    //getting closest (or parent not sibling))element attribute
    var hour =($(event.target).closest('.time-block').attr('id'));
    console.log(hour);
    localStorage.setItem(hour,value);
    $(".hour").each(function(){
        var currHour =$(this).text();
        console.log(this);
        var currentPlan = localStorage.getItem("hour-14");
    })
   
    saveTasks();

    
}
function main(){
    updateHourItems();
//add click event to timeSlots
//document.addEventListener('click',handleSave())
$(document).on('click','.save-btn',handleSave);
}

//start when domcontent loaded event -- cant deal with the DOM
$(document).ready(main);
