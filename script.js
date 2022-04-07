setInterval(function(){
    const time = document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "PM"
    if(hours > 24){
        day_night = "AM"
        hours = hours - 12;
    }
    time.textContent = hours +":" + minutes + ":" + seconds + " " + day_night;
    })