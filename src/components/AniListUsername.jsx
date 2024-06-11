import  { useState } from "react";
import { Button } from "@/components/ui/button"

const AniListUsername = () => {
    // TODO: Prevent re-rendering of component when username is changed
    // TODO: Disable button if username is empty

    const [username, setUsername] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const logIn = () => {
        if (username) {
            setLoggedIn(true)
            // TODO: Emit signal to fetch user details
        }
    }

    const logOut = () => {
        setLoggedIn(false)
        // TODO: Emit signal to update displayed message
    }

    const refresh = () => {
        // TODO: Emit signal to refresh
    }

    const LoggedIn = () => {
        return (
            <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-theme-text-color">{username}</p>
                <Button variant="link" size="icon" onClick={logOut}>
                    <svg viewBox="0 -960 960 960" className="h-6 w-6 fill-theme-text-color hover:fill-theme-text-color-highlight">
                        <path d="M74-74v-248l537-537q13-14 30.47-20.5Q658.93-886 677-886q17.74 0 34.87 6.5T744-860l117 115q14 14 20 31.48 6 17.49 6 36.47 0 18.05-6.5 35.55Q874-624 860-611L324-74H74Zm605-548 57-55-58-58-57 56 58 57Z"/>
                    </svg>
                </Button>
                <Button variant="link" size="icon" onClick={refresh}>
                    <svg viewBox="0 -960 960 960" className="h-6 w-6 fill-theme-text-color hover:fill-theme-text-color-highlight">
                        <path d="M476-113q-152 0-259.5-107T109-479q0-152 107.5-260T476-847q78.29 0 148.15 31.5Q694-784 745-726v-121h106v350H500v-105h170q-33-50-83.82-78.5Q535.37-709 476-709q-96 0-163.5 66.92Q245-575.17 245-479q0 96.33 67.5 163.17Q380-249 476.34-249q70.72 0 129.69-41T691-398h141q-30 124-129 204.5T476-113Z"/>
                    </svg>
                </Button>
            </div>
        )
    }

    const LoggedOut = () => {
        return (
            <div className="flex items-center gap-2">
                <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="AniList username" className="text-theme-text-color bg-theme-color-secondary focus:outline-0 p-1 rounded-lg "/>
                <Button variant="link" size="icon" onClick={logIn}>
                    <svg viewBox="0 -960 960 960" className="h-6 w-6 fill-theme-text-color hover:fill-theme-text-color-highlight">
                        <path d="M81-121v-250l375-111L81-592v-250l848 361L81-121Z"/>
                    </svg>
                </Button>
            </div>
        )
    }

    if (loggedIn) {
        return (
            <LoggedIn/>
        )
    } else {
        return (
            <LoggedOut/>
        )
    }
}

export default AniListUsername