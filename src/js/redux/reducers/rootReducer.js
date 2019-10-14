import { SETLISTQUOTES,} from "../../constants/actionNames";

const initialState = {
    listquotes: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETLISTQUOTES:
            return Object.assign({}, state, {
                listquotes: action.payload
            })
        default:
            return state;
    }
}

export default rootReducer;