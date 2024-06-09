import MaxWidthWrapper from "./components/MaxWidthWrapper.jsx";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function App() {
    return (
        // TODO: Separate into components
        <div className="bg-theme-color-dark min-h-screen flex flex-col">
            </* Header */ div className="sticky top-0 w-full bg-theme-color-light">
                <MaxWidthWrapper>
                    <div className="flex p-2.5">
                        <div className="grow flex justify-start">
                            </* Logo */ p className="text-2xl font-bold text-white">Meshi.</p>
                        </div>
                        <div className="grow flex justify-end">
                            </* AniList Username */ div></div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
            </* Main */ MaxWidthWrapper>
                <div className="flex flex-col p-8">
                </div>
            </MaxWidthWrapper>
        </div>
    )
}