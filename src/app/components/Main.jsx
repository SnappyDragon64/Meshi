import MaxWidthWrapper from "@/components/misc/MaxWidthWrapper.jsx";
import EnemyInfoAccordion from "@/components/info/EnemyInfoAccordion.jsx";
import CalculatorContainer from "@/components/calculator/CalculatorContainer.jsx";
import WaveInfoAccordion from "@/components/info/WaveInfoAccordion.jsx";
import SelectChallenge from "@/components/misc/SelectChallenge.jsx";

const Main = () => {
  return (
    <main className="grow flex flex-col">
      <MaxWidthWrapper className="grow flex flex-col">
        <div className="grow flex flex-col p-8">
          <SelectChallenge/>
          <EnemyInfoAccordion/>
          <WaveInfoAccordion/>
          <CalculatorContainer/>
        </div>
      </MaxWidthWrapper>
    </main>
  )
}

export default Main
