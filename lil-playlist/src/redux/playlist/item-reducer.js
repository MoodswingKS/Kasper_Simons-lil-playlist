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
            return {}
        case actionTypes.MAKE_ITEM:
            return {}
        case actionTypes.SHOW_ITEM:
            return {}
        default:
            return state
    }
}

export default itemReducer