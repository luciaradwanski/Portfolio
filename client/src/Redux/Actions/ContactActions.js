export const GET_ALL_CONTACTS = 'GET_ALL_CONTACTS';
export const GET_CONTACTS_BY_ID = 'GET_CONTACTS_BY_ID';
export const CREATE_CONTACT = 'CREATE_CONTACT'
export const MODIFY_CONTACT = 'MODIFY_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

export const getAllContacts = () => {
    return async function (dispatch){
        var json = await axios("http://localhost:3001/contact")
        return dispatch({ type: GET_ALL_CONTACTS, payload: json.data });
    }
}; 

export const getContactById = (id) => {
    return async function (dispatch){
        try {
            const api = await axios(`http://localhost:3001/contact/${id}`)
            return dispatch({type: GET_CONTACTS_BY_ID, payload: api.data})
        } catch (error) {
            console.log(error)
        }
    }
}; 

export function createContact(payload){
    return async function (dispatch){
        const postContact = await axios.post('http://localhost:3001/contact',payload);
        console.log(postContact);
        return postContact;
    }           
}; 

export const ModifyContact = (id) => {
    
    return async function (dispatch){
        const cont = await axios.put(`http://localhost:3001/contact/${id}`)  
        return dispatch({ type: MODIFY_CONTACT, payload: cont.data })
    }  
}
export const deleteContact = (id) => {
    
    return async function (dispatch){
        const contact = await axios.delete(`http://localhost:3001/contact/${id}`)  
        return dispatch({ type: DELETE_CONTACT, payload: contact.data })
    }  
}
