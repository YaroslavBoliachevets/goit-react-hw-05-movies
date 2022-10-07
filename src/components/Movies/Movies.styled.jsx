import styled from "styled-components";
import {NavLink} from 'react-router-dom';

export const Box = styled.div`
display:flex;
justify-content:center;
padding:20px;
`;

export const InputSearchMovie = styled.input`
width:300px;
heigth:20px;
padding: 0px 50px 0px 10px;
border-radius:5px;
border: 1px solid;
outline:none;

&:hover, :focus {
	border: 1px solid #ff6b08;
}
`;

export const SearchBtn = styled.button`
cursor:pointer;
background-color:white;

border:1px solid;
border-radius:5px;
margin-left: 10px;

&:focus, &:hover {
	background-color:#ff6b08;
	color:#ffffff;
}
`;

export const Gallery = styled.ul`
display:flex;
gap:${p=> p.theme.space[5]}px;
justify-content:center;
flex-wrap:wrap;
padding:0;
list-style:none;
`;

export const GalleryItem = styled.li`
width:${p=> p.theme.sizes.quater};
padding: ${p => p.theme.space[0]}px;
border-radius:${p=> p.theme.radiii.m};
&:hover {
	box-shadow: 5px 5px 8px 3px rgba(0, 0, 0, 0.3);
}
`;

export const MovieLink = styled(NavLink)`
display:block;
`;
