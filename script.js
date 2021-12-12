function planner() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    colorTime();
    setInterval(colorTime, 60000);

    $(".time").each(function() {
        var block = $(this).attr("id");
        //var value = $(this).find("textarea").val(); 
        console.log(localStorage.getItem(moment().format("DDDYYYY") + block));
        $("#" + block + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + block));
    });
    $(".saveBtn").on("click", save)
    console.log(moment().format("DDDYYYY"));
    //getTasks()
};

function colorTime() {
    $(".time").each(function() {
        var setHour = parseInt($(this).attr("id").replace("hour-", ""));
        var currHour = parseInt(moment().format("H")); 

        $(this).removeClass("past present future");
        
        if (setHour < currHour) {
            $(this).addClass("past");
        } else if (setHour > currHour) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}


function save(event) {
    var hour = $(this).parent().attr("id");
    var value = $(this).parent().find("textarea").val(); 
    console.log(value);
    localStorage.setItem(moment().format("DDDYYYY") + hour, value);
}

// function getTasks() {
//     $("#hour9 .description").val(localStorage.getItem("hour9"));
//     $("#hour10 .description").val(localStorage.getItem("hour10"));
//     $("#hour11 .description").val(localStorage.getItem("hour11"));
//     $("#hour12 .description").val(localStorage.getItem("hour12"));
//     $("#hour13 .description").val(localStorage.getItem("hour13"));
//     $("#hour14 .description").val(localStorage.getItem("hour14"));
//     $("#hour15 .description").val(localStorage.getItem("hour15"));
//     $("#hour16 .description").val(localStorage.getItem("hour16"));
//     $("#hour17 .description").val(localStorage.getItem("hour17"));
// }

planner();
