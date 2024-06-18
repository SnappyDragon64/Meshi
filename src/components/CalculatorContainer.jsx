import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/AppContext.jsx";
import fetchList from "@/services/AniListClient.jsx";
import formatEntries from "@/util/DataConverter.jsx";
import {storeEntries} from "@/services/IndexedDB.jsx";

const FetchStatus = {
    DEFAULT: "idle",
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error",
};

function CalculatorWindow() {
    const { username, refresh, setRefresh } = useContext(AppContext);
    const [ fetchStatus, setFetchStatus ] = useState(FetchStatus.DEFAULT);

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");

        if (storedUsername) {
            setFetchStatus(FetchStatus.SUCCESS);
        }
    }, []);

    useEffect(() => {
        if (username && refresh) {
            setRefresh(false)
            setFetchStatus(FetchStatus.LOADING);

            fetchList(username)
                .then(result => {
                    if (result.success) {
                        const data = result.data
                        const entries = data.MediaListCollection.lists[0].entries
                        const convertedEntries = formatEntries(entries)
                        storeEntries(convertedEntries)
                        setFetchStatus(FetchStatus.SUCCESS)
                    } else {
                        setFetchStatus(FetchStatus.ERROR)
                    }
            });
        }
    }, [refresh]);

    const content = {
        [FetchStatus.DEFAULT]: <p className="text-theme-text-color">Enter your AniList username to get started</p>,
        [FetchStatus.LOADING]: <p className="text-theme-text-color animate-spin">( ˘▽˘)っ♨</p>,
        [FetchStatus.SUCCESS]: <div/>,
        [FetchStatus.ERROR]: <p className="text-theme-text-color">Error fetching data from AniList</p>,
    };

    return (
        <div className="grow flex flex-col justify-center items-center p-8">
            { content[fetchStatus] }
        </div>
    );
}

export default CalculatorWindow;
