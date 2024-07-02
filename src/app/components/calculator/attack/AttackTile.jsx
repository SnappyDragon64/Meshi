import {Button} from "@/components/shadcn/Button.jsx";
import {cn} from "@/util/Utils.js";
import {ChevronDown, ChevronUp} from "lucide-react";

const AttackTile = ({anime, index, onMoveUp, moveUpDisabled, onMoveDown, moveDownDisabled}) => {
  return (
    <div
      className={`grid min-w-24 w-24 h-36 ${anime ? '' : 'bg-theme-color-tertiary'}`}
      style={anime ? {backgroundColor: anime.imageAvgColor} : {}}
    >
      <div className="col-start-1 row-start-1 z-20">
        <div className="h-full flex flex-col items-center justify-center">
          <div className="w-full gap-2 py-1 bg-theme-color-primary bg-opacity-80">
            <p className="text-6xl text-theme-text-color-highlight text-center">{index + 1}</p>
            <div className="flex gap-2 justify-center">
              <Button variant="link" size="icon" onClick={onMoveUp} disabled={moveUpDisabled()}
                      className={cn("h-6 w-6", moveUpDisabled() ? "cursor-not-allowed opacity-10" : "")}>
                <ChevronUp className="stroke-theme-text-color hover:stroke-theme-text-color-highlight"/>
              </Button>
              <Button variant="link" size="icon" onClick={onMoveDown} disabled={moveDownDisabled()}
                      className={cn("h-6 w-6", moveDownDisabled() ? "cursor-not-allowed opacity-10" : "")}>
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
  )
}

export default AttackTile