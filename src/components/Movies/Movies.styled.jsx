import styled from "styled-components";

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