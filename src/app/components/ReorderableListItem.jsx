import {ChevronDown, ChevronUp} from "lucide-react";
import {Button} from "@/components/Button.jsx";
import {AnimeCombobox} from "@/components/AnimeCombobox.jsx";
import {cn} from "@/util/Utils.js";
import calculateDamage from "@/util/DamageCalculator.js";
import {useContext} from "react";
import {ChallengeContext} from "@/context/ChallengeContext.jsx";

const ReorderableListItem = ({animeList, setAnimeList, index, date, language}) => {
  const {challenge} = useContext(ChallengeContext);

  const getAnime = () => {
    return animeList[index];
  }

  const setAnime = (anime) => {
    const list = [...animeList]
    list[index] = anime;
    setAnimeList(list);
    const result = calculateDamage(challenge.waves[1], animeList);
    console.log(result);
  }

  const moveUpDisabled = () => {
    return index === 0;
  }

  const moveDownDisabled = () => {
    return index + 1 === animeList.length;
  }

  const onMoveUp = () => {
    const list = [...animeList]
    if (index > 0 && index < list.length) {
      [list[index], list[index - 1]] = [list[index - 1], list[index]];
    }
    setAnimeList(list);
  }

  const onMoveDown = () => {
    const list = [...animeList]
    if (index >= 0 && index < list.length - 1) {
      [list[index], list[index + 1]] = [list[index + 1], list[index]];
    }
    setAnimeList(list);
  }

  return (
    <div className="grow flex bg-theme-color-primary rounded-lg overflow-hidden">
      <div className="w-[100px] h-[137px] grid bg-theme-color-tertiary">
        <div className="col-start-1 row-start-1 z-20">
          <div className="h-full flex flex-col items-center justify-center">
            <div className="w-full gap-2 py-1 bg-theme-color-primary bg-opacity-90">
              <p className="text-6xl text-theme-text-color-highlight text-center">{index + 1}</p>
              <div className="flex gap-2 justify-center">
                <Button variant="link" size="icon" onClick={onMoveUp} disabled={moveUpDisabled()} className={cn("h-6 w-6", moveUpDisabled() ? "cursor-not-allowed opacity-10" : "")}>
                  <ChevronUp className="stroke-theme-text-color hover:stroke-theme-text-color-highlight"/>
                </Button>
                <Button variant="link" size="icon" onClick={onMoveDown}  disabled={moveDownDisabled()} className={cn("h-6 w-6", moveDownDisabled() ? "cursor-not-allowed opacity-10" : "")}>
                  <ChevronDown className="stroke-theme-text-color hover:stroke-theme-text-color-highlight"/>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-1 row-start-1 z-10">
          {getAnime() && getAnime().imageUrl && <img src={getAnime().imageUrl} className="w-full h-full"/>}
        </div>
      </div>
      <div className="p-2 grow">
        <AnimeCombobox getItemAnime={getAnime} setItemAnime={setAnime} date={date} language={language}/>
      </div>
    </div>
  );
};

export default ReorderableListItem;
