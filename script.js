let nine = $("#9")
let ten = $("#10")
let eleven = $("#11")
let twelve = $("#12")
let one = $("#1")
let two = $("#2")
let three = $("#3")
let four = $("#4")
let five = $("#5")
let time = moment()

function planner() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))
    $(".time-block").each(function() {
        let id = $(this).attr("id")
        let task = localStorage.getItem(id)

        if (task !== null)
        {
            $(this).children(".schedule").val(task)
        }
    })
}

planner()
let saveBtn = $(".saveBtn")

saveBtn.on("click", function() {
    let time = $(this).parent().attr("id")
    let schedule = $(this).siblings(".schedule").val()

    localStorage.setItem(time, schedule)
})

function currentTime()
{
    hour = time.hours()
    $(".time-block").each(function()
    {
        let thisHour = parseInt($(this).attr("id"))
        
        if (thisHour > hour)
        {
            $(this).addClass("future")
        }
        else if (thisHour === hour)
        {
            $(this).addClass("present")
        }
        else
        {
            $(this).addClass("past")
        }
    })
}

currentTime()