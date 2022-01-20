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
    
    <Container>
        <Row xs={1} md={3} className={props.className} >
   
          
              <Col key={props.key}> 
                <Card>
                  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${resdata.poster_path}`} />
                  <Card.Body>
                    <Card.Title>{resdata.title}</Card.Title>
                    <Card.Text>
                      <Link  to={`/film/${resdata.id}`}>Show details</Link> 
                      <button type="button" className="btn btn-primary"  onClick={()=> addFav(resdata.id)} >add</button>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
        
  

          </Row>
          </Container>
     

    </>
  );
};

export default Film;
