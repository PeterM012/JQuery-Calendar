# JQuery-Calendar

## Deployed Link
https://peterm012.github.io/JQuery-Calendar/

## Site Picture
![Daily Planner Gif](https://user-images.githubusercontent.com/110750833/194388428-994f2b1a-bf72-4a70-9ac2-b210ed2c4623.gif)


## Technologies Used
- HTML - Used to create elements on the DOM
- CSS - Styles html elements on page
- JS - Used to create interactions and animations on webpage
- Bootstrap - Used to create the layout of the page
- JSON - Used to parse and stringify  
- WEB API - Used to save on the local storage
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to Github Pages

## To Do
Create a a daily planner to schedule
Ppen the planner the current day is displayed at the top of the calendar
Scroll down presented with timeblocks for standard business hours
View the timeblocks for that day each timeblock is color coded to indicate whether it is in the past, present, or future
Click into a timeblock an event be can entered
Click the save button for that timeblock the text for that event is saved in local storage
Refresh the page the saved events persist


## Summary 
This project was to create a daily planner on JavaScript using Jquery tags. To begin this task I had to spend some time reading different articles such as W3 and MDN. After reviewing the material I was going to need I utilizing Javascript and Jquery to execute what was needed. In order to complete this task I had to use an assortment of HTML, Bootstrap, and Jquery. I used console.log() to make sure my code stayed true. During my research I discovered how to use local storage in order to getItems and setItems in order to retrieve items set in the textbox. I felt the most challenging task to overcome for this task was getting the local storage to save with out showing "\" after everytime I saved a new entry. Something that I took away from this was how to use different .js as scripts to style a page. I feel at the end of this I have achieved a better understanding of local storage and for loops. Below is my code for making my text boxes change color depending on the time.

## Code Snippet
JS
```js
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
```
