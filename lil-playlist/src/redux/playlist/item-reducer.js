import * as actionTypes from './item-types'

const INITIAL_STATE = {
    item: [], // {id, name, artist, genre, rating}
    list: [
        { id: 1, name: 'Numb', artist: 'Linkin Park', genre: 'Rock', rating: 4 },
        { id: 2, name: 'Slam', artist: 'Pendulum', genre: 'DnB', rating: 3 },
        { id: 3, name: 'Trip to Valhalla', artist: 'dr. Peacock', genre: 'French-core', rating: 5 }
    ], // {item, item, item, item}
    currentItem: null
}

const itemReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_ITEM:
            // Get the items data from array
            const listItem = state.list.find(song => song.name === action.payload.name ? true : false)
            
            return {
                ...state,
                list: listItem 
                    ? state.list.map((item) => 
                        item.name === action.payload.name 
                        ? {...item, rating: item.rating} 
                        : item)
                    : [...state.list, { ...listItem, rating: listItem.rating }]
            }
        // case actionTypes.DELETE_ITEM:
        //     return {
        //         ...state,
        //         list: state.list.filter((item) => item.id !== action.payload.id)
        //     }
        case actionTypes.MAKE_ITEM:
            return {}
        case actionTypes.SHOW_ITEM:
            return {}
        default:
            return state
    }
}

export default itemReducer