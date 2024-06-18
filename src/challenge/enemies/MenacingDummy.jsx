import sprite_menacing_dummy from "@/assets/enemies/sprite_menacing_dummy.png";

const menacingDummy = {
    name: "Menacing Dummy",
    hp: 60,
    weakness: {
        text: "Genre “Comedy” x1.25",
        multiplier: 1.25,
        condition: {
            genre: "Comedy",
        },
    },
    resistance: {
        text: "Genre “Action” x0.75",
        multiplier: 0.75,
        condition: {
            genre: "Action",
        },
    },
    image: sprite_menacing_dummy,
}

export default menacingDummy;
