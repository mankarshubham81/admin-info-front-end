import React, { useState,useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

// import validation from './LoginValidation';
function Login() {

    // const [auth, setAuth] = useState(false);
    // const [message, setMessage] = useState('');

    const navigate = useNavigate();


    useEffect(() => {

        // axios.get('/')
        // .then(res => {
        //     if(res.data.Status === "Success") {
        //         setAuth(true);
        //         navigate('/create')
        //     } else {
        //         setAuth(false);
        //         setMessage(res.data.Error);
        //         // alert("Unauthorized access");
        //     }
        // })
    
        // Axios.get("http://localhost:8081/employees").then((response) => {
        //   // console.log("ffffffff", response.data);
        //   setEmployeeList(response.data);
        //   // setIsData(true);
    
        // }, employeeList);
      }, []);

    const [values,setValues] = useState({
        email: '',
        password: ''
    });
    axios.defaults.withCredentials = true;
    // const [isLoginError, setIsLoginError] = useState(false); 

    const [errors, setErrors] = useState({

    });

    
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("val 20", values);
        setErrors('');
        // setErrors(validation(values));
        axios.post('http://localhost:8081/logina', values)
            .then(res => {
                console.log("Rrr", res.data.Status)
                if(res.data.Status === "Success"){
                    navigate('/create')
                } else{
                    alert(res.data.Error);
                    // setIsLoginError(true);
                }
                console.log("Response ", res)})
            .catch(err => {
                console.log("Error ", err)
            });
    }

return (
<div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white p-3 rounded w-25'>
        <h2>Sign-In</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder="Enter Email" name='email'
                 onChange={handleInput} className='form-control rounded-0' />
                 {errors.email && <span className='text-danger' >{errors.email}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" placeholder="Enter Password" name='password'
                onChange={handleInput}  className='form-control rounded-0' />
                 {errors.password && <span className='text-danger' >{errors.password}</span>}
            </div>
            <button type='submit' className="btn btn-success w-100"> <strong>Log in</strong> </button>
            {/* {isLoginError && <p className='text-danger' >Invalid Email/Password!</p>} */}
            <p> You are agree to aour terms and policies </p>
            <Link to={'/signup'} className='btn btn-default border w-100 bg-light rounded-0' > Create Account</Link>
        </form>
    </div>
</div>
)
}

export default Login