import {getNumberWithOrdinal} from "@/util/DataConverter.js";

const WaveInfo = ({wave, index}) => {
  return (
    <div className="w-full grid rounded-xl overflow-hidden">
      <div className="col-start-1 row-start-1 z-0">
        <div
          className="bg-theme-color-primary w-full h-full"/>
      </div>
      <div className="col-start-1 row-start-1 z-20">
        <div
          className="bg-gradient-to-t from-theme-color-tertiary via-theme-color-tertiary via-20% to-transparent opacity-80 w-full h-full"/>
      </div>
      <div className="col-start-1 row-start-1 z-30 flex">
        <div className="bg-theme-color-highlight w-2 h-full"/>
        <div className="p-4">
          <p className="text-xl font-bold text-theme-text-color">{getNumberWithOrdinal(index + 1)} wave</p>
          {
            wave.map((enemy, index) => {
              return (
                <p key={index} className="text-lg text-theme-text-color">&#8226; {enemy.name}</p>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default WaveInfo;
