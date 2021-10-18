function timeConversion(timeString){
    let lastIndex = timeString.lastIndexOf(":");
    let format = timeString.substring(lastIndex + 3);
    let timeComponent = timeString.substring(0, 8);
    let hour = timeString.substring(0,2);
    let mins = timeString.substring(3,5);
    let secs = timeString.substring(6,8)
    if (parseInt(hour) == 12 && format == "AM"){
        return `00:${mins}:${secs}`
    }

    else if (parseInt(hour) == 12 && format == "PM"){
        return timeComponent;
    }
    else if (format == "PM"){
        return `${12 + parseInt(hour)}:${mins}:${secs}`
    }

    else{
        return timeComponent;
    }


}



const result = timeConversion("06:40:03AM");
console.log(result);