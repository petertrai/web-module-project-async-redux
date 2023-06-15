import axios from 'axios'

export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'
export const FETCH_START = 'FETCH_START'

export const getGifs = (searchTerm) => {
    return (dispatch) => {
    dispatch(fetchStart())
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=r0IZOEjRwBLcp6GkmpXGk8r0CAbmM16h&q=${searchTerm}`)
    .then(res => {
        dispatch(fetchSuccess(res.data.data));
    })
    .catch(err => {
        dispatch(fetchFail(err.message))
    })
    
}}

export const fetchStart = () => {
    return ({ type: FETCH_START })
}

export const fetchSuccess = (gifs) => {
    return ({ type: FETCH_SUCCESS, payload: gifs})
}

export const fetchFail = (err) => {
    return ({ type: FETCH_FAIL, payload: err})
}