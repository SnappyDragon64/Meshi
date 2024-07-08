import {getNumberWithOrdinal} from "@/util/DataConverter.js";

const WaveInfo = ({wave, index}) => {
  return (
    <div className="w-full grid rounded-xl overflow-hidden">
      <div className="col-start-1 row-start-1 z-0">
        <div
          className="bg-theme-color-primary w-full h-full"/>
      </div>
      <div className="col-start-1 row-start-1 z-20">
        <div className="bg-gradient-to-t from-theme-color-tertiary via-theme-color-tertiary via-20% to-transparent opacity-80 w-full h-full"/>
      </div>
      <div className="col-start-1 row-start-1 z-30 flex">
        <div className="bg-theme-color-highlight w-2 h-full"/>
        <div className="px-4 py-2 flex flex-col gap-1">
          <p className="font-bold text-theme-text-color text-lg">{getNumberWithOrdinal(index + 1)} wave</p>
          <ul>
            {
              wave.map((enemy, index) => {
                return (
                  <li key={index} className="text-theme-text-color text-sm">{enemy.name}</li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WaveInfo;
