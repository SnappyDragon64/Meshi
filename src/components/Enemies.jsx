import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.jsx";
import boring_dummy from '/public/boring_dummy.png'
import menacing_dummy from '/public/menacing_dummy.png'
import manequeen from '/public/manequeen.png'

const Enemy = ({name, hp, weakness, resistance, image}) => {
    return (
        <div className="w-full grid rounded-lg overflow-hidden">
            <div className="col-start-1 row-start-1 flex flex-row-reverse">
                <img src={image} className="object-cover h-48 w-1/2"/>
            </div>
            <div className="col-start-1 row-start-1 z-10">
                <div className="bg-gradient-to-r from-black via-theme-color-dark to-theme-color-dark opacity-50 w-full h-full"/>
            </div>
            <div className="col-start-1 row-start-1 z-20 flex">
                <div className="bg-theme-color-light w-2 h-full"/>
                <div className="p-4">
                    <p className="text-xl font-bold text-white">{name}</p>
                    <p className="text-lg font-bold text-white">HP: {hp}</p>
                    <p className="text-lg font-bold text-white">Weakness:</p>
                    <p className="text-lg text-white">{weakness}</p>
                    <p className="text-lg font-bold text-white">Resistance:</p>
                    <p className="text-lg text-white">{resistance}</p>
                </div>
            </div>
        </div>
    )
}

const Enemies = () => {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-white">Enemies</AccordionTrigger>
                <AccordionContent>
                    <div className="flex gap-8 p-2">
                        <Enemy name="Boring Dummy" hp="36" weakness="Format “TV” x1.25" resistance="No Resistances"
                               image={boring_dummy}></Enemy>
                        <Enemy name="Menacing Dummy" hp="60" weakness="Genre “Comedy” x1.25" resistance="Genre “Action” x0.75" image={menacing_dummy}></Enemy>
                        <Enemy name="Manequeen" hp="175" weakness="Episodes > 20 x1.5" resistance="Episode Duration < 23 mins x0.5" image={manequeen}></Enemy>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default Enemies