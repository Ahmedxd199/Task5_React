import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import './css/style.css';
import {Container} from 'react-bootstrap';



const Login = () => {

    const [info , setInfo] = useState({
        email: "",
        password: ""
    })


    const [err , setErr] = useState({
        emailV: null,
        passwordV: null
    })


    const handelSubmet = (e) =>{
        e.preventDefault();
    }



    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    const changeValue = (e) => {

           if(e.target.name === "email") {
			setInfo({
				...info,
				email: e.target.value
			})

            setErr({
				...err,
				emailV: 
					e.target.value.length === 0 ? 
					"please email is requared"
                    : !isValidEmail(e.target.value) ?
                     "Provide a valid email address"
					: null
			})
        

    } 

    else if (e.target.name === "psw"){
        setInfo({
            ...info,
            password: e.target.value
        })
        setErr({
            ...err,
            passwordV: 
                e.target.value.length === 0 ? 
                "please password is required"
                : e.target.value.length < 8 ? 
                "passwoed should be equal or more than 8 character"
                : null
        })
    }

   

}

const [passwordShown, setPasswordShown] = useState(false);

const togglePassword = (e , ch) => {

     if(e.target.name === "ch"){
        setPasswordShown(!passwordShown);

    }
  };


 






  return (
    <>
   

   <Container>

   <h2>Login Form</h2>

<form onSubmit={(e)=> handelSubmet(e)}>
  <div className="imgcontainer">
    <img src={require('./img/logo.png')} alt='Avatar' className='avatar' />
  </div>

  <div className="container">
    <label htmlFor="email"><b>ُEmail</b></label>
    <input type="text" 
    placeholder="your email"
    name="email" required
    value={info.email}
    onChange={(e) => changeValue(e)}
    

    />
    <small className="text-danger">{err.emailV}</small>

    <br />
    <label htmlFor="psw"><b>Password</b></label>
    <input type={passwordShown ? "text" : "password"}
     placeholder="Enter Password" 
     name="psw" required 
     value={info.password}
      onChange={(e) => changeValue(e) } 
     /> 
    <small className="text-danger">{err.passwordV}</small>
    <br />   
    <input type="checkbox" name="ch" onChange={(e) => togglePassword(e)} /> Show Password

    <button type="submit">Login</button>
 
  </div>

  
</form>

   </Container>

 

  

    </>
  );
}

export default Login;
