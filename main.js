/**
 * Work with strings.
 */
window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  let rockford = document.getElementById("baddie1"),
    area = document.getElementById("flash"),
    left = area.offsetLeft,
    top = area.offsetTop,
    posLeft = 0,
    posTop = 0,
    tileSize = 32,
    gridSize = 24,
    /**
     * This is the background for the game area.
     */
    gameArea = [
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 14, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 14, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 14, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 12, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 14, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 10, 13, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 13, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
      13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12, 13, 14, 12,
    ],
    /**
     * These are blocks that cant be moved to, or something happens when you try to move on them.
     * The blocks are drawn "on top" of the gamearea. Block 10 is empty, should be 0 but looks nicer with two figures.
     */
    gameBlocks = [
      11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
      12, 12, 12, 12, 12, 11, 12, 10, 10, 10, 10, 10, 17, 28, 28, 28, 28, 17,
      17, 17, 17, 17, 17, 17, 17, 17, 17, 10, 10, 12, 12, 17, 17, 17, 17, 10,
      17, 10, 10, 10, 10, 17, 10, 10, 10, 10, 10, 10, 17, 17, 17, 17, 10, 12,
      12, 30, 10, 10, 17, 10, 17, 10, 10, 10, 10, 10, 10, 17, 10, 10, 10, 10,
      10, 10, 17, 10, 10, 12, 12, 10, 10, 10, 17, 10, 17, 24, 10, 28, 28, 28,
      28, 17, 10, 10, 28, 28, 10, 10, 17, 17, 10, 12, 12, 10, 17, 10, 17, 10,
      17, 17, 17, 17, 17, 17, 17, 17, 10, 10, 28, 28, 28, 10, 10, 10, 10, 12,
      12, 10, 17, 10, 17, 10, 17, 36, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 12, 12, 10, 17, 10, 17, 10, 17, 37, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 17, 17, 10, 10, 12, 12, 10, 17, 10, 10, 10,
      17, 10, 10, 17, 17, 17, 17, 17, 17, 17, 10, 10, 10, 17, 10, 10, 10, 12,
      12, 10, 17, 17, 17, 17, 17, 10, 10, 17, 10, 10, 10, 10, 10, 17, 10, 10,
      10, 17, 10, 10, 10, 12, 12, 10, 10, 10, 10, 10, 10, 10, 10, 17, 10, 15,
      16, 16, 10, 17, 10, 25, 10, 17, 10, 17, 17, 12, 12, 17, 17, 17, 17, 17,
      17, 17, 17, 17, 10, 15, 13, 15, 10, 17, 17, 17, 17, 17, 10, 17, 10, 12,
      12, 10, 10, 10, 10, 10, 10, 10, 10, 27, 10, 16, 10, 16, 10, 18, 10, 10,
      10, 10, 10, 17, 10, 12, 12, 31, 10, 10, 17, 10, 10, 10, 10, 17, 10, 10,
      10, 10, 10, 17, 17, 10, 10, 10, 10, 17, 10, 12, 12, 17, 17, 17, 17, 28,
      10, 10, 17, 17, 17, 17, 17, 17, 17, 17, 10, 10, 10, 10, 10, 10, 10, 12,
      12, 10, 10, 10, 10, 10, 10, 10, 17, 10, 10, 10, 10, 17, 10, 28, 10, 10,
      10, 10, 17, 17, 10, 12, 12, 10, 17, 10, 17, 10, 10, 10, 17, 17, 10, 10,
      10, 17, 10, 10, 10, 10, 28, 28, 17, 10, 10, 12, 12, 10, 10, 17, 10, 10,
      10, 10, 10, 10, 10, 28, 28, 17, 17, 10, 10, 17, 17, 17, 17, 17, 10, 12,
      12, 10, 17, 17, 10, 10, 10, 28, 28, 17, 10, 10, 10, 17, 10, 10, 10, 10,
      17, 10, 10, 17, 17, 12, 12, 10, 17, 10, 10, 10, 10, 10, 10, 17, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 10, 10, 17, 10, 12, 12, 10, 17, 10, 10, 17,
      17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 10, 17, 10, 12,
      12, 10, 17, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 28, 28, 28, 28,
      10, 10, 10, 17, 10, 12, 12, 26, 17, 10, 10, 10, 28, 28, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 10, 10, 28, 28, 12, 11, 12, 12, 12, 12, 12,
      12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 11,
    ];

  /**
   * Draw the initial gameplan
   */
  function drawGamePlan(gameArea, gameBlocks) {
    var i, e, b;
    for (i = 0; i < gameArea.length; i++) {
      e = document.createElement("div");
      e.innerHTML = "";
      e.className =
        "tile t" + gameArea[i] + (gameBlocks[i] ? " b" + gameBlocks[i] : "");
      e.id = "n" + i;
      area.appendChild(e);
    }
  }
  console.log("Drawing gameplan.");
  drawGamePlan(gameArea, gameBlocks);

  /**
   * Move Rockford
   */
  var move = function (moveLeft, moveTop, which) {
    function moveIt() {
      rockford.style.left =
        area.offsetLeft + posLeft * tileSize + tileSize / 2 + "px";
      rockford.style.top =
        area.offsetTop + posTop * tileSize + tileSize / 2 + "px";
      //  console.log("
      // Moved to: " + rockford.style.left + "x" + rockford.style.top);
    }
    if (which) {
      rockford.className = "baddie " + which;
    }

    // First if means the baddie can move
    if (
      !(gameBlocks[posLeft + moveLeft + (posTop + moveTop) * gridSize] - 10)
    ) {
      posLeft += moveLeft;
      posTop += moveTop;
      moveIt();
    } else if (
      gameBlocks[posLeft + moveLeft + (posTop + moveTop) * gridSize] === 13
    ) {
      let audio = new Audio("sounds/sound1.mp3");
      audio.play();
      setTimeout(function () {
        alert("Grattis, du vann över inflationen!! Bra jobbat!!");
      }, 0);
    } else if (
      gameBlocks[posLeft + moveLeft + (posTop + moveTop) * gridSize] === 24
    ) {
      let audio = new Audio("sounds/drinking-amp-slurping-135545.mp3");
        audio.play();
        setTimeout(function () {
          alert("Åh nej! Jag drack allt och nu är jag full :(");
        }, 0);
      } else if (
        gameBlocks[posLeft + moveLeft + (posTop + moveTop) * gridSize] === 36
      ) {
        alert("Hämta nyckeln eller övervinn monstret för att nå skatten!");
      } else if (
        gameBlocks[posLeft + moveLeft + (posTop + moveTop) * gridSize] === 37
      ) {
        alert("Hämta nyckeln eller övervinn monstret för att nå skatten!");
    } else if (
      gameBlocks[posLeft + moveLeft + (posTop + moveTop) * gridSize] === 25) {
        let audio = new Audio("sounds/eating-chips-81092.mp3");
        audio.play();
        setTimeout(function () {
          alert("Mmmm gott med pizza");
        }, 0);
    } else if ( gameBlocks[posLeft + moveLeft + (posTop + moveTop) * gridSize] === 26)
     { document.getElementById('n303').classList.replace('b18', 'b19');
      gameBlocks[303] = 10;
    /* 
      area.innerHTML = "<div id='baddie1' class='baddie down'></div>";
      gameBlocks[303] = 10;
      drawGamePlan(gameArea, gameBlocks);
      rockford = document.getElementById("baddie1");
      moveIt(); */
      
    } else if (
      gameBlocks[posLeft + moveLeft + (posTop + moveTop) * gridSize] === 27
    ) {
    } else if (
      gameBlocks[posLeft + moveLeft + (posTop + moveTop) * gridSize] === 30
    ) {
      let audio = new Audio("sounds/disco.mp3");
      audio.play();
      setTimeout(function () {
        alert("DISCORUMMET!!!");
      }, 0);
    } else if (
      gameBlocks[posLeft + moveLeft + (posTop + moveTop) * gridSize] === 31
    ) {
      let audio = new Audio("sounds/explosion-91872.mp3");
        audio.play();
      function tileChange () {
        setTimeout(() => {document.getElementById('n297').classList.replace ('b27', 'b32',)}, 0)
        setTimeout(() => {document.getElementById('n297').classList.replace ('b32', 'b33',)}, 400)
        setTimeout(() => {document.getElementById('n297').classList.replace ('b33', 'b34',)}, 800)
        setTimeout(() => {document.getElementById('n297').classList.replace ('b34', 'b35',)}, 1200)
        setTimeout(() => {document.getElementById('n297').classList.remove ( 'b35')}, 1600) 
        gameBlocks[297] = 10;
      }
      tileChange()
    
    } else {
      // Else means the baddie cannot move because of a wall
      console.log("Block detected, cant move.");
    }
    // console.log("area.offsetLeft", area.offsetLeft);
    // console.log("area.offsetTop", area.offsetTop);
    // console.log("posLeft", posLeft)
    // console.log("posTop", posTop)
  };
  console.log("Moving Mickey Mos (Rockford) to initial spot.");
  move(1, 1, "down");

  /* if((!gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] === 27)){

    } */

  /**
   * Keep track on keys pressed and move Rockford accordingly.
   */
  document.onkeydown = function (event) {
    var key;
    key = event.keyCode || event.which;
    switch (key) {
      case 37:
        move(-1, 0, "left");
        break;
      case 39:
        move(1, 0, "right");
        break;
      case 38:
        move(0, -1, "up");
        break;
      case 40:
        move(0, 1, "down");
        break;
      default:
        move(0, 0, "down");
        break;
    }
    console.log(
      "Keypress: " +
        event +
        " key: " +
        key +
        " new pos: " +
        rockford.offsetLeft +
        ", " +
        rockford.offsetTop
    );
  };

  console.log("Everything is ready.");
});
