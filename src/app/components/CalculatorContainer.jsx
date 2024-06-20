import {useContext, useEffect, useState} from "react";
import {AppContext} from "@/context/AppContext.jsx";
import fetchList from "@/services/AniListClient.js";
import formatEntries from "@/util/DataConverter.js";
import {storeEntries} from "@/services/IndexedDB.js";
import ReorderableList from "@/components/ReorderableList.jsx";
import Spinner from "@/components/Spinner.jsx";

const Status = {
  DEFAULT: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

function CalculatorWindow() {
  const {username, refresh, setRefresh} = useContext(AppContext);
  const [status, setStatus] = useState(Status.DEFAULT);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");

    if (storedUsername) {
      setStatus(Status.SUCCESS);
    }
  }, []);

  useEffect(() => {
    if (username && refresh) {
      setRefresh(false)
      setStatus(Status.LOADING);

      fetchList(username)
        .then(result => {
          if (result.success) {
            const data = result.data
            const entries = data.MediaListCollection.lists[0].entries
            const convertedEntries = formatEntries(entries)
            storeEntries(convertedEntries)
            setStatus(Status.SUCCESS)
          } else {
            setStatus(Status.ERROR)
          }
        });
    }
  }, [refresh]);

  const content = {
    [Status.DEFAULT]: <p className="text-theme-text-color">Enter your AniList username to get started</p>,
    [Status.LOADING]: <Spinner/>,
    [Status.SUCCESS]: <ReorderableList/>,
    [Status.ERROR]: <p className="text-theme-text-color">Error fetching data from AniList</p>,
  };

  return (
    <div className="grow flex flex-col justify-center items-center p-8">
      {content[status]}
    </div>
  );
}

export default CalculatorWindow;