import { SET_LIST_QUOTES_ASYNC, } from '../../constants/actionNames';

const  setListquotes = (value) => {
    return { type: SET_LIST_QUOTES_ASYNC, payload: value }
}

export {setListquotes };