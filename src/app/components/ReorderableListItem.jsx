import {useEffect, useState} from "react";
import {ArrowDown, ArrowRight, ArrowUp} from "lucide-react";
import {searchAnimeByName} from "@/services/IndexedDB.js";
import MaxWidthWrapper from "@/components/MaxWidthWrapper.jsx";

const ReorderableListItem = () => {
  const [animeName, setAnimeName] = useState("");
  const [results, setResults] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [showEpisodes, setShowEpisodes] = useState(false);
  useEffect(() => {
    if (animeName) {
      searchAnimeByName(animeName)
        .then((res) => setResults(res))
        .catch((err) => console.error(err));
    } else {
      setResults([]);
    }
  }, [animeName]);

  const handleSubmit = () => {
    const selected = results.find(anime => anime.englishName.toLowerCase() === animeName.toLowerCase());
    if (selected) {
      setSelectedAnime(selected);
      setShowEpisodes(true);
    }
  }

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
          <div className="flex items-center">
            <input
              type="text"
              className="rounded-sm h-6 w-3/4 border-2 border-gray-300 p-2 mt-2"
              value={animeName}
              onChange={(e) => {
                setAnimeName(e.target.value);
                setShowEpisodes(false);
              }}
              list="animeName"
            />
            <ArrowRight className="mt-2 ml-1" onClick={handleSubmit}></ArrowRight>
          </div>
          <span className=" mt-2">Episode no: {showEpisodes && selectedAnime ? selectedAnime.episodes : ''}</span>
          <span>Id: {showEpisodes && selectedAnime ? selectedAnime.id : ''}</span>

          <datalist id="animeName">
            {results.map((anime) => (
              <option key={anime.id} value={anime.englishName}/>
            ))}
          </datalist>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ReorderableListItem;
