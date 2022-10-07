// Time in the jumbotron showing current day and time 
var setDate = moment().format('dddd') + " " + moment().format("MMM Do YYYY");
var hour = moment().hours();

// time interval for keeping day and time updated at real time
var interval = setInterval(function() {
    var now = moment();
    $("#currentDay").html(setDate);
    $("#currentDay").html(setDate + "" + now.format(" h:mm:ss a"));
    hourColor();
}, 100);

//Function with a for loop that loops through the my array of numbers. 
//Displays the color needed depending on the time of day
function hourColor() {
    for (let i = 9; i < 18; i++) {
        var event = document.getElementById(i + "")
             if (i > hour) { //future
                event.classList.add("future");
            } 
            else if(i < hour) { //past
                event.classList.add("past");
                if (i == 17) {
                    break;
                }
            }
            else { event.classList.add("present");//present
            }
        };
}
//for loop for my local storage to retrieve the items saved 
    for (let i = 9; i < 18; i++) {
        var read = localStorage.getItem("" + i);
        if(read !== null) {
            $("#" + i).val(read);
        }
    }
//click function that saves the information in the textarea when the save button is clicked
$(".saveBtn").on("click", function(){
    localStorage.setItem($(this).siblings("textarea").attr("id"), $(this).siblings("textarea").val());
}) 


 