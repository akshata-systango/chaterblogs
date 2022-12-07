import { USER_LOGIN } from '../actions/actionTypes';
import {GET_BLOG_DATA} from '../actions/actionTypes';

import rootState from './rootState';

const reducers = (state = rootState, {type, payload}) => {

    switch (type) {
        case `${USER_LOGIN}_SUCCESS`:
            console.log(state, 'state', payload);
            return {
                ...state,
            }
        case `${GET_BLOG_DATA}_SUCCESS`:
            console.log(state, 'state', payload);
            return {
                ...state,
            }
        default:
            return state
    }

};

export default reducers;