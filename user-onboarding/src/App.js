import logo from './logo.svg';
import react, {useState, useEffect} from 'react'
import './App.css';
// import * as yup from 'yup';
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
const [employees, setEmployees] = useState(initialEmployees);    //Sets initial employee list to empty array
const [formValues, setFormValues] = useState(initialFormValues); //Sets initial form values to empty values
const [formErrors, setFormErrors] = useState(initialFormErrors);   //Sets the initial form errors to empty
const [disabled, setDisabled] = useState(initialDisabled);              //Sets submit button to disabled

/////////////////////////////////////////////////////////////////

const getEmployees = () => {}

const postNewEmployee = () => {}

/////////////////////////////////////////////////////////////////

const validate = () => {}

const inputChange = (name, value) => {
  setFormValues({
    ...formValues, 
    [name]: value,
  })
}

const formSubmit = () => {}

/////////////////////////////////////////////////////////////////

// useEffect();

// useEffect()

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
        {/* <FormList /> */}
      </div>
    </div>
  );
}


