import React, { useEffect, useState } from 'react'
import Navbarr from '../components/Navbarr'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Form } from 'react-bootstrap';

const Home = () => {
    const [product,setProduct]=useState([])
    const [search,setSearch]=useState([])
    const navigate= useNavigate()

    const getProducts= async()=>{
        try {
           const response= await axios.get('http://localhost:5000/api/product/allproduct') 
           setProduct(response.data.product)
           console.log(response,'get post')
        } catch (error) {
            console.log(error,'getpost')
        }
    }
        useEffect(()=>{
    getProducts()
},[])
const Searches = product.filter((item) => {
    if (search === "") {
      return item;
    } else if (item.title.toLowerCase().includes(search)) {
      return item;
    } else {
      return "";
    }
  });

const deletePost=async(productId)=>{
    console.log(productId)
    try {
        const response = await axios.delete(`http://localhost:5000/api/product/delete/${productId}`)
        console.log(response)
        getProducts()
        
    } catch (error) {
        console.log(error,'errror')
    }
}
  return (
    <div>
      <Navbarr />
     <Container className='m-4'>
     <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
     </Container>

<div style={{display:'flex' ,justifyContent:'center'}}>
{
   Searches.map((item)=>(
        <div style={{padding:'10px'}}>
             <Card style={{ width: '12rem',height:'32rem' ,textAlign:'center'}}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
         {item.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>navigate(`/edit/${item._id}`)} className='m-2'>Edit</Button>
        <Button variant="danger" onClick={()=>deletePost(item._id)}>Delete</Button>
      </Card.Body>
    </Card>
        </div>
    ))
}
</div>
   

    </div>
  )
}

export default Home
