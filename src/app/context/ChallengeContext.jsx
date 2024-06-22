import {createContext, useEffect, useState} from 'react';
import {getChallenge} from "@/registry/Challenges.js";

export const ChallengeContext = createContext();

export const ChallengeProvider = ({children}) => {
  const [challenge, setChallenge] = useState({
    name: "",
    enemies: [],
    waves: [],
  });

  useEffect(() => {
    const loadDefaultChallenge = async () => {
      const trainingGroundsChallenge = await getChallenge("training_grounds");
      setChallenge(trainingGroundsChallenge);

    };

    loadDefaultChallenge();
  }, []);

  return (
    <ChallengeContext.Provider value={{challenge, setChallenge}}>
      {children}
    </ChallengeContext.Provider>
  );
};
