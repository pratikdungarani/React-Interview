import data from 'userdata.json';


var initialState = {
    itemArray : [],
    udata: data
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
        return {
            ...state,
            itemArray:[...state.itemArray,action?.payload]
        }
        
        default:
            return {
                ...state,
            };

    }

}

