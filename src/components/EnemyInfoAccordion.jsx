import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion.jsx";
import EnemyInfo from "./EnemyInfo.jsx";
import Enemies from "@/lib/Enemies.jsx";

const EnemyInfoAccordion = () => {
  return (
    <Accordion type="single" collapsible >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-theme-text-color hover:text-theme-text-color-highlight font-bold ">
          Enemies
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-8 p-2 flex-col lg:flex-row -z-50">
            {Enemies.map((enemy) => (
              <EnemyInfo
                key={ enemy.name }
                name={ enemy.name }
                hp={ enemy.hp }
                weakness={ enemy.weakness }
                resistance={ enemy.resistance }
                image={ enemy.image }
              />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default EnemyInfoAccordion;
