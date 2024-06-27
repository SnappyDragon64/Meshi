import {useContext, useEffect, useState} from "react"
import AniListUsernameDisplay from "@/components/AniListUsernameDisplay.jsx";
import AniListUsernameInput from "@/components/AniListUsernameInput.jsx";
import {UserContext} from "@/context/UserContext.jsx"

const AniListUsername = () => {
  const {username, setUsername, setRefresh} = useContext(UserContext);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (username) {
      setSubmitted(true);
    }
  }, []);

  const handleSubmit = (name) => {
    setUsername(name);
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