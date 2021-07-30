import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
min-height: 100vh;
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
background-color: #E5E5E5;
`

export const Grid = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   place-content: center;
   width: 100%;
   min-height: 100vh;
   gap: 40px;
`

export const CardContainer = styled.div`
   Width : 218px;
   Height: 278px;
   border-radius: 5px;
   overflow: hidden;
   background-color: white;
   position: relative;
     
   &:hover {
       background-color: tomato;
       color: black;
   }  
`

// STATUS 
export const Status = styled.div`
   position: absolute;
   height: 40px;
   top: 11px;
   left: 12px;
   width: 80px;
   border-radius: 50px;
   background-color: green;
   color: white;
`

export const StatusUnavailable = styled.div`
   position: absolute;
   top: 10px;
   left: 10px;
   width: 93px;
   border-radius: 50px;
   background-color: red!important;
   color: white;
`

export const Statusbooked = styled.div`
   position: absolute;
   top: 10px;
   left: 10px;
   width: 82px;
   border-radius: 50px;
   font-weight: 400;
   background-color: blue;
   color: white;
`
// END OF STATUS


export const Image = styled.img`
   Width: 218px;
   Height: 140px;
   object-fit: fill;
`

export const Parag = styled.p`
font-weight: 400;
Style: normal;
font-size: 14px;
line-height: 17.6px;
color: #999999;
text-align: start;
  &:hover {
     color: pink;
  }
`

export const H2 = styled.h2`
font-weight: 800;
font-size: 16px;
line-height: 20px;
color: #333333;
text-align: start;
   &:hover {
       color: pink;
   }
`

export const Available = styled.button`
height: 40px;
bottom: 0px;
background: #2C64B7;
border-radius: 5px;
color: white;
width: 100%;
border: none;
font-weight: 800;
font-size: 14px;
`

export const Unavailable = styled.button`
height: 40px;
bottom: 0px;
background: #B3B3B3;
border-radius: 5px;
color: white;
width: 100%;
border: none;
font-weight: 800;
font-size: 14px;
`

export const Booked = styled.p`
height: 40px;
width: 100%;
color: #11A960;
font-size: 14px;
line-height: 18px;
text-align: start;
margin: auto;
`

