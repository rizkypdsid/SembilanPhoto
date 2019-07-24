// javascript Reset By Rizkypds
    // HeaderActive

  var header = document.getElementById("link-1");
  var btns = header.getElementsByClassName("LinkHeader");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("HeaderActive");
      current[0].className = current[0].className.replace(" HeaderActive", "");
      this.className += " HeaderActive";
    });
  }


// Start SidebarPds
  function BukaMenuPds() {
    var x = document.getElementById("OpenPds");
    if (x.className === "SidebarPds") {
      document.getElementById("OpenPds").style.width = "250px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
  }
  function TutupMenuPds() {
    document.getElementById("OpenPds").style.width = "0";
    document.body.style.backgroundColor = "white";
  }

// Start DropDown
  var dropdown = document.getElementsByClassName("SidebarDropDown");
  var i;
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("DropDownActive");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      }
      else {
        dropdownContent.style.display = "block";
      }
    });
  }

// Start DialogBox
  $(document).ready(function(){$(".CloseNotif").click(function(){$(".SidebarNotif").removeClass("up")})}),
  $(document).ready(function(){$(".shownotif").click(function(){$(".SidebarNotif").toggleClass("up")})});

//BackToTop
  jQuery(document).ready(function() {
    var offset = 200;
    var duration = 1500;
    jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.BackToTop').fadeIn(duration);
      } else {
        jQuery('.BackToTop').fadeOut(duration);
      }
    });
 
    jQuery('.BackToTop').click(function(event) {
      event.preventDefault();
      jQuery('html, body').animate({scrollTop: 0}, duration);
      return false;
    })
  });
