import {useContext, useEffect, useState} from "react"
import AniListUsernameDisplay from "@/components/AniListUsernameDisplay.jsx";
import AniListUsernameInput from "@/components/AniListUsernameInput.jsx";
import {AppContext} from "@/context/AppContext.jsx"

const AniListUsername = () => {
    const {username, setUsername, setRefresh} = useContext(AppContext);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");

        if (storedUsername) {
            setUsername(storedUsername);
            setSubmitted(true);
        }
    }, []);

    const handleSubmit = (name) => {
        setUsername(name);
        localStorage.setItem("username", name);
        setRefresh(true);
        setSubmitted(true);
    };

    const handleEdit = () => {
        setSubmitted(false);
    };

    const handleRefresh = () => {
        setRefresh(true);
    };

    return (
        <div>
            {!submitted ? (
                <AniListUsernameInput username={username} onSubmit={handleSubmit}/>
            ) : (
                <AniListUsernameDisplay username={username} onEdit={handleEdit} onRefresh={handleRefresh}/>
            )}
        </div>
    );
};

export default AniListUsername;