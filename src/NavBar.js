import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useState } from "react";
// import './css/style.css';
import {Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './css/style.css';
import {useSelector} from "react-redux";
//import { useEffect } from "react";
//import { addToCart } from "./store/action";




const NavB = () => {

  const count = useSelector((state) =>  
  state.actionOnMovie.count)

// console.log(count)
  


return (
    <>


<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <Container>
  <a className="navbar-brand text-warning" href="/">Ahmed Elsobky</a>

  <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link text-light" to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link text-light" to="/login">Login</Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link text-light" to="/signup">Signup</Link>  
      </li> 
      <li className="nav-item">
      <Link className="nav-link text-light" to="/favmovie">FavMovie</Link>    
      </li>
      
    </ul>

    <Link to="/favmovie" className="offset-8">
        <div className={"navbar__cart"}>
          <img
            className={"cart__image"}
            src={require('./img/star (1).png')}
            alt="shopping cart"
          />
          <div className={"cart__counter"}>{count}</div>
        </div>
        </Link>
  </div>
  </Container>
</nav>











    
    </>
); 

  

}

export default NavB;
