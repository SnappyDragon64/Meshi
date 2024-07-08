import {AnimeCombobox} from "@/components/calculator/attack/AnimeCombobox.jsx";
import AttackTile from "@/components/calculator/attack/AttackTile.jsx";
import AttackInfo from "@/components/calculator/attack/AttackInfo.jsx";
import {TrashIcon} from "lucide-react";
import {Button} from "@/components/shadcn/Button.jsx";

const AttackListItem = ({searchResults, animeList, setAnimeList, index, language, results}) => {
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

  return (
    <div className="flex h-36 rounded-lg overflow-hidden group">
      <AttackTile anime={getAnime()} index={index} onMoveUp={onMoveUp} moveUpDisabled={moveUpDisabled} onMoveDown={onMoveDown} moveDownDisabled={moveDownDisabled}/>
      <div className="grow relative flex flex-col w-0 bg-theme-color-primary p-2">
        <AnimeCombobox searchResults={searchResults} getItemAnime={getAnime} setItemAnime={setAnime} language={language}/>
        <AttackInfo anime={getAnime()} results={results} index={index}/>
        <div className="transition-opacity opacity-0 group-hover:opacity-100">
          <Button variant="destructive" size="icon" onClick={deleteItem} className="h-6 w-6 absolute bottom-2 right-2 z-10">
            <TrashIcon className="h-4 w-4 stroke-theme-text-color hover:stroke-theme-text-color-highlight"/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AttackListItem;
