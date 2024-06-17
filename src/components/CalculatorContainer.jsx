import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/lib/Context.jsx";
import fetchList from "@/lib/AniListClient.jsx";

const FetchStatus = {
    DEFAULT: 'idle',
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
};

function CalculatorWindow() {
    const { username, refresh, setRefresh } = useContext(AppContext);
    const [ fetchStatus, setFetchStatus ] = useState(FetchStatus.DEFAULT);

    useEffect(() => {
        if (username && refresh) {
            setRefresh(false)
            setFetchStatus(FetchStatus.LOADING);

            fetchList(username)
                .then(result => {
                    if (result.success) {
                        setFetchStatus(FetchStatus.SUCCESS)
                    } else {
                        setFetchStatus(FetchStatus.ERROR)
                    }
            });
        }
    }, [username, refresh]);

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
