// 'use strict';
// Enemies our player must avoid
const Enemy = function(x, y, speed) {
    // The image for the enemies, x and y (for the axis)
    // sets the enemies initial location
    // speed sets the enemies speed
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // Multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    // if the enemies position exceeds the play area, this logic
    // resets their position at the starting of the
    // screen with a random speed.
    if(this.x > 510) {
      this.x = -50;
      this.speed = 100 + Math.floor(Math.random() * 220);
    }

    // if there is a collision between the player and the
    // enemies the players position is reset to the starting
    // position.

    if(player.x < this.x + 80 &&
        player.x + 80 > this.x &&
        player.y < this.y + 60 &&
        player.y + 60 > this.y) {
      player.reset();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Player class
// This class has an update(), render() and
// a handleInput() method.

// Player class function
const Player = function (x, y) {
  // The image for the player,
  // x and y sets the player's initial location
  this.x = x;
  this.y = y;
  this.player = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {
};

Player.prototype.reset = function() {
  this.x = 202;
  this.y = 405;
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};

Player.prototype.handleInput = function(keyPress) {
  if(keyPress == 'left' && this.x > 0) {
    this.x -= 102;
  }
  if(keyPress == 'right' && this.x < 405) {
    this.x += 102;
  }
  if(keyPress == 'up' && this.y > 0) {
    this.y -= 83;
  }
  if(keyPress == 'down' && this.y < 405) {
    this.y += 83;
  }
  if(this.y < 0) {
    setTimeout(() => {
      this.reset();
    }, 500);
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
var enemyLoc = [230, 147, 63];

enemyLoc.forEach(function(locY) {
  enemy = new Enemy(0,locY, 200);
  allEnemies.push(enemy);
})

var player = new Player(202, 405);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  console.log(e);
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});