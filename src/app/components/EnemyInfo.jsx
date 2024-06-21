const EnemyInfo = ({name, hp, weaknesses, resistances, image}) => {
  return (
    <div className="w-full grid rounded-lg overflow-hidden">
      <div className="col-start-1 row-start-1 flex flex-row-reverse z-0">
        <img src={image} className="object-cover w-1/2"/>
      </div>
      <div className="col-start-1 row-start-1 z-10">
        <div
          className="bg-gradient-to-t from-theme-color-tertiary via-theme-color-dark to-theme-color-dark opacity-80 w-full h-full"/>
      </div>
      <div className="col-start-1 row-start-1 z-20 flex">
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
