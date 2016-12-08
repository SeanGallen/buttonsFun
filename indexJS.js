var counter = 0;
var foodCounter = 0;
var shapeCounter = 0;

var randomColor = function () {
  var x = Math.round(0xffffff * Math.random()).toString(16);
  var y = (6-x.length);
  var z = "000000";
  var z1 = z.substring(0,y);
  var color = "#" + z1 + x;
  return color;
}
// The ranomize color was found at https://css-tricks.com/snippets/javascript/random-hex-color

$(document).ready(function(){

  $(".invisibleButton").click(function(){
    $(".disappearingButtons").toggle('swing');
  });

  $(".coloredButton").click(function(){
    if (counter % 2 === 0){
      $("html, body").css({ background: "linear-gradient("+ randomColor() + "," + randomColor()+")" });
    }
    else {
      $("html, body").css({ background: "linear-gradient(#B24592, #F15F79)" });
    }
    counter++;
  });

  $(".thanksgivingButton").click(function(){
    if (foodCounter % 2 === 0 )
    {
      $("button").width(100).height(100);
    }
    else
    {
      $("button").width(84).height(91);
    }
    foodCounter++;
  });

  $(".squareItButton").click(function(){
    if (shapeCounter % 2 === 0 )
    {
      $("button").css("border-radius", 0);
    }
    else
    {
      $("button").css("border-radius", 50);
    }
    shapeCounter++;
  });

  $(".moveItButton").click(function(){
      anime({
        targets: '#button',
        rotate: {
          value: 480,
          duration: 3000,
          easing: 'easeInOutQuad'
        },
        translateX: [50, 250],
        direction: 'alternate',
      });
  });

});
