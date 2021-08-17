const listReducer = (state = 0, action) => {
    switch (action.type) {
        case 'LIST_ITEM':
            return state + action.payload
        default:
            return state
    }
}

export default listReducer