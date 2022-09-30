import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
padding: 0 20px ;
`;

export const Gallery = styled.ul`
padding:0;
display:flex;
flex-wrap:wrap;
justify-content:center;

list-style:none;

gap:25px;
`;

export const GalleryItem = styled.li`
border-radius:8px;
&:hover {
	box-shadow: 5px 5px 8px 3px rgba(0, 0, 0, 0.3);
}
`;

export const MovieLink = styled(NavLink)`
text-decoration:none;
`;

export const Img = styled.img`
display:block;
	width:395px;
	height:574px;
`;

export const MovieName = styled.h3`
font-family: Roboto;
font-size: 20px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
text-transform:uppercase;
`;

export const MovieGenges = styled.p`
color: #ff6b08;

font-family: Roboto;
font-size: 20px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
text-transform:capitalize;
`;