async function postAniListQuery(query, variables) {
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

    if (response.ok) {
      return {
        success: true,
        data: json.data,
      }
    } else {
      console.error("Error:", json.errors ? json.errors[0].message : "Unknown error");
      return {
        success: false,
        error: json.errors ? json.errors[0].message : "Unknown error",
      };
    }
  } catch (e) {
    console.error("Error:", e.message);
    return {
      success: false,
      error: e.message,
    };
  }
}

export async function fetchList(username, status) {
  const query = `
            query ($username: String, $type: MediaType, $status: MediaListStatus, $forceSingleCompletedList: Boolean) {
              MediaListCollection(userName: $username, type: $type, status: $status, forceSingleCompletedList: $forceSingleCompletedList) {
                lists {
                  entries {
                    media {
                      id
                      title {
                        romaji
                        english
                      }
                      episodes
                      duration
                      format
                      genres
                      coverImage {
                        medium
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
    status: status,
    forceSingleCompletedList: true,
  };

  return await postAniListQuery(query, variables);
}

export const MediaListStatus = {
  CURRENT: "CURRENT",
  PLANNING: "PLANNING",
  COMPLETED: "COMPLETED",
  DROPPED: "DROPPED",
  PAUSED: "PAUSED",
  REPEATING: "REPEATING",
};