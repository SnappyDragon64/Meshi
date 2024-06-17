import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/lib/Context.jsx";
import FetchStatus from "@/lib/FetchStatus.jsx";

function CalculatorWindow() {
    const { username, refresh, setRefresh } = useContext(AppContext);
    const [ fetchStatus, setFetchStatus ] = useState(FetchStatus.DEFAULT);

    useEffect(() => {
        if (username && refresh) {
            setRefresh(false)
            setFetchStatus(FetchStatus.LOADING);

            fetchList().then(([ responseCode, jsonData ]) => {
                if (responseCode === 200) {
                    setFetchStatus(FetchStatus.SUCCESS)
                } else {
                    setFetchStatus(FetchStatus.ERROR)
                }
            });
        }
    }, [username, refresh]);

    const fetchList = async () => {
        const query = `
            query ($username: String, $type: MediaType, $status: MediaListStatus) {
                MediaListCollection(userName: $username, type: $type, status: $status) {
                    lists {
                        entries {
                            media {
                                id
                                title {
                                    romaji
                                    english
                                }
                            }
                            startedAt {
                                year
                                month
                                day
                            }
                            completedAt {
                                year
                                month
                                day
                            }
                        }
                    }
                }
            }
        `;

        const variables = {
            username: username,
            type: "ANIME",
            status: "COMPLETED",
        };

        const url = "https://graphql.anilist.co";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                query: query,
                variables: variables,
            }),
        };

        try {
            const response = await fetch(url, options);
            const json = await response.json();
            return [response.status, json.data];
        } catch (e) {
            console.log(e.message);
            setFetchStatus(FetchStatus.ERROR)
        }
    }

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
