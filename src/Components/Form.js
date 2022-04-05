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
                        data-test-id="fullname"
                        type='text'
                        name='name'
                        value={name}
                        onChange={onChange}
                    />
                </label>
                <label>Email
                    <input
                        data-test-id="email"
                        type='email'
                        name='email'
                        value={email}
                        onChange={onChange}
                    />
                </label>
                <label>Password
                    <input
                        data-test-id="password"
                        type='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                    />
                </label>
                <br />
                <label>Terms of Service
                    <input
                        data-test-id="accepted"
                        type='checkbox'
                        name='tos'
                        checked={checked}
                        onChange={onChange}
                    />
                </label>
                <br />
                <button data-test-id="submitBtn" disabled={disabled}>CREATE</button>
            </form>
            <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Oswald&display=swap" rel="stylesheet"></link>
        </div>
    )
}

export default Form;