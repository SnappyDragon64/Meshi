import {useContext, useEffect, useState} from "react";
import {UserContext} from "@/context/UserContext.jsx";
import {fetchList, MediaListStatus} from "@/services/AniListClient.js";
import {formatEntries} from "@/util/DataConverter.js";
import {storeEntries} from "@/services/IndexedDB.js";
import Spinner from "@/components/misc/Spinner.jsx";
import Calculator from "@/components/calculator/Calculator.jsx";

const Status = {
  DEFAULT: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

function CalculatorContainer() {
  const {username, refresh, setRefresh} = useContext(UserContext);
  const [status, setStatus] = useState(Status.DEFAULT);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");

    if (storedUsername) {
      setStatus(Status.SUCCESS);
    }
  }, []);

  useEffect(() => {
    if (username && refresh) {
      setRefresh(false);
      setStatus(Status.LOADING);

      const listPromises = [];
      const mediaListStatuses = Object.values(MediaListStatus);
      for (const mediaListStatus of mediaListStatuses) {
        listPromises.push(fetchList(username, mediaListStatus));
      }

      Promise.all(listPromises).then(async (results) => {
        let entries = [];

        await results.forEach((result, index) => {
          if (result.success) {
            const data = result.data;
            const lists = data.MediaListCollection.lists;

            if (lists.length) {
              const rawEntries = lists[0].entries;
              const formattedEntries = formatEntries(rawEntries, mediaListStatuses[index]);
              entries = [...entries, ...formattedEntries];
            }
          } else {
            setStatus(Status.ERROR);
          }
        });

        storeEntries(entries).then(() => setStatus(Status.SUCCESS));
      });
    }
  }, [refresh, setRefresh, username]);

  const content = {
    [Status.DEFAULT]: <p className="text-theme-text-color text-center my-auto">Enter your AniList username to get
      started</p>,
    [Status.LOADING]: <Spinner/>,
    [Status.SUCCESS]: <Calculator/>,
    [Status.ERROR]: <p className="text-theme-text-color text-center my-auto">Error fetching data from AniList</p>,
  };

  return (
    <div className="grow flex flex-col justify-between min-h-40">
      {content[status]}
    </div>
  );
}

export default CalculatorContainer;
