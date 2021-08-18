import * as actionTypes from './item-types'

export const addItemToList = (key, name, artist, genre, rating) => {
    
    return {
        type: actionTypes.ADD_ITEM,
        payload: {
            id: key,
            name: name,
            artist: artist,
            genre: genre,
            rating: rating
        }
    }
}

export const makeItem = (key, name, artist, genre, rating) => {
    return {
        type: actionTypes.MAKE_ITEM,
        payload: {
            id: key,
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