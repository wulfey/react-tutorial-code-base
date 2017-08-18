import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';


export const GET_POST = 'get_post';
export const ROOT_URL = "http://reduxblog.herokuapp.com/api";
export const API_KEY = '?key=PAPERCLIP8888888';


export function fetchPosts() {
    
    const url = `${ROOT_URL}/posts${API_KEY}`
    const request = axios.get(url);
    
    return {
        type: FETCH_POSTS,
        payload: request
        // we are returning the PROMISE as the PAYLOAD
         
    }
}

export function getPost(postID) {
    
    const url = `${ROOT_URL}/posts/${postID}${API_KEY}`
    const request = axios.get(url);
    // console.log("inside the action: request");
    // console.log(request);
    return {
        type: GET_POST,
        payload: request
        // we are returning the PROMISE as the PAYLOAD
         
    }
}

export function deletePost(postID, callback) {
    
    const url = `${ROOT_URL}/posts/${postID}${API_KEY}`
    axios.delete(url).then(() => callback());
    // console.log("inside the action: request");
    // console.log(request);
    return {
        type: DELETE_POST,
        payload: postID
        // we are returning the PROMISE as the PAYLOAD
         
    }
}




export function createPost(values, callback) {

    const url = `${ROOT_URL}/posts${API_KEY}`
    const request = axios.post(url, values).then(() => callback());
    
    return {
        type: CREATE_POST,
        payload: request
        // we are returning the PROMISE as the PAYLOAD
         
    }

}

export function selectBook(book){
    // selectBOok should be an action creator that returns a POJO, simple one preferred
    console.log('Book has been sleected:', book.title);
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}