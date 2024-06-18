import sprite_manequeen from "@/assets/enemies/sprite_manequeen.png";

const manequeen =     {
    name: "Manequeen",
    hp: 175,
    weakness: {
        text: "Episodes > 20 x1.5",
        multiplier: 1.5,
        condition: {
            'episodes': 20,
        },
    },
    resistance: {
        text: "Episode Duration < 23 mins x0.5",
        multiplier: 0.5,
        condition: {
            'duration': 23,
        },
    },
    image: sprite_manequeen,
}

export default manequeen;
