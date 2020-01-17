namespace SpriteKind {
    export const Car = SpriteKind.create()
    export const vecicle = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
    //% blockIdentity=images._tile
    export const tile1 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 f f 7 7 7 7 7 f 7 7 7 7 7 f 7 
7 f 7 7 7 7 7 7 7 7 7 f 7 7 f 7 
7 f f 7 f 7 f 7 f 7 f f f 7 f 7 
7 f 7 7 7 f 7 7 f 7 7 f 7 7 7 7 
7 f f 7 f 7 f 7 f 7 7 f 7 7 f 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 f f f f f f 7 7 7 7 7 
7 7 7 7 7 f f f f f f 7 7 7 7 7 
7 7 7 7 7 f f f f f f 7 7 7 7 7 
7 7 7 7 7 f f f f 1 f 7 7 7 7 7 
7 7 7 7 7 f f f f 1 f 7 7 7 7 7 
7 7 7 7 7 f f f f f f 7 7 7 7 7 
7 7 7 7 7 f f f f f f 7 7 7 7 7 
7 7 7 7 7 f f f f f f 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
2 7 7 7 7 7 7 7 7 7 7 2 7 2 7 2 
2 7 7 7 2 2 7 7 2 2 7 2 2 7 7 2 
2 7 7 2 7 7 2 7 2 7 7 2 7 7 7 7 
2 7 7 2 7 7 2 7 2 7 7 2 2 7 7 7 
2 2 7 7 2 2 7 7 2 2 7 2 7 2 7 2 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
}
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f . . . . . . . . . . . . . . . f f . . . . . . . . 
. . . . . f e f . . . . . . . . . . . . . f e f . . . . . . . . 
. . . . . f 3 e f . . . . . . . . . . . f e 3 f . . . . . . . . 
. . . . . f 3 3 e f . . . . . . . . . f e 3 3 f . . . . . . . . 
. . . . . f 3 3 3 e f f f f f f f f f e 3 3 3 f . . . . . . . . 
. . . . . f 3 3 3 e e e f 1 1 1 f e e e 3 3 3 f . . . . . . . . 
. . . . . f 3 3 e e e e f 1 1 1 f e e e e 3 3 f . . . . . . . . 
. . . . . f 3 e e e e e e 1 1 1 e e e e e e 3 f . . . . . . . . 
. . . . . . f f e e e e e 1 1 1 e e e e e f f . . . . . . . . . 
. . . . . . . f e e f f e 1 1 1 e f f e e f . . . . . . . . . . 
. . . . . . . f e e f f 1 1 1 1 1 f f e e f . . . . . . . . . . 
. . . . . . . f e e 1 1 1 f f 1 1 1 1 e e f . . . . . . . . . . 
. . . . . . . f e 3 3 1 1 3 1 1 1 1 3 3 e f . . . . . . . . . . 
. . . . . . . f e e 1 1 1 1 1 1 1 1 1 e e f . . . . . . . . . . 
. . . . . . . f e e e 1 1 1 1 1 1 1 e e e f . . . . . . . . . . 
. . . . . . . . f e e e 1 1 1 1 1 e e e f . . . . . . . . . . . 
. . . . . . . . . f e e 1 1 1 1 1 e e f . . . . . . . . . . . . 
. . . . . . . . . f f e 1 1 1 1 1 e f f . . . . f f f . . . . . 
. . . . . . . . . f e 1 1 1 1 1 1 1 e f . . . f 1 1 f . . . . . 
. . . . . . . . f e e 1 1 1 1 1 1 1 e e f . . f e 1 f . . . . . 
. . . . . . . . f e e 1 1 1 1 1 1 1 e e f f f e e e f . . . . . 
. . . . . . . f f e e 1 1 1 1 1 1 1 e e f f e e e f . . . . . . 
. . . . . . . f e e e 1 1 1 1 1 1 1 e e e f e e f . . . . . . . 
. . . . . . . f e f 1 1 1 1 1 1 1 1 1 f e f f f . . . . . . . . 
. . . . . . . f f f 1 1 1 f f f 1 1 1 f f f . . . . . . . . . . 
. . . . . . . . . f f f f f . f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(
            hex`100010000104030303030303030303030303030207040a0a0a0a0a0a0a0a0a0a0a0a0a0507040a0a0a0a0a0a0a0a0a0a0a0a0a0508050a0a0a0a0a0a0a0a0a0a0a0a0a0507060a0a0a0a0a0a0a0a0a0a0a0a0a05080a0a0a0a0a0a0a0a0a0a0a0a0a0a05070a0a0a0a0a0a0a0a0a0a0a0a0a0a05070a0a0a0a0a0a0a0a0a0a0a0a0a0a05070a0a0a0a0a0a0a0a0a0a0a0a0a0a05070a0a0a0a0a0a0a0a0a0a0a0a0a0a05070a0a0a0a0a0a0a0a0a0a0a0a0a0a05070a0a0a0a0a0a0a0a0a0a0a0a0a0a05070a0a0a0a0a0a0a0a0a0a0a0a0a0a05070a0a0a0a0a0a0a0a0a0a0a0a0a0a05070a0a0a0a0a0a0a0a0a0a0a0a0a0a050809090909090909090909090909090c`,
            img`
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
`,
            [myTiles.tile0,sprites.castle.tilePath1,myTiles.tile1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.castle.tileGrass3,myTiles.tile2],
            TileScale.Sixteen
        ))
