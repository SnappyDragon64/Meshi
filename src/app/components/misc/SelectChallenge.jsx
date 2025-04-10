import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/shadcn/Select.jsx";
import {useContext} from "react";
import {ChallengeContext} from "@/context/ChallengeContext.jsx";
import {getAllChallenges, getChallenge} from "@/registry/Challenges.js";

const SelectChallenge = () => {
  const {challenge, setChallenge} = useContext(ChallengeContext)

  const setChallengeId = (id) => {
    const challengeById = getChallenge(id)
    setChallenge(challengeById)
  };

  return (
    <Select value={challenge.id} onValueChange={setChallengeId}>
      <SelectTrigger className="min-w-28">
        <SelectValue/>
      </SelectTrigger>
      <SelectContent>
        {
          getAllChallenges().map((challenge, index) => {
            return (
              <SelectItem key={index} value={challenge.id}>
                <span className="font-bold">{challenge.name}</span>
              </SelectItem>
            );
          })
        }
      </SelectContent>
    </Select>
  )
}

export default SelectChallenge
