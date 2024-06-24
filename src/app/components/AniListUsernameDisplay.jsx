import {Button} from "@/components/Button.jsx";
import {Pencil, RotateCw} from "lucide-react";

const AniListUsernameDisplay = ({username, onEdit, onRefresh}) => {
  return (
    <div className="flex items-center gap-2">
      <p className="text-md font-bold text-theme-text-color">{username}</p>
      <Button variant="link" size="icon" onClick={onEdit} className="h-4 w-4">
        <Pencil className="stroke-theme-text-color hover:stroke-theme-text-color-highlight"/>
      </Button>
      <Button variant="link" size="icon" onClick={onRefresh} className="h-4 w-4">
        <RotateCw className="stroke-theme-text-color hover:stroke-theme-text-color-highlight"/>
      </Button>
    </div>
  )
    ;
};

export default AniListUsernameDisplay;
