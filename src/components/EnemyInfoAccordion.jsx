import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion.jsx";
import EnemyInfo from "./EnemyInfo.jsx";
import {getEnemies} from "@/challenge/registry/Enemies.js";

const EnemyInfoAccordion = () => {
  return (
    <Accordion type="single" collapsible >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-theme-text-color hover:text-theme-text-color-highlight font-bold ">
          Enemies
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-8 p-2 flex-col lg:flex-row -z-50">
            {getEnemies().map((enemy) => {
              const { name, hp, weakness, resistance, image } = enemy;
              return (
                  <EnemyInfo
                      key={name}
                      name={name}
                      hp={hp}
                      weakness={weakness?.text || "No Weakness"}
                      resistance={resistance?.text || "No Resistance"}
                      image={image}
                  />
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default EnemyInfoAccordion;
