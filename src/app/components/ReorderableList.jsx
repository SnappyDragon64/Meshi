import ReorderableListItem from "@/components/ReorderableListItem.jsx";

const ReorderableList = ({animeList, setAnimeList, date}) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {
        animeList.map((val, index) => {
          return (
            <ReorderableListItem key={index} animeList={animeList} setAnimeList={setAnimeList} index={index} date={date}/>
          )
        })
      }
    </div>
  )
}

export default ReorderableList