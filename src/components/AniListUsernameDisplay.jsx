import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { Pencil, RotateCw } from "lucide-react";

const AniListUsernameDisplay = ({ username, onEdit, onRefresh }) => {
  return (
    <div className="flex items-center gap-2">
      <p className="text-sm font-bold text-theme-text-color">{username}</p>
      <Button variant="link" size="icon" onClick={onEdit}>
        <Pencil className="h-6 w-6 stroke-theme-text-color hover:stroke-theme-text-color-highlight" />
      </Button>
      <Button variant="link" size="icon" onClick={onRefresh}>
        <RotateCw className="h-6 w-6 stroke-theme-text-color hover:stroke-theme-text-color-highlight" />
      </Button>
    </div>
  );
};

export default AniListUsernameDisplay;
