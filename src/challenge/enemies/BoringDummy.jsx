import sprite_boring_dummy from "@/assets/enemies/sprite_boring_dummy.png";

const boringDummy = {
    name: "Boring Dummy",
    hp: 36,
    weakness: {
        text: "Format “TV” x1.25",
        multiplier: 1.25,
        condition: {
            format: "TV",
        },
    },
    resistance: "No Resistances",
    image: sprite_boring_dummy,
}

export default boringDummy;
