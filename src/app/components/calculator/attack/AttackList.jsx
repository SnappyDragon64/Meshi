import AttackListItem from "@/components/calculator/attack/AttackListItem.jsx";
import {useEffect, useState} from "react";
import {getEligibleAnime} from "@/services/IndexedDB.js";

const AttackList = ({animeList, setAnimeList, date, language, results}) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getEligibleAnime(language, date)
      .then((res) => {
        setSearchResults(res);
      })
      .catch((err) => console.error(err));
  }, [date, language]);

  return (
    <div className="w-full flex flex-col gap-4">
      {
        animeList.map((val, index) => {
          return (
            <AttackListItem key={index} searchResults={searchResults} animeList={animeList} setAnimeList={setAnimeList}
                            index={index} language={language} results={results}/>
          )
        })
      }
    </div>
  )
}

export default AttackList