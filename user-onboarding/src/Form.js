import react from 'react'

export default function Form(props) {

    const { 
values, 
submit, 
change, 
disabled, 
errors,
 } = props

const onSubmit = evt => {
    evt.preventDefault()
    submit()
}

const onChange = evt => {
    const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
}
    return(
        <form className='form' onSubmit={onSubmit}>
            <div className='form-submit'>
                <h2>Add an employee</h2>
                <button disabled={disabled} id='submitBtn' >Submit</button>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.termsOfService}</div>
                </div>
            </div>
            <div className='inputs'>
                <label>Name
                    <input
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                    />
                </label>
                <label>Email
                <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='text'
                    />
                </label>
                <label>Password
                <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='password'
                    />
                </label>
                <label>I have read & agree to the terms of service
                <input
                    value={values.termsOfService}
                    onChange={onChange}
                    name='termsOfService'
                    type='checkbox'
                    />
                </label>
            </div>
        </form>
    )
}