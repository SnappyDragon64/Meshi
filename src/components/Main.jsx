import MaxWidthWrapper from "@/components/MaxWidthWrapper.jsx";
import Enemies from "@/components/Enemies.jsx";

const Main = () => {
    return (
        <main>
            <MaxWidthWrapper>
                <div className="flex flex-col p-8">
                    <p className="text-white">
                        A calculator for AWC&apos;s Dungeon Challenge: Training Grounds.
                    </p>
                    <Enemies/>
                </div>
            </MaxWidthWrapper>
        </main>
    )
}

export default Main