function validation(values) {
    // alert("aaaa")
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    // const password_pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/ 
    
    
    if(values.name === "") {
        error.name = "Name should not be empty"
    } else {
        error.name = ""
    }

    if(values.email === "") {
    error.email = "Email should not be empty"
    } else {
    error.email = ""
    }

    // if(!email_pattern.test(values.email)) {
    //     error.email = "Email Didn't match"
    //     }

    if(values.password === "") {
    error.password = "Password should not be empty"
    } else {
    error.password = ""
    }
    
    // if(!password_pattern.test(values.password)) {
    //     error.password = "Password didn't match"
    //     } 
    return error;
}

export default validation;