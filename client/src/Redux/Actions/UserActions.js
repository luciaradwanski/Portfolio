import axios from 'axios'
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_USERS_BY_ID = 'GET_USERS_BY_ID';
export const CREATE_USER = 'CREATE_USER'
export const MODIFY_USER = 'MODIFY_USER';
export const DELETE_USER = 'DELETE_USER';

export const getAllUsers = () => {
    return async function (dispatch){
        var json = await axios("http://localhost:3001/user")
        return dispatch({ type: GET_ALL_USERS, payload: json.data });
    }
}; 

export const getUsersById = (id) => {
    return async function (dispatch){
        try {
            const api = await axios(`http://localhost:3001/user/${id}`)
            return dispatch({type: GET_USERS_BY_ID, payload: api.data})
        } catch (error) {
            console.log(error)
        }
    }
}; 

export function createUser(payload){
    return async function (dispatch){
        const postUser = await axios.post('http://localhost:3001/user',payload);
        console.log(postUser);
        return postUser;
    }           
}; 

export const ModifyUser = (id) => {
    
    return async function (dispatch){
        const us = await axios.put(`http://localhost:3001/user/${id}`)  
        return dispatch({ type: MODIFY_USER, payload: us.data })
    }  
}
export const deleteUser = (id) => {
    
    return async function (dispatch){
        const use = await axios.delete(`http://localhost:3001/user/${id}`)  
        return dispatch({ type: DELETE_USER, payload: use.data })
    }  
}
