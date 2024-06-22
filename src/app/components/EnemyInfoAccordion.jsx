import {useEffect, useState} from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/Accordion.jsx";
import EnemyInfo from "./EnemyInfo.jsx";
import {getChallenge} from "@/registry/Challenges.js";
import Spinner from "@/components/Spinner.jsx";

const EnemyInfoAccordion = () => {
  const [enemies, setEnemies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEnemies().then((fetchedEnemies) => {
      setEnemies(fetchedEnemies)
    })

    setLoading(false);
  }, []);

  const fetchEnemies = async () => {
    const challenge = await getChallenge("training_grounds")
    return challenge.enemies;
  };

  const generateText = (items, defaultText) => {
    return items && items.length > 0
      ? items.map(item => item.text).join("\n")
      : defaultText;
  };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-theme-text-color hover:text-theme-text-color-highlight font-bold">
          Enemies
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-8 p-2 flex-col lg:flex-row justify-center -z-50">
            {loading ? <Spinner type="mini"/> :
              enemies.map((enemy) => {
                const {name, hp, weaknesses, resistances, image} = enemy;

                return (
                  <EnemyInfo
                    key={name}
                    name={name}
                    hp={hp}
                    weaknesses={generateText(weaknesses, "No Weaknesses")}
                    resistances={generateText(resistances, "No Resistances")}
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
