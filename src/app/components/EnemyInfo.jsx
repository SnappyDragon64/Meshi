const EnemyInfo = ({name, hp, weaknesses, resistances, image}) => {
  return (
    <div className="w-full grid rounded-xl overflow-hidden">
      <div className="col-start-1 row-start-1 z-0">
        <div
          className="bg-theme-color-primary w-full h-full"/>
      </div>
      <div className="col-start-1 row-start-1 flex flex-row-reverse z-10">
        <img src={image} className="object-cover w-1/2"/>
      </div>
      <div className="col-start-1 row-start-1 z-20">
        <div
            className="bg-gradient-to-t from-theme-color-tertiary via-theme-color-tertiary via-20% to-transparent opacity-80 w-full h-full"/>
      </div>
      <div className="col-start-1 row-start-1 z-30 flex">
        <div className="bg-theme-color-highlight w-2 h-full"/>
        <div className="p-4">
          <p className="text-xl font-bold text-theme-text-color">{name}</p>
          <p className="text-lg font-bold text-theme-text-color">HP: {hp}</p>
          <p className="text-lg font-bold text-theme-text-color">Weakness:</p>
          <p className="text-lg text-theme-text-color">{weaknesses}</p>
          <p className="text-lg font-bold text-theme-text-color">Resistance:</p>
          <p className="text-lg text-theme-text-color">{resistances}</p>
        </div>
      </div>
    </div>
  );
};

export default EnemyInfo;
