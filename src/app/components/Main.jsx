import MaxWidthWrapper from "@/components/MaxWidthWrapper.jsx";
import EnemyInfoAccordion from "@/components/EnemyInfoAccordion.jsx";
import CalculatorWindow from "@/components/CalculatorContainer.jsx";


const Main = () => {
  return (
    <main className="grow flex flex-col">
      <MaxWidthWrapper className="grow flex flex-col">
        <div className="grow flex flex-col p-8">
          <p className="text-theme-text-color">
            A calculator for AWC&apos;s Dungeon Challenge: Training Grounds.
          </p>
          <EnemyInfoAccordion/>
          <CalculatorWindow/>
        </div>
      </MaxWidthWrapper>
    </main>
  )
}

export default Main