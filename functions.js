function dateAndTime() {
  //Declare the variables used in this function
  var date = new Date; // Gets new var of Date
  var year = date.getFullYear(); //Gets the current year
  // Creates an array to store the Month by String version and not number version
  var month = ["Janurary","February","March","April","May","June","July","August","September","October","November","December"];
  var d = date.getDate(); // Gets the current day (including daylight saving on a 1-31)
  //var day = date.getDay(); // Gets the current day on a 1-31 scheme
  var hours = date.getHours(); // Gets the current hour on 0-24 hour basis
  var minutes = date.getMinutes(); // Gets the minutes on a 1-60
  var seconds = date.getSeconds(); // Gets the seconds on a 1-60
  hours = hours % 12; // Converts the Hours into 2 blocks of 12 hours
  hours = hours ? hours : 12; // If statement that says if hours is less than 12, do the normal 1-12, if greater than 12, than it converts it back (13 to 1, 14 to 2, etc..)
  var ampm = hours >= 12 ? 'pm' : 'am'; // If hours is greater than or equal to 12, its pm otherwise is the am.
  minutes = minutes < 10 ? '0' + minutes : minutes; // If minutes is less than 10 minutes, put a '0' if front (01,02,03, etc..) otherwise keep the normal minutes going
  seconds = seconds < 10 ? '0' + seconds : seconds; // If seconds is less than 10 seconds, put a '0' if front (01,02,03, etc..) otherwise keep the normal seconds going
  var days = ["Sunday", "Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday"]; // Creates a array to store the current Day of the week in String form, rather than 1-7
  // Adds all of the above together to create a Time and Date String to be display on the website
  document.getElementById('displayDate').innerHTML = days[date.getDay()] + ", " + month[date.getMonth()] + " " + d + " " + year + " " + hours + ":" + minutes + ":" + seconds + " " + ampm;
}

function modalCall() {
  var modal = document.getElementById('myModal');

  var gameImg1 = document.getElementById("gameImages1");

  gameImg1.addEventListener('click', function() {
    var gameImages = document.getElementById('gameImages1');

    var modalGameImage = document.getElementById("gameImage");
    var captionText = document.getElementById("caption");
    gameImages.onclick = function() {
      modal.style.display = "block";
      modalGameImage.src = this.src;
      captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

  });

  var gameImg2 = document.getElementById("gameImages2");

  gameImg2.addEventListener('click', function() {
    var gameImages = document.getElementById('gameImages2');

    var modalGameImage = document.getElementById("gameImage");
    var captionText = document.getElementById("caption");
    gameImages.onclick = function() {
      modal.style.display = "block";
      modalGameImage.src = this.src;
      captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

  });

  var golfImg1 = document.getElementById("golfImg1");

  //adds an event listener to the image to see which image was clicked
  //and then runs
  golfImg1.addEventListener('click', function() {
    var gameImages = document.getElementById('golfImg1');

    var modalGameImage = document.getElementById("gameImage");
    var captionText = document.getElementById("caption");
    gameImages.onclick = function() {
      modal.style.display = "block";
      modalGameImage.src = this.src;
      captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

  });
}

function start() {
  dateAndTime();
  modalCall();
}

window.document.onload = start();
