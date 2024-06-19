import React, { useState , useEffect} from "react";
import { ArrowUp } from "lucide-react";
import { ArrowDown } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { searchAnimeByName } from "@/services/IndexedDB.js";

const ReorderableListItem = () => {
  const [animeName, setAnimeName] = useState("");
  const [results , setResults] = useState([]);
  useEffect(() => {
    if(animeName){
        searchAnimeByName(animeName)
        .then((res) => setResults(res))
        .catch((err) => console.error(err))
    } else{
        setResults([])
    }
  }, [animeName])
  
  return (
    <div className="flex bg-red-200">
      <div className="flex flex-col justify-between">
        <div>
          <ArrowUp></ArrowUp>
        </div>
        <div>
          <ArrowDown></ArrowDown>
        </div>
      </div>
      <MaxWidthWrapper>
        <div className="flex flex-col">
          <label htmlFor="input">Enter Anime Name:</label>
          <input
            type="text"
            className="rounded-sm h-6 "
            value={animeName}
            onChange={(e) => {
              setAnimeName(e.target.value);
            }}
            list="animeName"
          />
          <span className=" mt-2">Episode no:</span>
          
          <datalist id="animeName">
            {results.map((anime) => (
              <option key={anime.id} value={anime.englishName} />
            ))}
          </datalist>

          
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ReorderableListItem;
