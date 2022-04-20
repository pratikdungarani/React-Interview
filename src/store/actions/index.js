export const addItemAction = (res) => {
    return{
        type:'ADD_ITEM',
        payload:res
    }
}
export const removeItemAction = (res) => {
    return{
        type:'REMOVE_ITEM',
        payload:res
    }
}
export const searchItemAction = (res) => {
    return{
        type:'SEARCH_ITEM',
        payload:res
    }
}