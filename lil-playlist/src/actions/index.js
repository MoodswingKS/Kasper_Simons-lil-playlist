export const addNewItem = (item) => {
    return {
        type: 'ITEM',
        payload: item
    }
}

export const addNewListItem = (listItem) => {
    return {
        type: 'LIST_ITEM',
        payload: listItem
    }
}