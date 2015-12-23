function adjust() {
    var divgame = document.getElementById("phaser-example");
    divgame.style.width = window.innerWidth + "px";
    divgame.style.height = window.innerHeight + "px";
}

if (Meteor.isClient) {
  Template.game.helpers(
      // game is a global var from /client/games/breakout.js
  )

  Meteor.startup(function () {
    window.addEventListener('resize', function(){
      adjust();
    });
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  })
}
