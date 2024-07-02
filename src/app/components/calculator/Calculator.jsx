import SelectWave from "@/components/calculator/SelectWave.jsx";
import {Button} from "@/components/shadcn/Button.jsx";
import AttackList from "@/components/calculator/attack/AttackList.jsx";
import SelectLanguage from "@/components/calculator/SelectLanguage.jsx";
import {useContext, useEffect, useState} from "react";
import {DatePicker} from "@/components/calculator/DatePicker.jsx";
import {CirclePlus} from "lucide-react";
import {ChallengeContext} from "@/context/ChallengeContext.jsx";
import {calculateDamage} from "@/util/DamageCalculator.js";
import {getWaveInfo, toDate, toDateJson} from "@/util/DataConverter.js";
import {generateChallengeCode} from "@/util/ChallengeCodeGenerator.js";

const Calculator = () => {
  const {challenge} = useContext(ChallengeContext);

  const [wave, setWave] = useState(() => {
    const savedWave = localStorage.getItem("wave");
    return savedWave ? JSON.parse(savedWave) : 0;
  });

  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage ? savedLanguage : "english";
  });

  const [date, setDate] = useState(() => {
    const savedDate = localStorage.getItem("date");
    return savedDate && savedDate !== "null" ? toDate(JSON.parse(savedDate)) : null;
  });

  const [animeList, setAnimeList] = useState(() => {
    const savedAnimeList = localStorage.getItem("animeList");
    return savedAnimeList ? JSON.parse(savedAnimeList) : [null, null, null];
  });

  const [results, setResults] = useState(() => {
    const savedResults = localStorage.getItem("results");
    return savedResults ? JSON.parse(savedResults) : {
      damageDealt: [],
      attackTargets: [],
      attackTargetHPList: [],
      enemyNames: [],
      enemyMaxHPList: [],
    };
  });

  useEffect(() => {
    localStorage.setItem("wave", JSON.stringify(wave));
  }, [wave]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("date", date ? JSON.stringify(toDateJson(date)) : null);
  }, [date]);

  useEffect(() => {
    localStorage.setItem("animeList", JSON.stringify(animeList));
  }, [animeList]);

  useEffect(() => {
    localStorage.setItem("results", JSON.stringify(results));
  }, [results]);

  useEffect(() => {
    const waveObj = challenge.waves[wave];
    const [damageDealt, attackTargets, attackTargetHPList, waveCleared] = calculateDamage(waveObj, animeList);
    const [enemyNames, enemyMaxHPList] = getWaveInfo(waveObj);
    setResults({
      damageDealt: damageDealt,
      attackTargets: attackTargets,
      attackTargetHPList: attackTargetHPList,
      enemyNames: enemyNames,
      enemyMaxHPList: enemyMaxHPList,
      waveCleared: waveCleared,
    })
  }, [animeList, wave, challenge.waves]);

  const addNewItem = () => {
    const list = [...animeList, null];
    setAnimeList(list);
  };

  const generateAndCopyText = () => {
    const challengeCode = generateChallengeCode(challenge.name, wave, date, animeList, results);

    navigator.clipboard.writeText(challengeCode).then(() => {
      alert("Challenge code copied:\n" + challengeCode)
    });
  };

  return (
    <div className="grow flex flex-col pt-6 gap-6">
      <div className="flex flex-col items-stretch gap-2 md:flex-row justify-between">
        <div className="flex flex-wrap gap-2 md:flex-row md:flex-nowrap">
          <SelectWave selectedWave={wave} onWaveChange={setWave} className="grow"/>
          <SelectLanguage selectedLanguage={language} onLanguageChange={setLanguage} className="grow"/>
          <DatePicker date={date} setDate={setDate}/>
        </div>
        <Button onClick={generateAndCopyText} className="bg-theme-color-highlight text-theme-text-color-highlight font-bold">Copy</Button>
      </div>
      <div className="flex flex-col items-center gap-4">
        <AttackList animeList={animeList} setAnimeList={setAnimeList} date={date} language={language}
                    results={results}/>
        <Button variant="link" size="icon" onClick={addNewItem} className="h-6 w-6">
          <CirclePlus className="stroke-theme-text-color hover:stroke-theme-text-color-highlight"/>
        </Button>
      </div>
    </div>
  );
};

export default Calculator;