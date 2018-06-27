
function makeStars(numStars) {
  var starfield = document.getElementById("starfield");
  for (i = 0; i < numStars; i++) {
    var starLeft = Math.random() * 90 + 5;
    var starTop = Math.random() * starfield.offsetHeight * .8 + 100;
    // var starTop = Math.random() * 3000 * .5;

    // console.log("bbb" + String(starfield.offsetHeight)+"asdfasdfa");
    starfield.innerHTML += makeStarDiv(starLeft, starTop);
  }
}

function makeStarDiv(horizInPercent, vertInPixels) {
  return "<div class='stars' style='width:10px;height:10px; left: "+ horizInPercent + "%; top: " + vertInPixels + "px;'></div>";
}






$(document).ready(function() {
  // window.onscroll=whenScrolledToExplanation();
  var numStars = parseInt(.04 * window.innerWidth);
  // numStars = 10000;
  makeStars(numStars);
  var stars = document.getElementsByClassName("stars");
  var starLocs = [];
  getOrigLocs();
  var speedsList = [];
  getSpeeds();

  function setThings() {
    for (i = 0; i < stars.length; i++) { 
      var size = Math.random() * 5 + 1;
      stars[i].style.zIndex = "-1";
      stars[i].style.borderRadius = "50%";
      stars[i].style.width = size + "px";
      stars[i].style.height = size + "px";
      var starLeft = Math.random() * 90 + 5;
      stars[i].style.left = starLeft + "%";
      // stars[i].style.background = "radial-gradient(white 1%, black 50%)";

    }
  }
  
  setThings();
  // makeStars(100);
  function getSpeeds() {
    // var stars = document.getElementsByClassName("stars");
    // var speedsList = [];
    for (i = 0; i < stars.length; i++) { 
      speedsList.push((Math.random() * 1) + 2);

    }
  }
  
  function getOrigLocs() {
    for (i = 0; i < stars.length; i++) { 
      starLocs.push(stars[i].style.top);
    }
  }

  $(window).scroll(function(){
    for (i = 0; i < stars.length; i++) { 
      stars[i].style.top = parseInt(starLocs[i], 10) + window.scrollY/speedsList[i] + "px";
    }
  }); 

});