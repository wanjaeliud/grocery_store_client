import styled from "styled-components";

export const ProductsContainer  = styled.div`
width: 100vw;
min-height: 100vh;
padding: 1rem calc((100vw - 1300px)/2);
background: cream;
color: black;
margin: 0px;
`
export const ProductCart = styled.div`
font-size: 2rem;
font-family: cursive;
text-align: center;
cursor: pointer;
`
export const ProductWrapper= styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
marin: 0 auto;
`
export const ProductCard  = styled.div`
margin: 0 2rem; 
line-height: 2;
width: 300px;
`
export const ProductImg = styled.img`
height: 300px;
min-width: 200px;
max-width: 100%;
box-shadow: 8px 8px limegreen;
`
export const ProductsHeading = styled.h1`
font-size: clamp(2rem, 2.5vw, 3rem);
text-align: center;
margin-bottom: 5rem;
`
export const ProductTitle = styled.h2`
font-weight: 400;
font-size: 1.5rem;
`
export const ProductInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2rem;
text-align: center;
`
export const ProductDesc  = styled.p`
min-width: 300px;
max-width: 100%;
height: 100px;
`
export const ProductPrice= styled.p`
margin-bottom: 5px;
font-size: 2rem;
margin-top: 6px;
`
export const ProductButton = styled.button`
font-size: 1rem;
padding: 1rem 4rem;
border: none;
border-radius: 5rem;
background: limegreen;
color: #fff;
transition: 0.2 ease-out;
margin-bottom: 1rem;


&:hover{
bacground: #ffc500;
transition: 0.2 ease-out;
cursor: pointer;
color: #000
`