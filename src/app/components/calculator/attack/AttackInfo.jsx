const AttackInfo = ({anime, results, index}) => {
  const damageDealt = results.damageDealt[index];
  const attackTarget = results.attackTargets[index];
  const enemyRemainingHP = results.attackTargetHPList[index];
  const enemyName = results.enemyNames[attackTarget];
  const enemyMaxHP = results.enemyMaxHPList[attackTarget];

  const getAllGenres = () => {
    return anime.genres.join(", ");
  }

  const getTruncatedGenres = () => {
    const genres = anime.genres;
    const firstThree = genres.slice(0, 3);

    if (genres.length > 3) {
      firstThree.push("...");
    }

    return firstThree.join(", ");
  }

  return damageDealt && anime ?
    (
      <div className="grid gap-y-1 p-1 md:p-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex-1 flex-col hidden md:flex">
          <p className="text-theme-text-color font-bold text-sm">Episodes</p>
          <p className="text-theme-text-color text-sm">{anime.episodes}</p>
        </div>
        <div className="flex-1 flex-col hidden lg:flex">
          <p className="text-theme-text-color font-bold text-sm">Format</p>
          <p className="text-theme-text-color text-sm">{anime.format}</p>
        </div>
        <div className="flex-1 flex flex-col">
          <p className="text-theme-text-color font-bold text-sm">Damage</p>
          <p className="text-theme-text-color text-sm">{damageDealt}</p>
        </div>
        <div className="flex-1 flex-col hidden md:flex">
          <p className="text-theme-text-color font-bold text-sm">Episode Duration</p>
          <p className="text-theme-text-color text-sm">{anime.duration}</p>
        </div>
        <div className="flex-1 flex-col hidden lg:flex">
          <p className="text-theme-text-color font-bold text-sm">Genres</p>
          <p className="text-theme-text-color text-sm truncate" title={getAllGenres()}>{getTruncatedGenres()}</p>
        </div>
        <div className="flex-1 flex flex-col">
          <p className="text-theme-text-color font-bold text-sm">{enemyName}</p>
          <p className="text-theme-text-color text-sm">{enemyRemainingHP}/{enemyMaxHP}</p>
        </div>
      </div>
    ) :
    (
      <div className="grid">
        <p className="grow text-theme-text-color text-center text-xl">|˶˙ᵕ˙ )ﾉﾞ</p>
      </div>
    )
}

export default AttackInfo