import * as actionTypes from './item-types'

const INITIAL_STATE = {
    item: [], // {id, name, artist, genre, rating}
    list: [
        { id: 1, name: 'Numb', artist: 'Linkin Park', genre: 'Rock', rating: 4 },
        { id: 2, name: 'Trip to Valhalla', artist: 'dr. Peacock', genre: 'French-core', rating: 5 },
        { id: 3, name: 'Slam', artist: 'Pendulum', genre: 'DnB', rating: 3 }
    ], // {item, item, item, item}
    currentItem: null
}

const itemReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_ITEM:
            // Get the items data from array
            console.log('we are in ADD_ITEM')
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        // case actionTypes.FILTER_LIST:
        //     console.log('we are in FILTER_LIST')
        //     return {
                
        //         ...state,
        //         list: [...state.list.sort(), action.payload]
        //     }
        default:
            return state
    }
}
                    
export default itemReducer
                    
                    // case actionTypes.DELETE_ITEM:
                    //     return {
                    //         ...state,
                    //         list: state.list.filter((item) => item.id !== action.payload.id)
                    //     }
