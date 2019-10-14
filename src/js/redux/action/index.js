import { SETLISTQUOTES_ASYNC, } from '../../constants/actionNames';

const  setListquotes = (value) => {
    return { type: SETLISTQUOTES_ASYNC, payload: value }
}

export {setListquotes };