function updateHourItems(){
    //assign classes (past/present/future)
    
    //read relevant local storage data (about relevant hour slot)
    
    };
    function handleSave(e){
        console.log(e.target);
       var hour = ($(e.target).sibling('.description').val());
    
        //tree traversal getting sibling element
        console.log($(e.target).sibling('.description').val());
        var value =($(e.target).closest('.time-block').attr('id'));
    //getting closest (or parent not sibling))element attribute
        console.log($(e.target).closest('.time-block').attr('id'));
        localStorage.setItem(hour,value65564           );
    
    }
    function main(){
        console.log('here');
       
        updateHourItems();
    //add click event to timeSlots
    //document.addEventListener('click',handleSave())
    $(document).on('click','.save-btn',handleSave);
    }
    
    //start when domcontent loaded event -- cant deal with the DOM
    $(document).ready(main);