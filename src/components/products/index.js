import React from 'react'
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

const Products = () => {
  return (
    <div>
    <ProductsContainer>
    <ProductsHeading></ProductsHeading>
    <ProductWrapper>
    {data.map((product, index)  =>{
        return (
            <ProductCard key={index}>
            <ProductImg src = {product.img} alt={product.alt}/>
            <ProductInfo>
            <ProductTitle> {product.name}</ProductTitle>
            <ProductDesc>{product.desc}</ProductDesc>
            <ProductPrice>{product.price}</ProductPrice>
            <ProductButton>{product.button}</ProductButton>
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