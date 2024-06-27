import MaxWidthWrapper from "@/components/misc/MaxWidthWrapper.jsx";
import EnemyInfoAccordion from "@/components/info/EnemyInfoAccordion.jsx";
import CalculatorContainer from "@/components/calculator/CalculatorContainer.jsx";
import {ChallengeContext} from "@/context/ChallengeContext.jsx";
import {useContext} from "react";
import WaveInfoAccordion from "@/components/info/WaveInfoAccordion.jsx";

const Main = () => {
  const {challenge} = useContext(ChallengeContext);

  return (
    <main className="grow flex flex-col">
      <MaxWidthWrapper className="grow flex flex-col">
        <div className="grow flex flex-col p-8">
          <p className="text-theme-text-color">
            A calculator for AWC&apos;s {challenge.name}.
          </p>
          <EnemyInfoAccordion/>
          <WaveInfoAccordion/>
          <CalculatorContainer/>
        </div>
      </MaxWidthWrapper>
    </main>
  )
}

export default Main