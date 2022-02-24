import logo from './logo.svg';
import react, {useState, useEffect} from 'react'
import './App.css';
import * as yup from 'yup';
import schema from './formSchema'
import axios from 'axios';
import Form from './Form';
import FormList from './FormList';
// import schema from './formSchema';

/////////////////////////////////////////////////////////////////

const initialFormValues = {
name: '',
email: '',
password:'',
termsOfService: false,
}

const initialFormErrors = {
  name: '',
email: '',
password:'',
termsOfService: false,
}

const initialEmployees = [];
const initialDisabled = true;

/////////////////////////////////////////////////////////////////

export default function App() {
//States: 
const [employees, setEmployees] = useState(initialEmployees);    //Sets initial employee list to empty array (1)
const [formValues, setFormValues] = useState(initialFormValues); //Sets initial form values to empty values (2)
const [formErrors, setFormErrors] = useState(initialFormErrors);   //Sets the initial form errors to empty (3)
const [disabled, setDisabled] = useState(initialDisabled);              //Sets submit button to disabled (4)

/////////////////////////////////////////////////////////////////

const getEmployees = () => {
  axios.get('https://reqres.in/api/users')
  .then(res => setEmployees(res.data.data))
  .catch(err => console.error(err))
}

const postNewEmployee = (newEmployee) => {
  axios.post('https://reqres.in/api/users').then(resp =>{
    setEmployees([resp.details, ...employees]);
    console.log(resp.details)
    setFormValues(initialFormValues)
  }).catch(err => console.error(err))
}

/////////////////////////////////////////////////////////////////

const validate = (name, value) => {
  yup.reach(schema, name)
  .validate(value)
  .then(() => setFormErrors({ ...formErrors, [name]: '' }))
  .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
}

const inputChange = (name, value) => {
  validate(name, value)
  setFormValues({
    ...formValues, 
    [name]: value,
  })
}

const formSubmit = () => {
  const newEmployee = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
  }
  postNewEmployee(newEmployee)
}

/////////////////////////////////////////////////////////////////

useEffect(() => {
  getEmployees()
}, [])

useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])

/////////////////////////////////////////////////////////////////

  return (
    <div className='wrapper'>
      <h1>Employee Onboarding</h1>
        <div className='form-container'>
        <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        /> 
      </div>
      <div className='form-list-container'>
        <h1>Current Employees</h1>
        {
          employees.map(employee => {
            return (
              <FormList key={employee.id} details={employee} />
            )
          })
        }
      </div>
    </div>
  );
}


