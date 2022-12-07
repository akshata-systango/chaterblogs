import axios from "axios"
import { USER_LOGIN } from './actionTypes'
const url = 'https://chaterblogs-default-rtdb.firebaseio.com/'

export const postLoginDetails = (data) => {
    axios.post(url + 'users.json/', data, {
        type: USER_LOGIN
    })
        .then(response => {
            return response
        })
        .catch(error => console.log(error, 'error'))
}

export const getLoginDetails = () => {
    axios.get(url + 'users.json/')
}
export const postblogsDetails = (data) => {
    axios.post(url + 'blogs.json/', data, {
        // type: USER_LOGIN
    })
        .then(response => {
            return response
        })
        .catch(error => console.log(error, 'error'))
}
export const getBlogDetails = () => {
    axios.get(url + 'blogs.json/',{
        // type: GET_BLOG_DATA
    })
}