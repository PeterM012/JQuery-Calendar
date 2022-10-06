var setDate = moment().format('dddd') + " " + moment().format("MMM Do YYYY");
var hour = moment().hours();

var interval = setInterval(function() {
    var now = moment();
    $("#currentDay").html(setDate);
    $("#currentDay").html(setDate + "" + now.format(" h:mm:ss a"));
    hourColor();
}, 100);

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

    for (let i = 9; i < 18; i++) {
        var read = localStorage.getItem("" + i);
        if(read !== null) {
            $("#" + i).val(read);
        }
    }

$(".saveBtn").on("click", function(){
    localStorage.setItem($(this).siblings("textarea").attr("id"), $(this).siblings("textarea").val());
}) 


 