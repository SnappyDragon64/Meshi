import {useContext, useEffect, useState} from "react";
import {UserContext} from "@/context/UserContext.jsx";
import {fetchList} from "@/services/AniListClient.js";
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

      fetchList(username)
        .then(result => {
          if (result.success) {
            const data = result.data;
            console.log(data)
            const lists = data.MediaListCollection.lists;

            const entries = lists.flatMap((list, index) => {
              const status = ["completed", "planning", "watching"][index];
              return formatEntries(list.entries, status);
            });

            storeEntries(entries).then(() => setStatus(Status.SUCCESS));
          } else {
            setStatus(Status.ERROR);
          }
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
    <div className="grow flex flex-col justify-between">
      {content[status]}
    </div>
  );
}

export default CalculatorContainer;
