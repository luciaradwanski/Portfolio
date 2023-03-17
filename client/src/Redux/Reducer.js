import { GET_ALL_CONTACTS, GET_CONTACTS_BY_ID, MODIFY_CONTACT, DELETE_CONTACT } from "./Actions/ContactActions"
import { GET_ALL_PROJECTS, GET_PROJECTS_BY_ID, MODIFY_PROJECT, DELETE_PROJECT } from "./Actions/ProjectActions"
import { GET_ALL_USERS, GET_USERS_BY_ID, MODIFY_USER, DELETE_USER } from "./Actions/UserActions"


const initialState = {
    projects: [],
    allProjects: [],
    detailProject: [],
    users: [],
    allUsers: [],
    detailUsers: [],
    contacts: [],
    allContacts: [],
    detailContact: [],
}


function rootReducer (state = initialState, action){
    switch(action.type){

                
        case GET_ALL_CONTACTS: 
            
            return {
                ...state, 
                contacts: action.payload, 
                allContacts: action.payload
            }
        case GET_ALL_PROJECTS: 
            
            return {
                ...state, 
                projects: action.payload, 
                allProjects: action.payload
            }
        case GET_ALL_USERS: 
            
            return {
                ...state, 
                users: action.payload, 
                allUsers: action.payload
            }     

        case GET_CONTACTS_BY_ID: 
            
            return {...state, detailContact: action.payload}

        case GET_PROJECTS_BY_ID: 
            
            return {...state, detailProjects: action.payload}

        case GET_USERS_BY_ID: 
            
            return {...state, detailUsers: action.payload}

        case DELETE_CONTACT:
            return {
                ...state,                                                      
                contact: action.payload        
            };
        case DELETE_PROJECT:
            return {
                ...state,                                                      
                project: action.payload        
            };
        case DELETE_USER:
            return {
                ...state,                                                      
                users: action.payload        
            };
                
        default: return {...state}
    }


}

export default rootReducer;