import { useContext, useState } from "react"
import AniListUsernameDisplay from "@/components/AniListUsernameDisplay.jsx";
import AniListUsernameInput from "@/components/AniListUsernameInput.jsx";
import { AppContext } from "@/lib/Context.jsx"

const AniListUsername = () => {
  const { handleRefresh } = useContext(AppContext);
  const { username, setUsername } = useContext(AppContext);
  const [ submitted, setSubmitted ] = useState(false);

  const handleSubmit = (name) => {
    setUsername(name);
    setSubmitted(true);
  };

  const handleEdit = () => {
    setSubmitted(false);
  };

  return (
      <div>
        {!submitted ? (
            <AniListUsernameInput username={ username } onSubmit={ handleSubmit }/>
        ) : (
            <AniListUsernameDisplay username={ username } onEdit={ handleEdit } onRefresh={ handleRefresh }/>
        )}
      </div>
  );
};

export default AniListUsername;