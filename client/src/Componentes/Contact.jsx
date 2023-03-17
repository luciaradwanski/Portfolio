import React, { useState } from 'react';
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

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
    };


    return (
        <div className='ContainerF'>
            <form className='ContainerForm' onSubmit={handleSubmit}>
                <h4 className='TitleContact'>Contact</h4>
                <div>
                    <label className='Label'>Name:</label>
                    <input className='Input' type="text" value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div>
                    <label className='Label'>Email:</label>
                    <input className='Input' type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div>
                    <label className='Label'>Message:</label>
                    <textarea style={{height: "100px"}} className='Text' value={message} onChange={(event) => setMessage(event.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
