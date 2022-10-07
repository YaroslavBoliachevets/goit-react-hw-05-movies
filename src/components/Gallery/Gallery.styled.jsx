import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import {AiFillFire} from 'react-icons/ai';

export const Title = styled.h2`

text-align:center;
color:${p=> p.theme.colors.main};
`;

export const TitleIcon = styled(AiFillFire)`
fill: ${p => p.theme.colors.accent};
width: ${p=> p.theme.iconSizes.l};
height: ${p=> p.theme.iconSizes.l };
margin-right: ${p=> p.theme.space[3]}px;
`;

export const CardsGallery = styled.ul`
justify-content:center;
display:flex;
flex-wrap:wrap;
gap:${p=> p.theme.space[5]}px;
list-style:none;
`;

export const MovieCard = styled.li`
width:${p=> p.theme.sizes.quater};
padding: ${p => p.theme.space[0]}px;
border-radius:${p => p.theme.radii.m};
&:hover {
	img{
		box-shadow: ${p=> p.theme.shadow.normal};
	}
}
`;

export const CardImg = styled.img`
width:${p=> p.theme.sizes.m};
margin-bottom:${p=> p.theme.space[3]}px;
border-radius:${p => p.theme.radii.m};
`;

export const MovieLink = styled(NavLink)`
text-decoration:none;
display:block;
`;

export const Name = styled.h3`
margin:${p=> p.theme.space[0]}px;
color: ${p=> p.theme.colors.main};

font-family: Roboto;
font-size: ${p=> p.theme.fontSizes.m};
font-weight: ${p=> p.theme.fontWeights.normal};
line-height: ${p=>p.theme.space[5]}px;
text-align: left;
`;

export const Genres = styled.p`
margin:${p=> p.theme.space[0]}px;
color:${p=> p.theme.colors.accent};

font-family: Roboto;
font-size: ${p=> p.theme.fontSizes.m};
font-weight:${p=> p.theme.fontWeights.normal};
line-height: ${p=> p.theme.space[5]}px;
text-align: left;
`;