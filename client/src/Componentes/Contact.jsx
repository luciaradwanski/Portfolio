import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { createContact, getAllContacts } from '../Redux/Actions/ContactActions';
import swal from 'sweetalert';

import '../Styles/Contact.css'

function validate(input) {
    let errors = {};
    const regexName = /^[A-Za-z0-9\s]+$/g;
    

    if (input.name && !regexName.test(input.name)) {
        errors.name = "can't include special characters or numbers";
    }
    if (!input.name) {
        errors.name = "Name is required";
    }
    if (input.name.length > 20) {
        errors.name = "Max 20 characters";
    }
    if (input.name.length < 6) {
        errors.name = "Min 6 characters";
    }
    
    if (!input.email) {
        errors.email = "Email is required";
    }
    if (!input.message) {
        errors.message = "Message is required";
    }
    
    if (input.message.length < 10) {
        errors.message = "Min 10 characters";
    }
    
    return errors;
}


export const Contact = () => {

    const dispatch = useDispatch()
    
    const history =  useHistory()
    const [error, setError] = useState({});

    const [input, setInput] = useState({
        name: '',
        email: '',
        message: '',
    })
    
    const handleInputChange = (e) => {
        setError(validate({...input, [e.target.name] : e.target.value}));
        setInput({...input, [e.target.name] : e.target.value})
        console.log(input);
    }

    const handleSubmit = (e) => {
        if(!input.name || !input.email || !input.message) {
            return swal('Cannot create contact', '', 'error')
        } else {
            e.preventDefault();
            console.log(input);
            setError(validate({...input, [e.target.name] : e.target.value}))
            dispatch(createContact(input))
            swal('Created contact', "", 'success');
            setInput({
                name: '',
                email: '',
                message: '',
            })
        }
    };


    return (
        <div className='ContainerF'>
            
            <form className='ContainerForm' onSubmit={(e) => handleSubmit(e)}>
                <h4 className='TitleContact'>Contact</h4>
                <div>
                    <label className='Label'>Name:</label>
                    <input className='Input' type="text" id="name" name="name" value={input.name} onChange={(e) => handleInputChange(e)} />
                    {error.name && (<p className="SpanError">{error.name}</p>)}
                </div>
                <div>
                    <label className='Label'>Email:</label>
                    <input className='Input' type="email" id="email" name="email" value={input.email} onChange={(e) => handleInputChange(e)} />
                    {error.email && (<p className="SpanError">{error.email}</p>)}
                </div>
                <div>
                    <label className='Label'>Message:</label>
                    <textarea style={{height: "100px"}} className='Text' id="message" name="message" value={input.message} onChange={(e) => handleInputChange(e)} />
                    {error.message && (<p className="SpanError">{error.message}</p>)}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
