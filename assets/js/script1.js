$(document).ready(function() {

 
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




