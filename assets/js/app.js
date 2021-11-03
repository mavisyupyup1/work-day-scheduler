var descriptionEl= document.querySelector(".description");

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
    //read relevant local storage data (about relevant hour slot)    
    var tasks ={};
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
    };
    function handleSave(e){
       //console.log(e.target);      
       var hour = ($(e.target).sibling('.description').val());
       console.log(hour);
        //tree traversal getting sibling element
        console.log($(e.target).sibling('.description').val());
        var value =($(e.target).closest('.time-block').attr('id'));
    //getting closest (or parent not sibling))element attribute
        console.log($(e.target).closest('.time-block').attr('id'));
        localStorage.setItem(hour,value);
    
    }
    function main(){
        updateHourItems();
    //add click event to timeSlots
    //document.addEventListener('click',handleSave())
    $(document).on('click','.save-btn',handleSave);
    }
    
    //start when domcontent loaded event -- cant deal with the DOM
    $(document).ready(main);