import Redux from 'redux';

let initialState = {
    newsList: [],
    newsItem: {},
    pageIndex: 0,
} 

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_NEWS_LIST':
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
        default:
            return state;
    }
}

export default reducer;