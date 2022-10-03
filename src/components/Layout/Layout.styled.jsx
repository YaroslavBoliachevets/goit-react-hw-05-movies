import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
justify-content:center;
padding:20px;
`;

export const Box = styled.nav`
padding: 40px 40px;
background-color: #dbd8d5;
`;

export const NavItem = styled(NavLink)`
padding:8px;
border-radius:8px;
text-decoration:none;
font-family: Roboto;
font-size: 16px;
font-weight: 500;
line-height: 14px;
letter-spacing: 0em;
text-align: center;


&:not(:first-child){
	margin-left: 40px;
}

&.active {
	background-color: #ff6b08;
	color:white;
}

:hover:not(.active), 
:focus-visible:not(.active) {
	color: #ff6b08;
}
`;
