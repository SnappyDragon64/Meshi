const EnemyInfo = ({enemy}) => {
  const generateText = (items, defaultText) => {
    return items && items.length > 0
      ? items.map(item => item.text).join(", ")
      : defaultText;
  };

  return (
    <div className="w-full grid rounded-xl overflow-hidden">
      <div className="col-start-1 row-start-1 z-0">
        <div className="bg-theme-color-primary w-full h-full"/>
      </div>
      <div className="col-start-1 row-start-1 flex flex-row-reverse z-10">
        <img src={enemy.image} className="object-cover h-44"/>
      </div>
      <div className="col-start-1 row-start-1 z-20">
        <div className="bg-gradient-to-t from-theme-color-tertiary via-theme-color-tertiary via-20% to-transparent opacity-80 w-full h-full"/>
      </div>
      <div className="col-start-1 row-start-1 z-30 flex">
        <div className="bg-theme-color-highlight w-2 h-full"/>
        <div className="px-4 py-2 flex flex-col gap-1">
          <p className="font-bold text-theme-text-color text-lg">{enemy.name}</p>
          <div className="flex flex-col justify-between gap-1">
            <div>
              <p className="font-bold text-theme-text-color text-sm">HP</p>
              <p className="text-theme-text-color text-sm">{enemy.hp}</p>
            </div>
            <div>
              <p className="font-bold text-theme-text-color text-sm">Weakness</p>
              <p className="text-theme-text-color text-sm">{generateText(enemy.weaknesses, "No Weaknesses")}</p>
            </div>
            <div>
              <p className="font-bold text-theme-text-color text-sm">Resistance</p>
              <p className="text-theme-text-color text-sm">{generateText(enemy.resistances, "No Resistances")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnemyInfo;
