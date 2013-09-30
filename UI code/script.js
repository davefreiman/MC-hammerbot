$(function() {

 // var ipAddress = "10.0.0.74";

 var ipAddress = "localhost";

  var closeNotification = function(e) {
    $(".notifications").html("")
  }

  var displayNotification = function(text) {
    $(".notifications").text(text);
    $(".notifications").one("click", closeNotification);
  }

  var bindMovement = function(selector, data, successText, errorText) {
    $(selector).on("click", function() {
      $.ajax("http://" + ipAddress + ":8071/motion-control/update", {
        data: data,
        dataType: "jsonp",
        success: function() { displayNotification(successText) },
        error:   function() { displayNotification(errorText) }
      });
    });
  }
  
  var rotation = function (){
   $("#img").rotate({
      angle:0, 
      animateTo:360, 
      callback: rotation
   });
}

  bindMovement(
    ".forward",
    {forward: 1},
    "Your MC Hammer Bot is now moving forward.",
    "Your MC Hammer Bot is probably on fire."
  )
  
  bindMovement(
    ".backward",
    {forward: -1},
    "Your MC Hammer Bot is now moving backward.",
    "Your MC Hammer Bot is probably on fire."
  )
  
  bindMovement(
    ".left",
    {turn: -1},
    "Your MC HammerBot is now spinning left",
    "Your MC Hammer Bot is probably spinning on fire."
  )
  
  bindMovement(
    ".right",
    {turn: 1},
    "Your MC HammerBot is now spinning right",
    "Your MC Hammer Bot is probably spinning on fire."
  )
  
  bindMovement(
    ".strafe-left",
    {strafe: 1},
    "Your MC HammerBot is now hammering left",
    "Your MC Hammer Bot is probably spinning on fire."
  )
  
  bindMovement(
    ".strafe-right",
    {strafe: -1},
    "Your MC HammerBot is now hammering right",
    "Your MC Hammer Bot is probably spinning on fire."
  )  

  bindMovement(
    ".stop",
    {forward: 0},
    "Your MC Hammer Bot is now stopped.",
    "Your MC Hammer Bot is probably on fire and still moving."
  )

  $("div div").html("");
  
  $(".strafe-left, .strafe-right").on("click", function(){
    $("#img").attr("src", "http://img.pandawhale.com/56642-mc-hammer-u-cant-touch-this-gi-xF8S.gif")
  });
  
  $(".left, .right").on("click", function(){
    $("#img").attr("src", "http://boards.cannabis.com/attachments/cannabis-com-lounge/17417d1118016427-chavs-cant-touch-.gif")
  });
  
 $(".stop").on("click", function(){
    $("#img").attr("src", "http://hugelolcdn.com/i/144893.gif");
    $("#img").fadeIn(200).fadeOut(200).fadeIn(100).fadeOut(200).fadeIn(200);
  });
    
  $(".forward, .backward").on("click", function(){
    $("#img").attr("src", "http://31.media.tumblr.com/9bbfd5ea7b2acf5cb70c6776f844c654/tumblr_mny12fAZiF1rmlbczo1_500.gif");
  })    

})