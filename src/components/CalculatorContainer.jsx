import { useContext, useEffect } from "react";
import { AppContext } from "@/lib/Context.jsx";

async function postAnilistQuery(query, variables) {
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

        console.log(json.data)
        return json.data;
    } catch (e) {
        console.log(e.message);
    }
}

function CalculatorWindow() {
    const {username, refresh} = useContext(AppContext);

    useEffect(() => {
        if (username) {
            console.log(username)
        }

        console.log(refresh)
    }, [username, refresh]);

    const query = `
        query ($username: String, $type: MediaType) {
            MediaListCollection(userName: $username, type: $type) {
                lists {
                    entries {
                        status
                        media {
                            isAdult
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
    };

    postAnilistQuery(query, variables);

    return (
        <div className="grow flex flex-col justify-center items-center p-8">
            <p className="text-theme-text-color">Enter your AniList username to get started</p>
        </div>
    );
}

export default CalculatorWindow;
