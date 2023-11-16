//your JS code here. If required.
function daysInYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        // Leap year has 366 days
        return 366;
    } else {
        // Non-leap year has 365 days
        return 365;
    }
       
}

let input= parseInt(prompt("type year"));
alert(daysInYear(input)) ;