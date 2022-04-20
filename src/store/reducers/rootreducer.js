import data from 'userdata.json';


var initialState = {
    itemArray : [],
    udata: data,
    perpage:3,
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            var idgenerator = action?.payload;
            idgenerator.id = Math.floor(1000 + Math.random() * 90000);;
            return {
                ...state,
                itemArray:[...state.itemArray,idgenerator]
            }
        case 'REMOVE_ITEM':
            let removedArrr = state.itemArray?.filter(item => item?.id !==  action?.payload)
            return {
                ...state,
                itemArray:removedArrr
            }
        case 'SEARCH_ITEM':
            let searchArrr = state.itemArray?.filter(item =>  item?.name.toLowerCase().includes(action?.payload.toLowerCase()) )
            return {
                ...state,
                itemArray:searchArrr
            }
        
        default:
            return {
                ...state,
            };

    }

}

