import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
// import React, { useState } from "react";
// import './css/style.css';
import {useParams} from "react-router-dom";
import {Row , Col } from 'react-bootstrap';
const Film = (props) => {

  const params  = useParams()
	console.log(params, "params")// params link 
	console.log(props, "props")

	const [filmInfo, setInfo] = useState({})

  
  useEffect(() => {
		axios
		.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=2e5d307a9142003b321ca6029b44fe63`)
		.then((res)=> {
			console.log(res)
			setInfo(res.data)

		})
		.catch((err) => {
			console.log(err)
		})
	}, [])



  





    


  return (

    <>
    
     <Row>
       <Col md={4} lg={4} sm={12}> 
       <img  src={`https://image.tmdb.org/t/p/w500/${filmInfo.poster_path}`}/>
       </Col>
       <Col md={8} lg={8} sm={12}>

         <div style={{marginTop: "10%" , marginRight: "40%"}}>
         <h1> {filmInfo.title} </h1> 
       <ul>
         <li>{filmInfo.overview}</li>
       </ul>
         </div>
      
       </Col>
     </Row>
     

    </>
  );
};

export default Film;
