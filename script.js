


// TODO: find and store a time object into a variable
var time = luxon.DateTime.local()
console.log(time)
var dayOfTheWeek = time.weekdayLong
var day = time.day
var month = time.monthLong
var date = dayOfTheWeek + ", " + month + " " + day
console.log(date)
// TODO: display date at the top of the page

$("#currentDay").text(date)

// TODO: set all values less than the time to be in the past
    // TODO: add attribute class= "past" to element
// TODO: set all values greater than the time to be in the future
    // TODO: add attribute class= "future" to element
// TODO: set value that equals the time to be present
    // TODO: add attribute class= "present" to element

// TODO: add click event on save buttons
    // TODO: add to local storage assigned to certain date
    // TODO: render all assigned events when page refreshes

