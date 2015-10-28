var app, canvas, ctx, blockImg, bgImg, gameOverImg, currentPiece, gameState, imgLoader, previousTime, currentTime, gameOver, lineView, currentLines;

(function() {
  'use strict';
  if (typeof Tetris === "undefined") {
    window.Tetris = {};
  }

  var View = window.Tetris.View = function() {
  };

    View.prototype.onReady = function() {
      imgLoader = new BulkImageLoader();
      imgLoader.addImage("blocks.png");
      imgLoader.addImage("bg.png", "bg");
      imgLoader.addImage("over.png", "gameover");
      imgLoader.onReadyCallback = this.onImagesLoaded;
      imgLoader.loadImages();
      canvas = document.getElementById("gameCanvas");
      ctx = canvas.getContext("2d");
      lineView = document.getElementById("lines");

      previousTime = currentTime = 0;

      // document.onkeydown = getInput;
    };

    View.prototype.onImagesLoaded = function(e) {
      blockImg = imgLoader.getImageAtIndex(0);
      bgImg = imgLoader.getImageAtIndex(1);
      gameOverImg = imgLoader.getImageAtIndex(2);
      var app = new Tetris.App();
      app.setup(canvas);
    };

})();
