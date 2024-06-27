import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/shadcn/Select.jsx";
import {useContext} from "react";
import {ChallengeContext} from "@/context/ChallengeContext.jsx";

const SelectWave = ({selectedWave, onWaveChange}) => {
  const {challenge} = useContext(ChallengeContext);

  return (
    <Select value={selectedWave} onValueChange={onWaveChange}>
      <SelectTrigger className="min-w-28">
        <SelectValue/>
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