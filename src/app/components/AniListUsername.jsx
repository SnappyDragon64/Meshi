import {useContext, useEffect, useState} from "react"
import AniListUsernameDisplay from "@/components/AniListUsernameDisplay.jsx";
import AniListUsernameInput from "@/components/AniListUsernameInput.jsx";
import {UsernameContext} from "@/context/UsernameContext.jsx";
import {RefreshContext} from "@/context/RefreshContext.jsx";

const AniListUsername = () => {
  const {username, setUsername} = useContext(UsernameContext);
  const {refresh, setRefresh} = useContext(RefreshContext);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");

    if (storedUsername) {
      setUsername(storedUsername);
      setSubmitted(true);
    }
  }, []);

  const handleSubmit = (name) => {
    localStorage.setItem("username", name);
    setUsername(name);
    handleRefresh();
    setSubmitted(true);
  };

  const handleEdit = () => {
    localStorage.setItem("username", "");
    setSubmitted(false);
  };

  const handleRefresh = () => {
    setRefresh(!refresh);
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