import styled from "styled-components";
import {NavLink} from 'react-router-dom';

export const BackBtn = styled(NavLink)`

display:block;
width:70px;
text-align:center;
text-decoration:none;
padding:5px;
margin-bottom:20px;

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