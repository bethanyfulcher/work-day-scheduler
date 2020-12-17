//  find and store a time object into a variable

var time = luxon.DateTime.local()
console.log(time)
var hour = time.hour
var dayOfTheWeek = time.weekdayLong
var day = time.day
var month = time.monthLong
var date = dayOfTheWeek + ", " + month + " " + day

//  display date at the top of the page

$("#currentDay").text(date)
// set all values less than the time to be in the past
// add attribute class= "past" to element
for (var i = 0; i < 9; i++) {
    var value = parseInt($("#" + i).attr("value"))
    if (value < hour) {
        $("#" + i).addClass("past")
    }
}
// set all values greater than the time to be in the future
// add attribute class= "future" to element
for (var i = 0; i < 9; i++) {
    var value = parseInt($("#" + i).attr("value"))
    if (value > hour) {
        $("#" + i).addClass("future")
    }
}
// set value that equals the time to be present
    // add attribute class= "present" to element
    for (var i = 0; i < 9; i++) {
        var value = parseInt($("#" + i).attr("value"))
        if (value === hour) {
            $("#" + i).addClass("present")
        }
    }

    // TODO: add click event on save buttons

    $(".saveBtn").click(function() {
        var uniqueID = $(this).prev().attr("id")
        var eventText = $(this).prev().val()
        // console.log(previous)
        // TODO: add to local storage assigned to certain date
        // localStorage.setItem(uniqueID, uniqueID)
        localStorage.setItem(uniqueID, eventText)
        renderEvents()
    })

    // TODO: render all assigned events when page refreshes
var renderEvents = function() {
    for (var i = 0; i < 9; i++)
    {
        var key = localStorage.getItem(i)
        console.log(key)
        $("#"+ i).text(key)
    }
}
renderEvents()