namespace SpriteKind {
    export const casa = SpriteKind.create()
    export const objeto = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.casa, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`nivel1`)
    mySprite = sprites.create(assets.image`llave`, SpriteKind.objeto)
    puerta = sprites.create(assets.image`bed0`, SpriteKind.objeto)
    puerta.setPosition(120, 240)
    crepeer.setPosition(73, 115)
    estanteria = sprites.create(img`
        bccccccccccccccccccccccb
        cbdddddddddbbdddddddddbc
        cddddddddddbbddddddddddc
        cdddddbbbbbbbbbbbbdddddc
        cdddddbbbbbbbbbbbbdddddc
        cddddddddddbbddddddddddc
        cddddddddddbbddddddddddc
        cbdddddddddbbdddddddddbc
        ccbbbbbbbbbbbbbbbbbbbbcc
        ccffffffffffffffffffffcc
        cbcc33c6c44c3c7cbbc3ccbc
        cbcc33c6c44c3c7c66c3ccbc
        .bcc33c6c44ccc7c66c3ccb.
        .dccccccccccccccccccccd.
        .dcbbbbbbbbbbbbbbbbbbcd.
        .dffffffffffffffffffffd.
        .dccc6cbbc4c6cbbc3c7ccd.
        .dccc6c33c4c6c44c3c7ccd.
        .dccc6c33ccc6c44ccc7ccd.
        .dccccccccccccccccccccd.
        .dcbbbbbbbbbbbbbbbbbbcd.
        .dcbbbbbbbbbbbbbbbbbbcd.
        .d....................d.
        ........................
        `, SpriteKind.objeto)
    estanteria.setPosition(9, 8)
    scene.cameraFollowSprite(crepeer)
    mySprite2 = sprites.create(assets.image`p`, SpriteKind.Player)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    info.changeLifeBy(-1)
    crepeer.startEffect(effects.fire, 2000)
})
let mySprite2: Sprite = null
let estanteria: Sprite = null
let puerta: Sprite = null
let mySprite: Sprite = null
let crepeer: Sprite = null
crepeer = sprites.create(assets.image`crepeer`, SpriteKind.Player)
let perico = sprites.create(assets.image`perico`, SpriteKind.Player)
info.setLife(999)
perico.setPosition(50, 48)
perico.follow(crepeer, 50)
controller.moveSprite(crepeer)
controller.moveSprite(perico)
perico.sayText("¡vamos allá!")
let pocion = sprites.create(assets.image`Pocion`, SpriteKind.objeto)
pocion.setPosition(60, 108)
scene.cameraFollowSprite(crepeer)
tiles.setCurrentTilemap(tilemap`nivel1`)
let casa2 = sprites.create(assets.image`casa`, SpriteKind.casa)
casa2.setPosition(1300, 204)
