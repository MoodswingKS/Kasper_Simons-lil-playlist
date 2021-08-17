import * as actionTypes from './item-types'

export const addItem = (itemId) => {
    return {
        type: actionTypes.ADD_ITEM,
        payload: {
            id: itemId
        }
    }
}

export const makeItem = (itemId, name, artist, genre, rating) => {
    return {
        type: actionTypes.MAKE_ITEM,
        payload: {
            id: itemId,
            name: name,
            artist: artist,
            genre: genre,
            rating: rating
        }
    }
}

export const showItem = (itemId) => {
    return {
        type: actionTypes.SHOW_ITEM,
        payload: {
            id: itemId
        }
    }
}