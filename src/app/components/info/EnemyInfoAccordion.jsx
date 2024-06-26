import {useContext} from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/shadcn/Accordion.jsx";
import EnemyInfo from "./EnemyInfo.jsx";
import {ChallengeContext} from "@/context/ChallengeContext.jsx";

const EnemyInfoAccordion = () => {
  const {challenge} = useContext(ChallengeContext);

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-theme-text-color hover:text-theme-text-color-highlight font-bold">
          Enemies
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-8 p-2 flex-col lg:flex-row justify-center -z-50">
            {
              challenge.enemies.map((enemy, index) => {
                return (
                  <EnemyInfo key={index} enemy={enemy}/>
                );
              })
            }
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default EnemyInfoAccordion;
