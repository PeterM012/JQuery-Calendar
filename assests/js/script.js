var setDate = moment().format('dddd') + " " + moment().format("MMM Do YYYY");
var setHour = moment().format("h:mm:ss a")

var hour = moment().hours();

var interval = setInterval(function() {
    var now = moment();
    $("#currentDay").html(now.format("MMM Do YYYY")) + "" + now.format("dddd");
    $("#currentDay").html(setDate + "" + now.format(" h:mm:ss a"));
    for (let i = 9; i <= 18; i++) {
    var event = document.getElementById(i + "")
         if (i > now.hours()) { //future
            event.classList.add("future");
        } 
        else if(i < now.hours()) { //past
            event.classList.add("past");
        }
        else { event.classList.add("present");//present
        }
}}, 100);

// function stringifyLocalStorage(){
//     var stringifyObjects = JSON.parse(localStorage.getItem());
//     for (var i = 9; i < 18; i++)
//  }

// function parseLocalStorage(){
//     var parsedObjects = [];
//     for (var i = 9; i < 18; i++) {
//         parsedObjects.push(JSON.parse(localStorage.getItem()));
//     }
//     return parsedObjects;
// }

    for (let i = 9; i < 18; i++) {
        $("#" + i).val(localStorage.getItem(JSON.parse(i)));  
    }


$(".saveBtn").on("click", function(){
    localStorage.setItem($(this).siblings("textarea").attr("id"),JSON.stringify($(this).siblings("textarea").val()))
}) 


 