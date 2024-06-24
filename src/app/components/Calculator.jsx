import SelectWave from "@/components/SelectWave.jsx";
import {Button} from "@/components/Button.jsx";
import ReorderableList from "@/components/ReorderableList.jsx";
import SelectLanguage from "@/components/SelectLanguage.jsx";
import {useState} from "react";

const Calculator = () => {
  const [wave, setWave] = useState(0);
  const [language, setLanguage] = useState("english");

  return (
    <div className="grow flex flex-col pt-6 gap-6">
      <div className="flex flex-col items-center gap-2 lg:flex-row justify-between">
        <div className="flex flex-col gap-2 lg:flex-row">
          <SelectWave selectedWave={wave} onWaveChange={setWave}/>
          <SelectLanguage selectedLanguage={language} onLanguageChange={setLanguage}/>
        </div>
        <Button>Copy</Button>
      </div>
      <div className="flex flex-col items-center">
        <ReorderableList/>
      </div>
    </div>
  );
};

export default Calculator;