import SelectWave from "@/components/SelectWave.jsx";
import {Button} from "@/components/Button.jsx";
import ReorderableList from "@/components/ReorderableList.jsx";
import SelectLanguage from "@/components/SelectLanguage.jsx";
import {useEffect, useState} from "react";
import {DatePicker} from "@/components/DatePicker.jsx";
import {CirclePlus} from "lucide-react";
import {toDate, toDateJson} from "@/util/Utils.js";

const Calculator = () => {
  const [wave, setWave] = useState(() => {
    const savedWave = localStorage.getItem('wave');
    return savedWave ? JSON.parse(savedWave) : 0;
  });

  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage ? savedLanguage : "english";
  });

  const [date, setDate] = useState(() => {
    const savedDate = localStorage.getItem('date');
    return savedDate && savedDate !== "null" ? toDate(JSON.parse(savedDate)) : null;
  });

  const [animeList, setAnimeList] = useState(() => {
    const savedAnimeList = localStorage.getItem('animeList');
    return savedAnimeList ? JSON.parse(savedAnimeList) : [null, null, null];
  });

  useEffect(() => {
    localStorage.setItem('wave', JSON.stringify(wave));
  }, [wave]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('date', date ? JSON.stringify(toDateJson(date)) : null);
  }, [date]);

  useEffect(() => {
    localStorage.setItem('animeList', JSON.stringify(animeList));
  }, [animeList]);

  const addNewItem = () => {
    const list = [...animeList, null];
    setAnimeList(list);
  }

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
      <div className="flex flex-col items-center gap-4">
        <ReorderableList animeList={animeList} setAnimeList={setAnimeList} date={date} language={language}/>
        <Button variant="link" size="icon" onClick={addNewItem} className="h-6 w-6">
          <CirclePlus className="stroke-theme-text-color hover:stroke-theme-text-color-highlight"/>
        </Button>
      </div>
    </div>
  );
};

export default Calculator;