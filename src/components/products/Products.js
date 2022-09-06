
import styled from "styled-components";

import React, { useEffect, useState } from 'react'
import{
    ProductsContainer,
    ProductCart,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton 
} from './ProductsStyler';


const Products = ({heading,data, setShow}) => {
const [products, setProducts]= useState([])
const  [cart, setCart]= useState([])

const handleClick  =(products) => {
console.log("Clicked")
setCart([...cart, products])
cart.push(products)
};


useEffect(() => {
  fetch ('http://127.0.0.1:9292/products')
  .then (response => response.json())
  .then((products) =>
  // console.log (products)
  setProducts(products)
  )
}, [])


  return (
    <div>
    <ProductsContainer>
    <ProductsHeading>Our Products</ProductsHeading>
  
    <ProductWrapper>



    {products.map((product, index)  =>{
        return (
            <ProductCard key={index}>
            <ProductImg src = {product.image} alt={product.alt}/>
            <ProductInfo>
            <ProductTitle> {product.name}</ProductTitle>
            <ProductDesc>{product.description}</ProductDesc>
            <ProductPrice>Ksh {product.price}</ProductPrice>
            <ProductButton onClick={()=>handleClick(products)}>Add to Cart</ProductButton>
            </ProductInfo>
            </ProductCard>
        
        )
    })}
    </ProductWrapper>
    </ProductsContainer>
    </div>
  )
}

export default Products;
