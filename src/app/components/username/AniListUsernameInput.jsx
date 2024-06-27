import {useEffect, useState} from "react";
import {Button} from "@/components/shadcn/Button.jsx";
import {LogIn} from "lucide-react";
import {cn} from "@/util/Utils.js";

const AniListUsernameInput = ({username, onSubmit}) => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(username);
  }, [username]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-2">
        <input type="text" value={name} onChange={handleChange} placeholder="AniList Username"
               className="text-md text-theme-text-color bg-theme-color-secondary focus:outline-0 p-1 rounded-lg"
        />
        <Button variant="link" size="icon" type="submit" disabled={!name}
                className={cn("h-4 w-4", !name ? "cursor-not-allowed opacity-10" : "")}>
          <LogIn
            className={!name ? "stroke-theme-text-color" : "stroke-theme-text-color hover:stroke-theme-text-color-highlight"}/>
        </Button>
      </div>
    </form>
  );
};

export default AniListUsernameInput;
