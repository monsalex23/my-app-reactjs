import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
width: 100%;
max-width: 991px;
margin: 0 auto;
background-color: #F7DBF0;
`;

export const Title = styled.h1`
text-align: center;
font-size: 3rem;
font-family: Verdana, Geneva, Tahoma, sans-serif;
color: #97C4B8;
`;

export const List = styled.ul`
list-style: none;
padding: 0;
margin: 0;
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-weight: 800;
color: #CCF3EE;
`;
export const LisItem = styled.li`
margin: .5rem 0;
background: #F9F9F9;
color:#97C4B8;
padding: .5rem;
`;

export const LinkHome = styled(Link)`
display: block;
width: 6rem;
text-align: center;
margin: 2rem auto;
background-color: #97C4B8;
padding: .5rem 0;
color: #000;
text-decoration: none;
font-family: Verdana, Geneva, Tahoma, sans-serif;
background-color: #97C4B8;
  color: ${({ color }) => color || "withe"};
  padding: 10px;
  border: 1px solid ${({ color }) => color || "blue"};
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;}
`