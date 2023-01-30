import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom({
    "fullscreen":"true",
    "debug":"true"
});

loadSprite("tlo", "tlo.png")
loadSprite("UFO", "UFO.png")

loadSound("sound","Tryumfy_Króla_Niebieskiego.mp3")

onKeyPress(
"space", ()=>{
    play("sound")
}

)

add([
    sprite("tlo"),
    pos(0, 0),
    scale(3),
    rotate(0),
])

    const ufo = add([
        sprite("UFO"),
        pos(100, 400),
        scale(2),
        move(RIGHT,240)
    ]);

if (ufo.pos.x = 800) {
ufo.moveTo(100,400)   
}

