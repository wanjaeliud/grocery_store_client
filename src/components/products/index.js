import React, { useEffect, useState } from 'react'
import{
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton 
} from './Products';

const Products = ({heading,data}) => {
const [products, setProducts]= useState([])

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
    <ProductsHeading>{heading}</ProductsHeading>
    <ProductWrapper>



    {products.map((product, index)  =>{
        return (
            <ProductCard key={index}>
            <ProductImg src = {product.image} alt={product.alt}/>
            <ProductInfo>
            <ProductTitle> {product.name}</ProductTitle>
            <ProductDesc>{product.description}</ProductDesc>
            <ProductPrice>Ksh {product.price}</ProductPrice>
            <ProductButton>Add to Cart</ProductButton>
            </ProductInfo>
            </ProductCard>
        
        )
    })}
    </ProductWrapper>
    </ProductsContainer>
    </div>
  )
}

export default Products