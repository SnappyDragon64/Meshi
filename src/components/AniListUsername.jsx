import React, { useState } from "react"
import AniListUsernameDisplay from "@/components/AniListUsernameDisplay.jsx";
import AniListUsernameInput from "@/components/AniListUsernameInput.jsx";

const AniListUsername = () => {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (name) => {
    setUsername(name);
    setSubmitted(true);
  };

  const handleEdit = () => {
    setSubmitted(false);
  };

  const handleRefresh = () => {

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