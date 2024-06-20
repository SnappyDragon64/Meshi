import { useEffect, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion.jsx";
import EnemyInfo from "./EnemyInfo.jsx";
import { getEnemies } from "@/challenge/registry/Enemies.js";

const generateText = (items, defaultText) => {
    return items && items.length > 0
        ? items.map(item => item.text).join("\n")
        : defaultText;
};

const EnemyInfoAccordion = () => {
    const [enemies, setEnemies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEnemies = async () => {
            try {
                const enemiesData = await getEnemies();
                setEnemies(enemiesData);
            } catch (error) {
                console.error('Error fetching enemies:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEnemies();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-theme-text-color hover:text-theme-text-color-highlight font-bold">
                    Enemies
                </AccordionTrigger>
                <AccordionContent>
                    <div className="flex gap-8 p-2 flex-col lg:flex-row -z-50">
                        {enemies.map((enemy) => {
                            const { name, hp, weaknesses, resistances, image } = enemy;

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
