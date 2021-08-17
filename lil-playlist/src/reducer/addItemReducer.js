const addItemReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ITEM':
            return state + action.payload
        default:
            return state
    }
}

export default addItemReducer