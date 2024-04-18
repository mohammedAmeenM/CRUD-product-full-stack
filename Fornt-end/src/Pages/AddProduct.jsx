import React, { useRef, useState } from 'react'
import Navbarr from '../components/Navbarr'
import { Button, Container } from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate= useNavigate()
    const titleRef=useRef(null);
    const priceRef=useRef(null);
    const imageRef=useRef(null);
    const [categary,setCategary]=useState()
   

    const handleChangeCategory = (e) => {
        setCategary(e.target.value);
      };

    const handleAdd = async ()=>{
        try {
            const inputTitle=titleRef.current.value;
            const inputprice=priceRef.current.value;
            const inputImage=imageRef.current.value;
        

            const newProduct= {
                title:inputTitle,
                price:inputprice,
                image:inputImage,
                categary:categary
            }
            const response = await axios.post('http://localhost:5000/api/product/addpost',newProduct)
            console.log(response)
            if(response.status===201){
                navigate('/')
                alert('product add successfully')
            }

        } catch (error) {
            console.log('error add product',error)
        }
    }

  return (
    <div>
        <Navbarr />
        <Container style={{border:"1px solid",padding:'20px',borderRadius:'20px'}}>
        <div style={{textAlign:'center'}}>
            <h2>Add products</h2><hr />
            <label htmlFor="">Title : </label>  
            <input type="text" ref={titleRef}/><br /><br />
            <label htmlFor="">Price : </label>  
            <input type="text" ref={priceRef} /><br /><br />
            <label htmlFor="">Image : </label>  
            <input type="text" ref={imageRef} /><br /><br />
            <label htmlFor="">Categary : </label>   
            <select name="" id=""  onChange={handleChangeCategory}>
        <option value="cat">CAT</option>
        <option value="dog">DOG</option>
      </select><br /><br />
            <Button onClick={handleAdd}>Add post</Button>
           
        </div>
        </Container>

     
    </div>
  )
}

export default AddProduct
