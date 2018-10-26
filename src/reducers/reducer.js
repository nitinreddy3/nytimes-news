import { ACTIONS } from './../constants';

/**
 * Reducers to handle actions and update the state in the store
 */

let initialState = {
    newsList: [],
    pageIndex: 0,
    search: 'india',
    loading: false,
    visible: false,
    errorLoading: false,
} 

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.UPDATE_NEWS_LIST:
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
        case ACTIONS.UPDATE_PAGE_COUNT:
            return {
                ...state,
                pageIndex: action.pageIndex
            }
            break;
        case ACTIONS.SEARCH:
            return {
                ...state,
                search: action.search
            }
            break;
        case ACTIONS.LOADING_DATA:
            return {
                ...state,
                loading: action.loading
            }
            break;
        case ACTIONS.MODAL_VISIBLE:
            return {
                ...state,
                visible: action.visible
            }
            break;
        case ACTIONS.SELECTED_ITEM:
            return {
                ...state,
                selectedNews: action.selectedNews
            }
            break;
        case ACTIONS.ERROR_LOADING:
            return {
                ...state,
                errorLoading: action.errorLoading
            }
            break;
        default:
            return state;
    }
}

export default reducer;