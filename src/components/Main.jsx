import MaxWidthWrapper from "@/components/MaxWidthWrapper.jsx";
import Enemies from "@/components/Enemies.jsx";
import EnemiesAccordion from "./EnemiesAccordion";

const Main = () => {
    return (
        <main>
            <MaxWidthWrapper>
                <div className="flex flex-col p-8">
                    <p className="text-theme-text-color">
                        A calculator for AWC&apos;s Dungeon Challenge: Training Grounds.
                    </p>
                    <EnemiesAccordion/>
                </div>
            </MaxWidthWrapper>
        </main>
    )
}

export default Main