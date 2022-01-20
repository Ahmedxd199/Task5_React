//import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
//import { useEffect, useState  } from "react";
import {Link} from "react-router-dom";
import {addToCart}from "./store/action"
import {useSelector , useDispatch} from "react-redux";
import { getMovieData } from "./store/alldata_action";

// import React, { useState } from "react";
 import './css/style.css';
import { Row, Col, Card, Container } from "react-bootstrap";


const CardView = () => {


  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get("https://api.themoviedb.org/3/movie/popular?api_key=2e5d307a9142003b321ca6029b44fe63")
  //     .then((res) => {
  //       setData(res.data.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // //console.log(data);

  // //  const cartt = useSelector((state) =>  state.cart)
  // // console.log(cartt)
  // const dispatch = useDispatch();
  // function addFav(itemId){
  //   console.log(itemId)
  //   dispatch(addToCart(itemId))
  // }



  const movieList = useSelector((state) => state.allmovies);
  console.log(movieList , "MOVIE LIST");
 
  const dispatch = useDispatch();

  useEffect( () => {

    dispatch(getMovieData());

  }, [])

 
function addFav(itemId){
    console.log(itemId)
    dispatch(addToCart(itemId))
  }
  

  return (
    <>

       <Container>
        <Row xs={1} md={3} className="g-4">
      {movieList.map((resdata, index) => {
       //  console.log(resdata.title);
        return (
          
              <Col key={index}> 
                <Card>
                  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${resdata.poster_path}`} />
                  <Card.Body>
                    <Card.Title>{resdata.title}</Card.Title>
                    <Card.Text>
                      <Link  to={`/film/${resdata.id}`}>Show details</Link> 
                      <button type="button" className="btn btn-dark"  onClick={()=> addFav(resdata)} >add</button>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
        
        );
      })}
          </Row>
          </Container>
    </>
  );


 

};

export default CardView;
