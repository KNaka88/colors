$(function(){
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");

  });

  $("button#yellow").click(function(){
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function(){
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("h1").click(function(){
    $("h1.font1").removeClass();
  });

  $("h2").click(function(){
    $("p#thisP").toggleClass("paragraph-size");
  });
});
//   $("h2").click(function(){
//     $("p").toggle();
//   });
