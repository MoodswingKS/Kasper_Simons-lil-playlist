import * as actionTypes from './item-types'



const INITIAL_STATE = {
    list: [
        { id: 1, name: 'Numb', artist: 'Linkin Park', genre: 'Rock', rating: 4 },
        { id: 2, name: 'Break On Through', artist: 'The Doors', genre: 'Rock', rating: 5 },
        { id: 3, name: 'Slam', artist: 'Pendulum', genre: 'DnB', rating: 3 },
        { id: 4, name: 'Howling (Ame Remix)', artist: 'Frank Wiedemann', genre: 'Techno', rating: 5 }
    ]
}

const itemReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            // Get the items data from array
            console.log('we are in ADD_ITEM')
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case actionTypes.FILTER_LIST:
            console.log(action.payload.listName)
            if (action.payload.listName === 'name') {
                const newList = state.list.sort((a, b) => a.name.localeCompare(b.name))
                return {
                    list: [...newList]
                }
            } else if (action.payload.listName === 'artist') {
                const newList = state.list.sort((a, b) => a.artist.localeCompare(b.artist))
                return {
                    list: [...newList]
                }
            } else if (action.payload.listName === 'genre') {
                const newList = state.list.sort((a, b) => a.genre.localeCompare(b.genre))
                return {
                    list: [...newList]
                }
            } else if (action.payload.listName === 'rating') {
                const newList = state.list.sort((a, b) => b.rating - a.rating)
                return {
                    list: [...newList]
                }
            } return state     
        default:
            return state
    }
}

export default itemReducer
