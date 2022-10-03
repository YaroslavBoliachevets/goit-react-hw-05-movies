import styled from "styled-components";

export const BackBtn = styled.button`
margin-bottom:50px;

cursor:pointer;
background-color:white;

border:1px solid;
border-radius:5px;

&:focus, &:hover {
	background-color:#ff6b08;
	color:#ffffff;
}
`;

export const MovieCard = styled.div`
display:flex;
`;

export const Img = styled.img`
display:block;
width:395px;
height:420px;
`;

export const Info = styled.div`
margin-left:50px;
`;