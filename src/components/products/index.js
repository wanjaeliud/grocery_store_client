import React from 'react'

const Products = () => {
  return (
    <div>
    <ProductsContainer>
    <ProductHeading>Heading</ProductHeading>
    <ProductWrapper>
    {data.map((product, index)  =>{
        return (
            <ProductCard key={index}>
            <ProductImg src = {product.img} alt={product.alt}/>
            <ProductInfo>
            <ProductTitle> title</ProductTitle>
            <ProductDesc>Description</ProductDesc>
            <ProductPrice>price</ProductPrice>
            <ProductButton> button</ProductButton>
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