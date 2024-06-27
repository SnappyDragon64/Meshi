import {ChevronDown, ChevronUp, XCircle} from "lucide-react";
import {Button} from "@/components/shadcn/Button.jsx";
import {AnimeCombobox} from "@/components/calculator/attack/AnimeCombobox.jsx";
import {cn} from "@/util/Utils.js";
import * as React from "react";

const AttackListItem = ({searchResults, animeList, setAnimeList, index, date, language, results}) => {
  const getAnime = () => {
    return animeList[index];
  }

  const setAnime = (anime) => {
    const list = [...animeList]
    list[index] = anime;
    setAnimeList(list);
  }

  const moveUpDisabled = () => {
    return index === 0;
  }

  const moveDownDisabled = () => {
    return index + 1 === animeList.length;
  }

  const onMoveUp = () => {
    const list = [...animeList];
    if (index > 0 && index < list.length) {
      [list[index], list[index - 1]] = [list[index - 1], list[index]];
    }
    setAnimeList(list);
  }

  const onMoveDown = () => {
    const list = [...animeList];
    if (index >= 0 && index < list.length - 1) {
      [list[index], list[index + 1]] = [list[index + 1], list[index]];
    }
    setAnimeList(list);
  }

  const deleteItem = () => {
    const list = [...animeList];
    list.splice(index, 1);
    setAnimeList(list);
  }

  const damageDealt = results.damageDealt[index];
  const attackTarget = results.attackTargets[index];
  const enemyRemainingHP = results.attackTargetHPList[index];
  const enemyName = results.enemyNames[attackTarget];
  const enemyMaxHP = results.enemyMaxHPList[attackTarget];

  return (
    <div className="grow flex bg-theme-color-primary rounded-lg overflow-hidden">
      <div className="min-w-[100px] min-h-[137px] grid bg-theme-color-tertiary">
        <div className="col-start-1 row-start-1 z-20">
          <div className="h-full flex flex-col items-center justify-center">
            <div className="w-full gap-2 py-1 bg-theme-color-primary bg-opacity-80">
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
      <div className="p-2 grow flex flex-col gap-2">
        <div className="flex gap-2">
          <AnimeCombobox  searchResults={searchResults} getItemAnime={getAnime} setItemAnime={setAnime} date={date} language={language}/>
          <Button variant="link" size="icon" onClick={deleteItem} className="h-6 w-6">
            <XCircle className="stroke-theme-text-color hover:stroke-theme-text-color-highlight"/>
          </Button>
        </div>
        { damageDealt ?
          (
            <div className="grow flex flex-col md:flex-row">
              <div className="grow my-auto">
                <p className="text-theme-text-color text-center">Damage: {damageDealt}</p>
              </div>
              <div className="grow my-auto">
                <p className="text-theme-text-color text-center">{enemyName}: {enemyRemainingHP}/{enemyMaxHP}</p>
              </div>
            </div>
          ) :
          (
            <div className="flex my-auto">
              <p className="grow text-theme-text-color text-center my-auto">...</p>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default AttackListItem;
