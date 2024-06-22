import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/Select";
import {useContext} from "react";
import {ChallengeContext} from "@/context/ChallengeContext.jsx";

const SelectWave = () => {
  const {challenge} = useContext(ChallengeContext);

  return (
    <Select defaultValue={0}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme"/>
      </SelectTrigger>
      <SelectContent>
        {
          challenge.waves.map((wave, index) => {
            return (
              <SelectItem key={index} value={index}>Wave {index + 1}</SelectItem>
            );
          })
        }
      </SelectContent>
    </Select>
  )
}

export default SelectWave