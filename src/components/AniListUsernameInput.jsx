import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button.jsx";
import { LogIn } from "lucide-react";
import { cn } from "@/lib/utils.js";

const AniListUsernameInput = ({ username, onSubmit }) => {
    const [ name, setName ] = useState("");

    useEffect(() => {
        setName(username);
    }, [ username ]);

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(name);
    };

    return (
        <form onSubmit={ handleSubmit }>
            <div className="flex items-center gap-2">
                <input type="text" value={ name } onChange={ handleChange } placeholder="AniList Username" className="text-sm text-theme-text-color bg-theme-color-secondary focus:outline-0 p-1 rounded-lg"
                />
                <Button variant="link" size="icon" type="submit" disabled={ !name } className={ !name ? "cursor-not-allowed opacity-50" : "" }>
                    <LogIn className={ cn("h-6 w-6", !name ? "stroke-theme-text-color" : "stroke-theme-text-color hover:stroke-theme-text-color-highlight") } />
                </Button>
            </div>
        </form>
    );
};

export default AniListUsernameInput;
