import { SET_LIST_QUOTES,} from "../../constants/actionNames";

const initialState = {
    listquotes: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST_QUOTES:
            return Object.assign({}, state, {
                listquotes: action.payload
            })
        default:
            return state;
    }
}

export default rootReducer;