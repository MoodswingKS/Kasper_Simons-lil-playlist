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

// export const filterList = (name, artist, genre, rating) => {
//     return {
//         type: actionTypes.FILTER_LIST,
//         payload: {
//             name: name,
//             artist: artist,
//             genre: genre,
//             rating: rating
//         }
//     }
// }

