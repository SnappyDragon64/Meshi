import SelectWave from "@/components/SelectWave.jsx";
import {Button} from "@/components/Button.jsx";
import ReorderableList from "@/components/ReorderableList.jsx";

const Calculator = () => {
  return (
    <div className="grow flex flex-col pt-6 gap-6">
      <div className="flex justify-between">
        <SelectWave/>
        <Button>Copy</Button>
      </div>
      <div className="flex flex-col items-center">
        <ReorderableList/>
      </div>
    </div>
  );
};

export default Calculator;