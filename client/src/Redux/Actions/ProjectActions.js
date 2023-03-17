import axios from 'axios'
export const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS';
export const GET_PROJECTS_BY_ID = 'GET_PROJECTS_BY_ID';
export const CREATE_PROJECT = 'CREATE_PROJECT'
export const MODIFY_PROJECT = 'MODIFY_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';

export const getAllProjects = () => {
    return async function (dispatch){
        var json = await axios("http://localhost:3001/project")
        return dispatch({ type: GET_ALL_PROJECTS, payload: json.data });
    }
}; 

export const getProjectById = (id) => {
    return async function (dispatch){
        try {
            const api = await axios(`http://localhost:3001/project/${id}`)
            return dispatch({type: GET_PROJECTS_BY_ID, payload: api.data})
        } catch (error) {
            console.log(error)
        }
    }
}; 

export function createProject(payload){
    return async function (dispatch){
        const postProject = await axios.post('http://localhost:3001/project',payload);
        console.log(postProject);
        return postProject;
    }           
}; 

export const ModifyProject = (id) => {
    
    return async function (dispatch){
        const proj = await axios.put(`http://localhost:3001/project/${id}`)  
        return dispatch({ type: MODIFY_PROJECT, payload: proj.data })
    }  
}
export const deleteProject = (id) => {
    
    return async function (dispatch){
        const contact = await axios.delete(`http://localhost:3001/contact/${id}`)  
        return dispatch({ type: DELETE_PROJECT, payload: contact.data })
    }  
}
