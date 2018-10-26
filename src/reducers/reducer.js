import Redux from 'redux';

let initialState = {
    newsList: [],
    pageIndex: 0,
    search: 'india',
    loading: false,
} 

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_NEWS_LIST':
            if(!state.pageIndex) {
                return {
                    ...state,
                    newsList: action.newsList
                }
            }
            return {
                ...state,
                newsList: [...state.newsList, ...action.newsList]
            }
        break;
        case 'UPDATE_LIST_COUNT':
            return {
                ...state,
                pageIndex: action.pageIndex
            }
        break;
        case 'SEARCH':
            return {
                ...state,
                search: action.search
            }
        break;
        case 'LOADING_DATA':
            return {
                ...state,
                loading: action.loading
            }
        break;
        default:
            return state;
    }
}

export default reducer;