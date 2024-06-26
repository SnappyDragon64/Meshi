import {useEffect, useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";
import {Button} from "@/components/Button.jsx";
import {AnimeCombobox} from "@/components/AnimeCombobox.jsx";

const ReorderableListItem = ({animeMap, index}) => {
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    animeMap[index] = anime;
    console.log(animeMap)
  }, [anime, animeMap, index]);

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
          {anime && anime.imageUrl && <img src={anime.imageUrl} className="w-full h-full"/>}
        </div>
      </div>
      <div className="p-2 grow">
        <AnimeCombobox anime={anime} setAnime={setAnime}/>
      </div>
    </div>
  );
};

export default ReorderableListItem;
