import {createContext, useEffect, useState} from 'react';
import {getChallenge} from "@/registry/Challenges.js";
import Spinner from "@/components/misc/Spinner.jsx";

export const ChallengeContext = createContext();

export const ChallengeProvider = ({children}) => {
  const [challenge, setChallenge] = useState({
    name: "",
    enemies: [],
    waves: [],
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const loadDefaultChallenge = async () => {
      let challengeId = localStorage.getItem("challenge");
      challengeId = challengeId ? challengeId : "training_grounds"
      const defaultChallenge = getChallenge(challengeId);
      setChallenge(defaultChallenge);
    };

    loadDefaultChallenge().then(() => setLoading(false));
  }, []);

  useEffect(() => {
    localStorage.setItem("challenge", challenge.id)
  }, [challenge]);

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    <ChallengeContext.Provider value={{challenge, setChallenge}}>
      {children}
    </ChallengeContext.Provider>
  );
};
