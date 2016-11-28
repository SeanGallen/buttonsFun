var counter = 0;
var fatCounter = 0;
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
      $("html, body").css("background-color", randomColor());
    }
    else {
      $("html, body").css("background-color", "red")
    }
    counter++;
  });

  $(".thanksgivingButton").click(function(){
    if (fatCounter % 2 === 0 )
    {
      $("button").width(100).height(100);
    }
    else
    {
      $("button").width(84).height(91);
    }
    fatCounter++;
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
          value: 300,
          duration: 1500,
          easing: 'easeInOutQuad'
        },
        translateX: [50, 250],
        direction: 'alternate',
      });
  });

});
