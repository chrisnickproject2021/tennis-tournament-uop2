// Set the date we're counting down to
let countDownDate = new Date("Aug 8, 2021 15:37:25").getTime();

//possibly we can make this an html table instead
const emptySpaces = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector("#timer").innerHTML = days.toString() + emptySpaces + hours.toString() + emptySpaces + minutes.toString() + emptySpaces + seconds.toString() ;
    
  // When the countdown ends 
  if (distance < 0) {
    clearInterval(x);
    document.querySelector("#timer").innerHTML = "EXPIRED";
  }
}, 1000);