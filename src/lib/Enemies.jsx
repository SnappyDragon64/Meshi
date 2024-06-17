import boring_dummy from "@/assets/boring_dummy.png";
import menacing_dummy from "@/assets/menacing_dummy.png";
import manequeen from "@/assets/manequeen.png";

const Enemies = [
    {
        name: "Boring Dummy",
        hp: "36",
        weakness: "Format “TV” x1.25",
        resistance: "No Resistances",
        image: boring_dummy,
    },
    {
        name: "Menacing Dummy",
        hp: "60",
        weakness: "Genre “Comedy” x1.25",
        resistance: "Genre “Action” x0.75",
        image: menacing_dummy,
    },
    {
        name: "Manequeen",
        hp: "175",
        weakness: "Episodes > 20 x1.5",
        resistance: "Episode Duration < 23 mins x0.5",
        image: manequeen,
    },
];

export default Enemies