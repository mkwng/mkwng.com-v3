$(document).ready(function() {
  $("#studies-profilepic").click(function(e) {
    e.preventDefault();
    $("#studies-expanded, #studies-expanded-profilepic").removeClass("dn");
    $("body").addClass("overflow-hidden");
    window.history.pushState('','','studies/profilepic');
  });
  $("#studies-teleport").click(function(e) {
    e.preventDefault();
    $("#studies-expanded, #studies-expanded-teleport").removeClass("dn");
    $("body").addClass("overflow-hidden");
    window.history.pushState('','','studies/teleport');
  });
  $(".back").click(function(e) {
    e.preventDefault();
    $("#studies-expanded, #studies-expanded .study").addClass("dn");
    $("body").removeClass("overflow-hidden");
    window.history.pushState('','','/portfolio/');
  });

  window.onpopstate = function(event) {
    switch(location.pathname) {
      case "/portfolio/":
        $("#studies-expanded, #studies-expanded .study").addClass("dn");
        $("body").removeClass("overflow-hidden");
        break;
      case "/portfolio/studies/profilepic":
        $("#studies-expanded, #studies-expanded-profilepic").removeClass("dn");
        $("body").addClass("overflow-hidden");
        break;
      case "/portfolio/studies/teleport":
        $("#studies-expanded, #studies-expanded-teleport").removeClass("dn");
        $("body").addClass("overflow-hidden");
        break;
    }
  };
});