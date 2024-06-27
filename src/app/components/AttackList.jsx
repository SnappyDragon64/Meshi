import AttackListItem from "@/components/AttackListItem.jsx";

const AttackList = ({animeList, setAnimeList, date, language, results}) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {
        animeList.map((val, index) => {
          return (
            <AttackListItem key={index} animeList={animeList} setAnimeList={setAnimeList} index={index} date={date} language={language} results={results}/>
          )
        })
      }
    </div>
  )
}

export default AttackList