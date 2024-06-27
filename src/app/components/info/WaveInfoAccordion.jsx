import {useContext} from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/shadcn/Accordion.jsx";
import {ChallengeContext} from "@/context/ChallengeContext.jsx";
import WaveInfo from "@/components/info/WaveInfo.jsx";

const WaveInfoAccordion = () => {
  const {challenge} = useContext(ChallengeContext);

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-theme-text-color hover:text-theme-text-color-highlight font-bold">
          Waves
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-8 p-2 flex-col lg:flex-row justify-center -z-50">
            {
              challenge.waves.map((wave, index) => {
                return (
                  <WaveInfo key={index} wave={wave} index={index}/>
                );
              })
            }
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default WaveInfoAccordion;
