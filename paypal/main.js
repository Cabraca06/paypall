$(".nav-link-header").click(function(e) {
    e.preventDefault();
    var target = e.target;
    var link = $(target).attr("href");
    var arrow = $(".arrow");
  
    //spins arrows
    if ($(target).find(arrow).hasClass("down-arrow") && ($(target).hasClass("slideDown") === false)) {
      //turns arrow back down when hitting a different nav button
      $(arrow).removeClass("up-arrow").addClass("down-arrow");
      //turns arrow up when hitting nav button next to arrow
      $(target).find(arrow).removeClass("down-arrow").addClass("up-arrow");
    } else {
      $(target).find(arrow).removeClass("up-arrow").addClass("down-arrow");
    }
  
    //removes underline when hitting a different menu item
    $(".nav-link-header").removeClass("underline");
    //keeps underline under focused link
    $(target).addClass("underline");
  
    //displays dropdowns  
    if ($(link).hasClass("slideDown") === false) {
  
      //makes all dropdowns disappear when another menu item is clicked  
      $(".hero").removeClass("hero-down");
      $(".nav-section-dropdown").addClass("remove").removeClass("slideDown");
      //displays menu item dropdown when menu item is clicked
      $(".hero").addClass("hero-down");
      $(link).removeClass("remove").addClass("slideDown");
      $(".nav").addClass("nav-background");
    } else {
      //toggles menu item dropdown
      $(".hero").removeClass("hero-down");
      $(link).removeClass("slideDown");
      setTimeout(function() {
        $(".nav").removeClass("nav-background");
      }, 225);
  
    }
  
    $("#hero-img").toggleClass(".hero-down");
  });
  
  //dropdown close button
  $(".escape").click(function(e) {
    e.preventDefault();
    var target = e.target;
    var link = $(target).parent().attr("href");
    $(".hero").removeClass("hero-down");
    $(".arrow").removeClass("up-arrow").addClass("down-arrow");
    $(link).removeClass("slideDown");
    setTimeout(function() {
      $(".nav").removeClass("nav-background");
    }, 225);
  
  });