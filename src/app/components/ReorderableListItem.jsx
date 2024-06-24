import {useEffect, useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";
import {Button} from "@/components/Button.jsx";
import {searchAnimeByName} from "@/services/IndexedDB.js";

const ReorderableListItem = ({animeMap, index}) => {
  const [results, setResults] = useState([]);
  const [anime, setAnime] = useState({});
  const [animeName, setAnimeName] = useState("");

  useEffect(() => {
    if (animeName) {
      searchAnimeByName(animeName)
        .then((res) => setResults(res))
        .catch((err) => console.error(err));
    } else {
      setResults([]);
    }
  }, [animeName]);

  const handleInput = (e) => {
    setAnimeName(e.target.value);
    const selected = results.find(anime => anime.englishName.toLowerCase() === animeName.toLowerCase());
    console.log(animeName)
    console.log(selected)
    if (selected) {
      setAnime(selected);
      animeMap[index] = anime;
      console.log(anime)
    }
  }

  return (
    <div className="grow flex bg-theme-color-primary rounded-lg overflow-hidden">
      <div className="w-[100px] h-[137px] grid bg-theme-color-tertiary">
        <div className="col-start-1 row-start-1 z-20">
          <div className="h-full flex flex-col items-center justify-center">
            <div className="w-full gap-2 py-1 bg-theme-color-primary bg-opacity-90">
              <p className="text-6xl text-theme-text-color-highlight text-center">{index + 1}</p>
              <div className="flex gap-2 justify-center">
                <Button variant="link" size="icon" className="h-6 w-6">
                  <ChevronUp className="stroke-theme-text-color hover:stroke-theme-text-color-highlight"/>
                </Button>
                <Button variant="link" size="icon" className="h-6 w-6">
                  <ChevronDown className="stroke-theme-text-color hover:stroke-theme-text-color-highlight"/>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-1 row-start-1 z-10">
          {anime.imageUrl && <img src={anime.imageUrl} className="w-full h-full"/>}
        </div>
      </div>
      <div className="p-2">
        <input
          type="text"
          className="text-md text-theme-text-color bg-theme-color-secondary focus:outline-0 p-1 rounded-lg"
          value={animeName}
          placeholder="Enter Anime"
          onInput={handleInput}
          list="animeName"
        />
        <datalist id="animeName">
          {results.map((anime) => (
            <option key={anime.id} value={anime.englishName}/>
          ))}
        </datalist>
      </div>
    </div>
  );
};

export default ReorderableListItem;
