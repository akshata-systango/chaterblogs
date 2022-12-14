import axios from "axios"
import { GET_BLOG_DATA, GET_LOGIN_DATA, GET_CHAT_DETAIL, POST_BLOG_DETAIL } from './actionTypes'
const url = 'https://chaterblogs-default-rtdb.firebaseio.com/'

// -----------------------------------------Login Detail APIs---------------------------------------------
export const postLoginDetails = (data) => {
    axios.post(url + 'users.json/', data)
        .then(response => {
            console.log(response, 'Response');
        })
        .catch(error => console.log(error, 'Error'))
}

export const getLoginDetails = async dispatch => {
    await axios.get(url + 'users.json/').then(response => dispatch({
        type: GET_LOGIN_DATA,
        payload: response.data
    }))
        .catch(error => console.log(error, 'Error'))
}

//-------------------------------------------Blog Detail APIs-----------------------------------------------
export const postblogsDetails = async (data, dispatch) => {
    await axios.post(url + 'blogs.json/', data).then(response => dispatch({
        type: POST_BLOG_DETAIL,
        payload: response.data,
    }))
}

export const getBlogDetails = async dispatch => {
    await axios.get(url + 'blogs.json/').then(response =>
        dispatch({
            type: GET_BLOG_DATA,
            payload: response.data
        }))
        .catch(error => console.log(error, 'error'))
}

export const deleteChatDetails = (id) => {
    axios.delete(url + `blogs/${id}.json`, {
        header: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
}
//-------------------------------------------Chat Detail APIs-----------------------------------------------
export const postChatDetails = (data) => {
    axios.post(url + 'chatDetail.json/', data)
}

export const getChatDetails = async dispatch => {
    await axios.get(url + 'chatDetail.json/').then(response =>
        dispatch({
            type: GET_CHAT_DETAIL,
            payload: response.data
        }))
        .catch(error => console.log(error, 'error'));
}
