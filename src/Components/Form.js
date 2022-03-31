import React from 'react';

const Form = (props) => {
    const { change, submit, errors, disabled } = props;
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
        <div>
            <h1>Create a Friend</h1>
            <p className='error'>{errors.name}</p>
            <p className='error'>{errors.password}</p>
            <p className='error'>{errors.email}</p>
            <p className='error'>{errors.checked}</p>
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
                <button disabled={disabled}>CREATE</button>
            </form>
            <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Oswald&display=swap" rel="stylesheet"></link>
        </div>
    )
}

export default Form;