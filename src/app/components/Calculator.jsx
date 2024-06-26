import SelectWave from "@/components/SelectWave.jsx";
import {Button} from "@/components/Button.jsx";
import ReorderableList from "@/components/ReorderableList.jsx";
import SelectLanguage from "@/components/SelectLanguage.jsx";
import {useState} from "react";
import {DatePicker} from "@/components/DatePicker.jsx";
import * as React from "react";

const Calculator = () => {
  const [wave, setWave] = useState(0);
  const [language, setLanguage] = useState("english");
  const [date, setDate] = React.useState(null)
  const [animeList, setAnimeList] = React.useState([null, null, null])

  return (
    <div className="grow flex flex-col pt-6 gap-6">
      <div className="flex flex-col items-stretch gap-2 md:flex-row justify-between">
        <div className="flex flex-wrap gap-2 md:flex-row md:flex-nowrap">
          <SelectWave selectedWave={wave} onWaveChange={setWave} className="grow"/>
          <SelectLanguage selectedLanguage={language} onLanguageChange={setLanguage} className="grow"/>
          <DatePicker date={date} setDate={setDate}/>
        </div>
        <Button>Copy</Button>
      </div>
      <div className="flex flex-col items-center">
        <ReorderableList animeList={animeList} setAnimeList={setAnimeList}/>
      </div>
    </div>
  );
};

export default Calculator;