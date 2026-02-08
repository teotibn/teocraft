@namespace
class SpriteKind:
    casa = SpriteKind.create()
    objeto = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    global puerta, estanteria
    tiles.set_current_tilemap(tilemap("""
        nivel2
        """))
    puerta = sprites.create(assets.image("""
        bed0
        """), SpriteKind.objeto)
    puerta.set_position(120, 240)
    crepeer.set_position(73, 115)
    estanteria = sprites.create(img("""
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
            """),
        SpriteKind.objeto)
    estanteria.set_position(9, 8)
    scene.camera_follow_sprite(crepeer)
sprites.on_overlap(SpriteKind.player, SpriteKind.casa, on_on_overlap)

estanteria: Sprite = None
puerta: Sprite = None
crepeer: Sprite = None
crepeer = sprites.create(assets.image("""
    crepeer
    """), SpriteKind.player)
perico = sprites.create(assets.image("""
    perico
    """), SpriteKind.player)
perico.set_position(50, 48)
perico.follow(crepeer, 50)
controller.move_sprite(crepeer)
controller.move_sprite(perico)
perico.say_text("¡vamos allá!")
pocion = sprites.create(assets.image("""
    Pocion
    """), SpriteKind.objeto)
pocion.set_position(60, 108)
scene.camera_follow_sprite(crepeer)
tiles.set_current_tilemap(tilemap("""
    nivel1
    """))
casa2 = sprites.create(assets.image("""
    casa
    """), SpriteKind.casa)
casa2.set_position(1300, 204)