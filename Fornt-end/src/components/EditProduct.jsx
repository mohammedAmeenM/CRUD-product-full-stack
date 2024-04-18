import React, { useEffect, useRef, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import Navbarr from './Navbarr'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditProduct = () => {
    const navigate= useNavigate()
    const {id}= useParams();
    const [product,setProduct]=useState([]);
   const productId=id;

 useEffect(()=>{
    const getProductById= async()=>{
        try {
            const response=await axios.get(`http://localhost:5000/api/product/product/${productId}`)
            setProduct(response.data.product)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    getProductById()
 },[productId])

    const titleRef=useRef(null);
    const priceRef=useRef(null);
    const imageRef=useRef(null);
    const categaryRef=useRef(null);
    const [categary,setCategary]=useState()
   

    const handleChangeCategory = (e) => {
        setCategary(e.target.value);
      };


    const handleSave = async (id)=>{
        try {
            const inputTitle=titleRef.current.value;
            const inputprice=priceRef.current.value;
            const inputImage=imageRef.current.value;
            const inputCategary=categary;

            const edit= {
                id:id,
                title:inputTitle,
                price:inputprice,
                image:inputImage,
                categary:categary
            }
            const response = await axios.put('http://localhost:5000/api/product/update',edit)
            console.log(response)
            if(response.status===201){
                navigate('/')
                alert('product edit successfully')
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
        <h2>Edit products</h2><hr />
        <label htmlFor="">Title : </label>  
        <input type="text" ref={titleRef} defaultValue={product.title}/><br /><br />
        <label htmlFor="">Price : </label>  
        <input type="text" ref={priceRef} defaultValue={product.price} /><br /><br />
        <label htmlFor="">Image : </label>  
        <input type="text" ref={imageRef} defaultValue={product.image}/><br /><br />
        <label htmlFor="">Categary : </label>   
       
        <select name="" id=""  onChange={handleChangeCategory}>
        <option value="cat">CAT</option>
        <option value="dog">DOG</option>
      </select><br /><br />
        <Button className='m-2' onClick={()=>handleSave(product._id)} > Save</Button>
        <Button> Cancel</Button>
       
    </div>
    </Container>

 
</div>
  )
}

export default EditProduct
