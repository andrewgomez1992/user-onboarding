import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Form = (props) => {
    const { change, submit, errors } = props;
    const { name, email, password, checked } = props.values;

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <div className='main'>
            <h1>Create a friend</h1>
            <p>{errors.name}</p>
            <p>{errors.password}</p>
            <p>{errors.email}</p>
            <p>{errors.checked}</p>
            <form onSubmit={onSubmit}>
                <label>Name
                    <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={onChange}
                    />
                </label>
                <label>Email
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={onChange}
                    />
                </label>
                <label>Password
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                    />
                </label>
                <br />
                <label>Terms of Service
                    <input
                        type='checkbox'
                        name='tos'
                        checked={checked}
                        onChange={onChange}
                    />

                </label>
                <br />
                <input type='submit' value='Create!' />
            </form>
        </div>
    )
}

export default Form;