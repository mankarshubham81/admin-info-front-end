import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import validation from './SignupValidation'
import axios from 'axios';


export default function Signup() {

    const [values,setValues] = useState({
        name:'',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        name:'',
        email: '',
        password: ''
    });

    
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("VVVVVVVV", values);
        // setErrors(validation(values));
        let eresult = validation(values);
        console.log("VVVVVVVV eresult", eresult);
        setErrors(eresult);
        if(errors === null || errors.name === "" &&  errors.email === "" && errors.password === ""){
        console.log("iiiiii", values);
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                if(res.data.Status === "Success") {
                    console.log("Response ", res)
                    navigate('/logina')
                } else {
                    alert("Error while signup please enter correct info")
                }
                console.log("Response ", res)})
            .catch(err => console.log("Error ", err));
        }
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign-Up</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="Name"><strong>UserNAme</strong></label>
                    <input type="text" placeholder="Enter UserName" name='name'
                    onChange={handleInput} className='form-control rounded-0' />
                 {errors.name && <span className='text-danger' >{errors.name}</span>}

                </div>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder="Enter Email" name='email'
                    onChange={handleInput} className='form-control rounded-0' />
                 {errors.email && <span className='text-danger' >{errors.email}</span>}

                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter Password" name='password'
                     onChange={handleInput} className='form-control rounded-0' />
                 {errors.password && <span className='text-danger' >{errors.password}</span>}

                </div>
                <button type='submit' className="btn btn-success w-100"> <strong>Sign Up</strong> </button>
                <p> You are agree to aour terms and policies </p>
                <Link to={'/logina'} className='btn btn-default border w-100 bg-light rounded-0' > Login </Link>
            </form>
        </div>
    </div>
  )
}
