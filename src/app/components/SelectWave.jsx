import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/Select";
import {useContext} from "react";
import {ChallengeContext} from "@/context/ChallengeContext.jsx";

const SelectWave = ({selectedWave, onWaveChange}) => {
  const {challenge} = useContext(ChallengeContext);

  return (
    <Select value={selectedWave} onValueChange={onWaveChange}>
      <SelectTrigger className="w-[120px]">
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