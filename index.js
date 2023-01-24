// Set the date we're counting down to
var countDownDate = new Date("Jan 29, 2023 12:48:00").getTime();
var firstproducts = 0;
var secondproducts = 0;
// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the element with id="Countdown-time"
  document.getElementById("Countdown-time").innerHTML = hours + ": "
    + minutes + ": " + seconds + " Left";
  // If the count down is finished, write some text EXPIRED
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Countdown-time").innerHTML = "EXPIRED";
  }
}, 1000);

function firstMoveRight(right) {
  var productswidth = document.getElementById('first-all-products').scrollWidth;
  var displaywidth = productswidth - document.getElementsByClassName('products-block')[0].clientWidth + firstproducts;
  if (displaywidth > 0) {
    firstproducts = firstproducts - right;
    document.getElementById("first-all-products").style.transform = `translateX(${firstproducts}px)`;
  }
}
function firstMoveLeft(left) {
  if (firstproducts < 0) {
    firstproducts = firstproducts + left;
    document.getElementById("first-all-products").style.transform = `translateX(${firstproducts}px)`;
  }
}

function secondMoveRight(right) {
  var productswidth = document.getElementById('second-all-products').scrollWidth;
  var displaywidth = productswidth - document.getElementsByClassName('products-block')[1].clientWidth + secondproducts;
  if (displaywidth > 0) {
    secondproducts = secondproducts - right;
    document.getElementById("second-all-products").style.transform = `translateX(${secondproducts}px)`;
  }
}
function secondMoveLeft(left) {
  if (secondproducts < 0) {
    secondproducts = secondproducts + left;
    document.getElementById("second-all-products").style.transform = `translateX(${secondproducts}px)`;
  }
}