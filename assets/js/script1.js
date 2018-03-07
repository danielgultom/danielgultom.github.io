var tCount = 0;
var j = 0;
var txt = "Welcome to my personal website! It's currently under heavy construction, but I hope you'll understand :) I have plans to make it look really nice soon!";
var name = "Daniel Gultom"
var tempName = "";
var tempTxt = "";
var speed = 10;
var speedName = 100;
var speedDone = 10;
var finished = false;
var thereOrNot = false;
// var origStar = document.getElementById("star1").style.top;
// var starLoc = document.getElementById("star1").style;

function nameTyper() {
  if (j < name.length) {
    tempName += name.charAt(j);
    document.getElementById("daniel").innerHTML = tempName + '<span class="noblink-cursor"></span>';
    j++;
    setTimeout(nameTyper, speedName);
  } else {
    document.getElementById("daniel").innerHTML = tempName + '<span class="blinking-cursor"></span>';
    setTimeout(typeWriter, speed);
    // console.log("banana");
  }
}
function typeWriter() {
  if (tCount < txt.length) {
    tempTxt += txt.charAt(tCount);
    document.getElementById("greeting").innerHTML = tempTxt + '<span class="noblink-cursor"></span>';

    tCount++;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("greeting").innerHTML = tempTxt + '<span class="blinking-cursor"></span>';
  }
}

function blinkCursor() {
  if (thereOrNot) {
    document.getElementById("greeting").style.borderRight = "solid red";
    console.log("hello here");
    // thereOrNot = false;
    // setTimeout(blinkCursor, speedDone);
  } else {
    document.getElementById("greeting").style.borderRight = "";
    console.log("hello there");
    // thereOrNot = true;
    // setTimeout(blinkCursor, speedDone);
  }
  thereOrNot = !thereOrNot;
  setTimeout(blinkCursor, speedDone);

}


// function moveStars() {
//   if (true) {
//     document.getElementById("star1").style.top = parseInt(starLoc, 10) + window.scrollY+ "px";
//     // console.log(document.getElementById("star1").style.top + window.scrollY);
//     // console.log(window.scrollY);
//     setTimeout(moveStars, 100);
//   }
  
// }


$(document).ready(function() {

  var stars = document.getElementsByClassName("stars");
  var starLocs = [];
  getOrigLocs();
  var speedsList = [];
  getSpeeds();

  function setThings() {
    for (i = 0; i < stars.length; i++) { 
      stars[i].style.zIndex = "-1";
      stars[i].style.borderRadius = "50%";
    }
  } setThings();
  function getSpeeds() {
    // var stars = document.getElementsByClassName("stars");
    // var speedsList = [];
    for (i = 0; i < stars.length; i++) { 
      speedsList.push(Math.floor((Math.random() * 10) + 2));

    }
    console.log(speedsList);
  }

  function getOrigLocs() {
    for (i = 0; i < stars.length; i++) { 
      starLocs.push(stars[i].style.top);
    }
    console.log(starLocs);
  }

  $(window).scroll(function(){
    // window.scrollBy(0,1);
    // scrolldelay = setTimeout(pageScroll,10);
    // document.getElementById("star1").style.top = parseInt(starLoc, 10) + window.scrollY/15+ "px";
    // console.log(parseInt(starLoc, 10) + window.scrollY/10);
    // console.log(window.scrollY);
    for (i = 0; i < stars.length; i++) { 
      stars[i].style.top = parseInt(starLocs[i], 10) + window.scrollY/speedsList[i] + "px";
    }
  }); 

// jQuery Function Number 1 (click)
  $("#sidebar-button").click(function() {
    // jQuery Function Number 2 (hasClass)
    if ($('.sidebar-container').hasClass("sidebar-active")) {
      // jQuery Function Number 3 (removeClass)
      $('body').removeClass('no-scroll');
      $('#sidebar-button').removeClass('button-active');
      $('.sidebar-container').removeClass('sidebar-active');
      $('.page-wrapper').removeClass('wrapper-active');
    } else {
      // jQuery Function Number 4 (addClass)
      $('#sidebar-button').addClass('button-active');
      $('.sidebar-container').addClass('sidebar-active');
      $('.page-wrapper').addClass('wrapper-active');
      setTimeout(function() {
        $('body').addClass('no-scroll');
      }, 300);

    }

  })



  $(".page-wrapper").click(function() {
    if ($('.sidebar-container').hasClass("sidebar-active")) {
      $('body').removeClass('no-scroll');
      $('#sidebar-button').removeClass('button-active');
      $('.sidebar-container').removeClass('sidebar-active');
      $('.page-wrapper').removeClass('wrapper-active');
    } else {}
  })
  

  $("#carousel-next").click(function() {
    // jQuery Function Number 5 (css)
    marleft = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (marleft <= -960) {
      return false
    } else {
      $('#carousel').css('margin-left', marleft - 960)
    }
  })

  $("#carousel-prev").click(function() {
      marleft = parseInt($('#carousel').css('margin-left').replace("px", ""));
      if (marleft >= 0) {
        return false
      } else {
        $('#carousel').css('margin-left', marleft + 960)
      }

  })

// jQuery Function Number 6 (hover)
  $("h2").hover(function () {
    if ($(this).hasClass('active') != true) {
      $(this).css("font-size", "28px")
      $(this).addClass('active')

    } else {
      $(this).css("font-size", "24px")
      $(this).removeClass('active')

    }
  })

  $(".work").hover(function () {
    console.log($(this).css("font-size"))
    if ($(this).hasClass('active') != true) {
      $(this).css("font-size", "28px")
      $(this).addClass('active')
      $("#workContent").css("display", "inline")
    } else {
      $(this).css("font-size", "24px")
      $(this).removeClass('active')
      $("#workContent").css("display", "none")
    }

    })

  $(".edu").hover(function () {
    console.log($(this).css("font-size"))
    if ($(this).hasClass('active') != true) {
      $(this).css("font-size", "28px")
      $(this).addClass('active')
      $("#eduContent").css("display", "inline")
    } else {
      $(this).css("font-size", "24px")
      $(this).removeClass('active')
      $("#eduContent").css("display", "none")
    }
  })

  $(".projects").hover(function () {
    console.log($(this).css("font-size"))
    if ($(this).hasClass('active') != true) {
      $(this).css("font-size", "28px")
      $(this).addClass('active')
      $("#projContent").css("display", "inline")
    } else {
      $(this).css("font-size", "24px")
      $(this).removeClass('active')
      $("#projContent").css("display", "none")

    }
  })







  // for the resume



  

});




