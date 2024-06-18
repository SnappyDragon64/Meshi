import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion.jsx";
import EnemyInfo from "./EnemyInfo.jsx";
import {Enemies, getEnemy} from "@/challenge/Enemies.jsx";

const EnemyInfoAccordion = () => {
  return (
    <Accordion type="single" collapsible >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-theme-text-color hover:text-theme-text-color-highlight font-bold ">
          Enemies
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-8 p-2 flex-col lg:flex-row -z-50">
            {Object.values(Enemies).map((enemyId) => {
              const enemy = getEnemy(enemyId);
              return (
                  <EnemyInfo
                      key={enemy.name}
                      name={enemy.name}
                      hp={enemy.hp}
                      weakness={enemy.weakness?.text || "No Weakness"}
                      resistance={enemy.resistance?.text || "No Resistance"}
                      image={enemy.image}
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
