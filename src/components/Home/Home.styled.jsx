import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Gallery = styled.ul`
padding:0;
list-style:none;
`;

export const GalleryItem = styled.li`
padding: 10px 0px;
border-radius:8px;
&:hover {
	box-shadow: 5px 5px 8px 3px rgba(0, 0, 0, 0.3);
}
`;

export const MovieLink = styled(NavLink)`
display:block;
`;
