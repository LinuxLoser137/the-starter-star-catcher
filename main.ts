/**
 * To Do List
 * 
 * 1) Create Player – Make a player sprite and place it at the bottom.
 * 
 * 2) Enable Movement – Let the player move left/right and stay on screen.
 * 
 * 3) Create Star Sprite – Design how a star looks.
 * 
 * 4) Spawn Stars – Make new stars appear on a timer.
 * 
 * 5) Make Stars Fall – Give stars downward speed.
 * 
 * 6) Randomize Position – Spawn stars at random x-locations at the top.
 * 
 * 7) Score Points – Increase score when the player catches a star.
 * 
 * 7) Game Over – End the game if a star hits the ground.
 */
/**
 * This is the box controls your sprite
 * 
 * *Creates sprite, creates sprite movement, and where the sprite can move).
 */
/**
 * This box controls your falling stars
 * 
 * *Creates stars, tells them when, where and how fast they can fall
 */
/**
 * This box controls what happens when the sprite and star interact
 * 
 * *score increase and star is destroyed/ caught
 */
// 6 & 7: When Player overlaps a Star → increase score & destroy Star
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    // destroy the star that was caught
    otherSprite.destroy()
})
let star: Sprite = null
// 1: Create Player sprite
let mySprite = sprites.create(assets.image`guy`, SpriteKind.Player)
// 2: Enable Player Movement (only left/right, so x=100, y=0)
controller.moveSprite(mySprite, 100, 0)
// keeps player on screen
mySprite.setStayInScreen(true)
// keeps player on screen
// 3, 4, 5: Create new Stars on a timer
game.onUpdateInterval(1000, function () {
    star = sprites.create(assets.image`star`, SpriteKind.Food)
    star.setPosition(randint(0, scene.screenWidth()), 0)
    // makes the star fall downward
    star.vy = 50
})
