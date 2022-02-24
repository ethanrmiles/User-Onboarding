import react from 'react'

export default function FormList ({ details }) {
   console.log({ details })
    return (
        <div className='employee-card'>
                <h2>Name: {details.first_name} {details.last_name} {details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
        </div>
    )
}