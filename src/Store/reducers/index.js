import {
    USER_LOGIN,
    POST_BLOG_DETAIL,
    GET_BLOG_DATA,
    GET_CHAT_DETAIL
} from '../actions/actionTypes';

import rootState from './rootState';

const reducers = (state = rootState, { type, payload }) => {

    switch (type) {
        case `${USER_LOGIN}`:
            console.log(state, 'state', payload);
            return {
                ...state,
                isUserLoggedIn: true,
                role: state.role
            }
        case `${GET_BLOG_DATA}`:
            console.log(state, 'state', payload);
            return {
                ...state,
                blogDetails: {
                    blogs: payload,
                    isDetailFetched: true
                }

            }
        case `${POST_BLOG_DETAIL}`:
            return {
                ...state,
                blogDetails: {
                    blogs: payload,
                    isDetailFetched: true
                }
            }
        case `${GET_CHAT_DETAIL}`:
            return {
                ...state,
                chatDetails: {
                    chats: payload,
                    isChatFetched: true
                }
            }
        default:
            return state
    }

};

export default reducers;