namespace SpriteKind {
    export const intro = SpriteKind.create()
    export const coneheads = SpriteKind.create()
    export const rockheads = SpriteKind.create()
    export const fireworms = SpriteKind.create()
    export const entrance = SpriteKind.create()
}
namespace StatusBarKind {
    export const stamina = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    tiles.loadMap(space)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.entrance, function (sprite, otherSprite) {
    if (otherSprite == forest_temple_entrance) {
        tiles.loadMap(forest_temple)
    }
})
function attack_power () {
    attack_power2 = -1 - 0
}
function animation2 () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 7 f . . . 
        . . . f f e e e e f 7 7 7 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 7 7 7 7 e f . 
        . . . f e 7 7 7 f f f f e 7 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 7 7 7 f . . . 
        . . . . . e d d e 7 7 7 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 7 f . . . 
        . . . f f e e e e f 7 7 7 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 7 7 7 7 e f . 
        . . . f e 7 7 7 f f f f e 7 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 7 7 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 7 f . . . 
        . . . f f e e e e f 7 7 7 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 7 7 7 7 e f . 
        . . . f e 7 7 7 f f f f e 7 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 7 7 7 f . . . 
        . . . . . e d d e 7 7 7 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 7 f . . . 
        . . . f f e e e e f 7 7 7 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 7 7 7 7 e f . 
        . . . f e 7 7 7 f f f f e 7 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 7 7 7 7 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 7 f . . . 
        . . . f f e e e e f 7 7 7 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 7 7 7 7 e f . 
        . . . f e 7 7 7 f f f f e 7 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 7 7 7 f . . . 
        . . . . . e d d e 7 7 7 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 7 f e e e e f f . . . . 
        . . f 7 7 7 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 7 7 7 7 e e f f f f . . . 
        . f 7 e f f f f 7 7 7 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 7 7 7 e d d 4 . . . . . 
        . . . f 7 7 7 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 7 f e e e e f f . . . . 
        . . f 7 7 7 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 7 7 7 7 e e f f f f . . . 
        . f 7 e f f f f 7 7 7 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 7 7 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 7 f e e e e f f . . . . 
        . . f 7 7 7 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 7 7 7 7 e e f f f f . . . 
        . f 7 e f f f f 7 7 7 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 7 7 7 e d d 4 . . . . . 
        . . . f 7 7 7 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 7 f e e e e f f . . . . 
        . . f 7 7 7 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 7 7 7 7 e e f f f f . . . 
        . f 7 e f f f f 7 7 7 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 7 7 7 7 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 7 f e e e e f f . . . . 
        . . f 7 7 7 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 7 7 7 7 e e f f f f . . . 
        . f 7 e f f f f 7 7 7 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 7 7 7 e d d 4 . . . . . 
        . . . f 7 7 7 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 7 7 7 7 7 7 e e f . . 
        . . f e 7 f f f f f f 7 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 7 7 7 7 7 7 f 4 e . . 
        . . 4 d f 7 7 7 7 7 7 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 7 7 7 7 7 7 e e f . . 
        . f f e 7 f f f f f f 7 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 7 7 7 7 e d d 4 e . . 
        . . e 4 f 7 7 7 7 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 7 7 7 7 7 7 e e f . . 
        . . f e 7 f f f f f f 7 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 7 7 7 7 7 7 f 4 e . . 
        . . 4 d f 7 7 7 7 7 7 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 7 7 7 7 7 7 e f f . . 
        . f f e 7 f f f f f f 7 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 7 7 7 7 f e f . . 
        . . . e d d e 7 7 7 7 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 7 7 7 7 7 7 e e f . . 
        . . f e 7 f f f f f f 7 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 7 7 7 7 7 7 f 4 e . . 
        . . 4 d f 7 7 7 7 7 7 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.FacingDown, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 7 7 f f f f f . . 
        . . f f e 7 e 7 7 e 7 e f f . . 
        . . f e 7 f 7 f f 7 f 7 e f . . 
        . . f f f 7 7 e e 7 7 f f f . . 
        . f f e f 7 f e e f 7 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 7 7 7 7 7 7 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 7 7 f f f f . . . 
        . . f f e 7 e 7 7 e 7 e f f . . 
        . . f e 7 f 7 f f f 7 f e f . . 
        . . f f f 7 f e e 7 7 f f f . . 
        . . f e 7 f f e e 7 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 7 7 7 7 7 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 7 7 f f f f f . . 
        . . f f e 7 e 7 7 e 7 e f f . . 
        . . f e 7 f 7 f f 7 f 7 e f . . 
        . . f f f 7 7 e e 7 7 f f f . . 
        . f f e f 7 f e e f 7 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 7 7 7 7 7 7 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 7 7 f f f f . . . 
        . . f f e 7 e 7 7 e 7 e f f . . 
        . . f e f 7 f f f 7 f 7 e f . . 
        . . f f f 7 7 e e f 7 f f f . . 
        . . f e e f 7 e e f f 7 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 7 7 7 7 7 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 7 7 f f f f f . . 
        . . f f e 7 e 7 7 e 7 e f f . . 
        . . f e 7 f 7 f f 7 f 7 e f . . 
        . . f f f 7 7 e e 7 7 f f f . . 
        . f f e f 7 f e e f 7 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 7 7 7 7 7 7 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.FacingUp, Predicate.NotMoving)
    )
    blank = 0
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    tiles.loadMap(map)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sword = sprites.createProjectileFromSprite(img`
        ........................................1d......
        ........................................1d......
        ........................................1d......
        ........................................1d......
        ........................................1d......
        ........................................1d......
        ........................................1d......
        ........................................dd......
        ........................................dd......
        .....................................8..dd..8...
        .....................................88.dd.88...
        ......................................888888....
        ........................................66......
        ........................................dd......
        ........................................66......
        ........................................ff......
        `, mySprite, 0, 0)
    animation.runImageAnimation(
    sword,
    [img`
        ........................................1d......
        ........................................1d......
        ........................................1d......
        ........................................1d......
        ........................................1d......
        ........................................1d......
        ........................................1d......
        ........................................dd......
        ........................................dd......
        .....................................8..dd..8...
        .....................................88.dd.88...
        ......................................888888....
        ........................................66......
        ........................................dd......
        ........................................66......
        ........................................ff......
        ................................................
        ................................................
        ................................................
        ................................................
        `, img`
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        .....................................88.........
        ....................................88..........
        ....................................8...........
        ................................f6d68ddddddddddd
        ................................f6d68dddd1111111
        ....................................8...........
        ....................................88..........
        .....................................88.........
        ................................................
        `],
    100,
    false
    )
    controller.moveSprite(mySprite, 0, 0)
    pause(100)
    sword.destroy()
    controller.moveSprite(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coneheads, function (sprite, otherSprite) {
    knockback()
    info.changeLifeBy(-1)
    sprite.sayText("ow.")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.rockheads, function (sprite, otherSprite) {
    knockback()
    info.changeLifeBy(-1)
    sprite.sayText("ow.", 500, false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.coneheads, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.trail, 100)
})
function enemy_stats () {
    rockhead_hp = 2
    rockhead_dp = 1
}
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    controller.moveSprite(mySprite, 150, 150)
    statusbar.value += -1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.rockheads, function (sprite, otherSprite) {
    rockhead_hp += attack_power2
    if (rockhead_hp <= 0) {
    	
    } else {
    	
    }
})
function boss1 () {
    boss12 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.loadMap(shadow_temple)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile21`)
    }
})
function knockback () {
    mySprite.setVelocity(randint(-25, 25), randint(-25, 25))
    pause(100)
    mySprite.setVelocity(0, 0)
}
tiles.onMapLoaded(function (tilemap2) {
    if (tilemap2 == map) {
        for (let value of tiles.getTilesByType(assets.tile`myTile30`)) {
            mySprite2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . f f f f f f . f f f f f f . 
                . f f 2 2 2 2 f f f 2 2 2 2 f f 
                . f 2 5 2 2 2 2 5 2 2 2 2 5 2 f 
                . f 2 2 5 2 2 2 5 2 2 2 5 2 2 f 
                . f 2 2 2 5 2 2 5 2 2 5 2 2 2 f 
                . f 2 2 2 2 5 2 5 2 5 2 2 2 2 f 
                . f 2 5 5 5 5 5 5 5 5 5 5 5 2 f 
                . f f 2 2 2 2 2 5 2 2 2 2 2 f f 
                . . f f 2 2 2 5 5 5 2 2 2 f f . 
                . . . f f 2 5 2 5 2 5 2 f f . . 
                . . . . f f 2 2 5 2 2 f f . . . 
                . . . . . f f 2 5 2 f f . . . . 
                . . . . . . f f 5 f f . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
            tiles.placeOnRandomTile(mySprite2, assets.tile`myTile30`)
        }
        forest_temple_entrance = sprites.create(img`
            ................................
            .........7......................
            ........e77.....................
            ........e7........77............
            .........ee.......e77...........
            ee........e......ee77...........
            ..e.77...ee.....ee.........777..
            ..ee77.77e....77e..........7e7..
            ...ee..77e....77e..e.......77...
            ..777...e.....ee...e.77...ee....
            ..77e...e.....e.....e77...77....
            ..77e..ee.....eeeeeee77..e777...
            ....ee.eeeeeeeeeeeeeeeee.e......
            ...eeeeeeeeeeeeeeeeeeeeeee......
            ..eeeeeeeeeeeeeeeeeeeeeeeeee....
            .eeeeeeeeeeffeeeeeeeeeeeeeee...e
            .7eeeeeeeefffffeeeeeeeeeeeee777e
            .eeeeeeeeffffffffeeeeeeeeeee77..
            .eeeeeeeefffffffffeeeeeeeeee....
            ..eeeeeefffffffffffeeeeeeeee....
            ..eeeeeefffffffffffeeeeeeeee....
            ..eeeeeeffffffffffffeeeeeeee....
            .7eeeeeefffffffffffffeeeeeee....
            77eeeeeefffffffffffffeeeeeee....
            77eeeeefffffffffffffffeeeeee....
            .eeeeeefffffffffffffffeeeeee....
            eee7eeeffffffffffffffffeeeee77..
            .ee7eeeffffffffffffffffeeee.77..
            .eeeeefffffffffffffffffeeeee.e..
            .eeeeeffffffffffffffffffeeee7...
            .eeeeeffffffffffffffffffffeeeeee
            .eeeeffffffffffffffffffffffeeeee
            .eeeffffffffffffffffffffffffeeee
            .eeffffffffffffffffffffffffffeee
            eeefffffffffffffffffffffffffffee
            eefffffffffffffffffffffffffffffe
            eefffffffffffffffffffffffffffffe
            efffffffffffffffffffffffffffffff
            efffffffffffffffffffffffffffffff
            eeeefffffffffffffffffffffffffffe
            `, SpriteKind.entrance)
        tiles.placeOnRandomTile(forest_temple_entrance, assets.tile`transparency16`)
        Enemys()
    } else if (tilemap2 == forest_temple) {
        tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass1)
        tiles.setWallAt(tiles.getTileLocation(0, 0), true)
    } else if (tilemap2 == boss_cave) {
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile52`)
        boss1()
    } else {
    	
    }
})
function story_mode () {
    tiles.loadMap(map)
    tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass3)
}
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite, 100, 100)
})
function Enemys () {
    for (let index = 0; index < 50; index++) {
        cone_head = sprites.create(assets.image`cone head back`, SpriteKind.coneheads)
        tiles.placeOnRandomTile(cone_head, sprites.castle.tileGrass1)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile36`)) {
        cone_head = sprites.create(assets.image`cone head back`, SpriteKind.coneheads)
        tiles.placeOnRandomTile(cone_head, assets.tile`myTile36`)
    }
    for (let index = 0; index < 75; index++) {
        rock_heads = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . b b b b b b b . . . . . 
            . . . b c c c c c c c b . . . . 
            . . b b b b b c c c c c b . . . 
            . b b d d d b c c c c c c b . . 
            . b b d f d b c c c c c c b . . 
            . b b d d d b c c b b b b b . . 
            . b b b b b b c c b d d d b . . 
            . b c c c c c c c b d f d b . . 
            . b c c c c c c c b d d d b . . 
            . b c c c c c c c b b b b b . . 
            . . b c c c c c c c c c b . . . 
            . . . b c c c c c c c b . . . . 
            . . . . b b b b b b b . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.rockheads)
        tiles.placeOnRandomTile(rock_heads, assets.tile`myTile13`)
        tiles.placeOnRandomTile(rock_heads, assets.tile`myTile14`)
        tiles.placeOnRandomTile(rock_heads, assets.tile`myTile11`)
    }
    for (let index = 0; index < 35; index++) {
        fire_worms = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 . . . . . . . . . . . 
            . . . 2 2 2 . . . . . . . . . . 
            . . 2 2 2 2 . 2 . . . . . . . . 
            . 4 4 4 4 4 2 2 . 2 . . . . . . 
            4 4 5 4 4 8 4 2 2 2 2 . 2 . . . 
            4 4 f 4 f 4 4 2 2 2 2 2 2 2 . . 
            5 4 4 4 4 8 4 4 4 4 2 2 2 2 . . 
            4 4 2 2 2 4 5 4 4 4 4 4 4 4 . . 
            4 8 d 4 d 8 4 5 4 5 4 4 8 4 . . 
            . 4 4 4 4 4 5 4 4 4 5 4 5 4 . . 
            . . . . . 4 4 4 4 4 4 4 4 4 . . 
            `, SpriteKind.fireworms)
        tiles.placeOnRandomTile(fire_worms, assets.tile`myTile13`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.fireworms, function (sprite, otherSprite) {
    knockback()
    info.changeLifeBy(-2)
    sprite.sayText("OW!", 500, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.confetti, 100)
    info.changeLifeBy(1)
})
let fire_worms: Sprite = null
let rock_heads: Sprite = null
let cone_head: Sprite = null
let boss12: Sprite = null
let rockhead_dp = 0
let rockhead_hp = 0
let sword: Sprite = null
let blank = 0
let forest_temple_entrance: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
let mySprite2: Sprite = null
let shadow_temple: tiles.WorldMap = null
let forest_temple: tiles.WorldMap = null
let space: tiles.WorldMap = null
let boss_cave: tiles.WorldMap = null
let map: tiles.WorldMap = null
let base_weapon = 0
let attack_power2 = 0
attack_power2 = 3
let current_weapon = base_weapon
let highral_Castel = 0
map = tiles.createMap(tilemap`level9`)
boss_cave = tiles.createMap(tilemap`level19`)
space = tiles.createMap(tilemap`level14`)
forest_temple = tiles.createMap(tilemap`level17`)
shadow_temple = tiles.createMap(tilemap`level13`)
let Max_life = 3
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . f f f f f f . f f f f f f . 
    . f f 2 2 2 2 f f f 2 2 2 2 f f 
    . f 2 5 2 2 2 2 5 2 2 2 2 5 2 f 
    . f 2 2 5 2 2 2 5 2 2 2 5 2 2 f 
    . f 2 2 2 5 2 2 5 2 2 5 2 2 2 f 
    . f 2 2 2 2 5 2 5 2 5 2 2 2 2 f 
    . f 2 5 5 5 5 5 5 5 5 5 5 5 2 f 
    . f f 2 2 2 2 2 5 2 2 2 2 2 f f 
    . . f f 2 2 2 5 5 5 2 2 2 f f . 
    . . . f f 2 5 2 5 2 5 2 f f . . 
    . . . . f f 2 2 5 2 2 f f . . . 
    . . . . . f f 2 5 2 f f . . . . 
    . . . . . . f f 5 f f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 7 7 f f f . . . . 
    . . . f f f 7 7 7 7 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 7 7 7 7 7 7 e e f . . 
    . . f e 7 f f f f f f 7 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 7 7 7 7 7 7 f 4 e . . 
    . . 4 d f 7 7 7 7 7 7 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
info.setLife(Max_life)
info.setScore(0)
controller.moveSprite(mySprite)
story_mode()
animation2()
statusbar = statusbars.create(4, 100, StatusBarKind.stamina)
statusbar.setLabel("stamina", 15)
statusbar.setColor(7, 15)
statusbar.value = 100
statusbar.positionDirection(CollisionDirection.Left)
statusbar.setOffsetPadding(-50, 5)
statusbar.setBarBorder(1, 0)
scene.cameraFollowSprite(mySprite)
scene.cameraFollowSprite(mySprite)
for (let value3 of tiles.getTilesByType(assets.tile`myTile30`)) {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f . f f f f f f . 
        . f f 2 2 2 2 f f f 2 2 2 2 f f 
        . f 2 5 2 2 2 2 5 2 2 2 2 5 2 f 
        . f 2 2 5 2 2 2 5 2 2 2 5 2 2 f 
        . f 2 2 2 5 2 2 5 2 2 5 2 2 2 f 
        . f 2 2 2 2 5 2 5 2 5 2 2 2 2 f 
        . f 2 5 5 5 5 5 5 5 5 5 5 5 2 f 
        . f f 2 2 2 2 2 5 2 2 2 2 2 f f 
        . . f f 2 2 2 5 5 5 2 2 2 f f . 
        . . . f f 2 5 2 5 2 5 2 f f . . 
        . . . . f f 2 2 5 2 2 f f . . . 
        . . . . . f f 2 5 2 f f . . . . 
        . . . . . . f f 5 f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile30`)
}
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 290
    export const ARCADE_SCREEN_HEIGHT = 220
}
forever(function () {
    if (statusbar.value <= 0) {
        controller.moveSprite(mySprite, 50, 50)
    }
    while (statusbar.value < 0) {
        for (let index = 0; index < 20; index++) {
            statusbar.value += 3
            pause(50)
        }
    }
})
