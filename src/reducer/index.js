import data from "../data/gifsdata"

const initialState = {
    data: data,
    loading: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default reducer