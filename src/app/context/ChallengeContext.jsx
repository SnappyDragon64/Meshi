import { createContext, useEffect, useState } from 'react';
import { getChallenge } from "@/registry/Challenges.js";
import Spinner from "@/components/misc/Spinner.jsx";

export const ChallengeContext = createContext();

export const ChallengeProvider = ({ children }) => {
  const [challenge, setChallenge] = useState({
    name: "",
    enemies: [],
    waves: [],
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const loadDefaultChallenge = async () => {
      const trainingGroundsChallenge = await getChallenge("training_grounds");
      setChallenge(trainingGroundsChallenge);
    };

    loadDefaultChallenge().then(() => setLoading(false));
  }, []);

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    <ChallengeContext.Provider value={{ challenge, setChallenge }}>
      {children}
    </ChallengeContext.Provider>
  );
};
