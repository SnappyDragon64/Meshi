import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.jsx";
import EnemyInfo from "./EnemyInfo.jsx";
import boring_dummy from "../assets/boring_dummy.png";
import menacing_dummy from "../assets/menacing_dummy.png";
import manequeen from "../assets/manequeen.png";

const enemies = [
  {
    name: "Boring Dummy",
    hp: "36",
    weakness: "Format “TV” x1.25",
    resistance: "No Resistances",
  },
  {
    name: "Menacing Dummy",
    hp: "60",
    weakness: "Genre “Comedy” x1.25",
    resistance: "Genre “Action” x0.75",
  },
  {
    name: "Manequeen",
    hp: "175",
    weakness: "Episodes > 20 x1.5",
    resistance: "Episode Duration < 23 mins x0.5",
  },
];

const images = {
  "Boring Dummy": boring_dummy,
  "Menacing Dummy": menacing_dummy,
  "Manequeen": manequeen,
};

const EnemyInfoAccordion = () => {
  return (
    <Accordion type="single" collapsible >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-theme-text-color hover:text-theme-text-color-highlight font-bold ">
          Enemies
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-8 p-2 flex-col lg:flex-row -z-50">
            {enemies.map((enemy) => (
              <EnemyInfo
                key={enemy.name}
                name={enemy.name}
                hp={enemy.hp}
                weakness={enemy.weakness}
                resistance={enemy.resistance}
                image={images[enemy.name]}
              />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default EnemyInfoAccordion;
