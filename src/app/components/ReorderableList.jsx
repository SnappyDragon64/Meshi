import ReorderableListItem from "@/components/ReorderableListItem.jsx";
import {useEffect} from "react";

const ReorderableList = ({animeMap, setAnimeMap}) => {

  return (
    <div className="w-full flex flex-col gap-4">
      <ReorderableListItem animeMap={animeMap} index={0}/>
      <ReorderableListItem animeMap={animeMap} index={1}/>
    </div>
  )
}

export default ReorderableList