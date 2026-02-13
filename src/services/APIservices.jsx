export const getCharacters = async (dispatch) => {
    const response = await fetch(
        `https://thesimpsonsapi.com/api/characters`)
    if (!response.ok) {
        return
    }
    const data = await response.json()
    dispatch({type: "set_characters", payload: data.results})
    console.log(data.results);
    
}

export const getLocations = async (dispatch) => {
    const response = await fetch(
        `https://thesimpsonsapi.com/api/locations`)
    if (!response.ok) {
        return
    }
    const data = await response.json()
    dispatch({type: "set_locations", payload: data.results})
    console.log(data.results);
    
}