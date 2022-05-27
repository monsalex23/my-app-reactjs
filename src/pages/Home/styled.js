import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #F7DBF0;
`;

export const Input = styled.input`
border: 2px solid #ddd;
border-radius: 0 .25rem 25.rem 0;
height: 2.5rem;
padding: 0 .5rem;
`;

export const Button = styled.button`
width: 5rem;
height: 2.5rem;
border: 2px solid #ddd;
background: #000;
color: #fff;
border-radius: 0 .25rem 25.rem 0;
background-color: black;
  color: ${({ color }) => color || "withe"};
  padding: 10px;
  border: 1px solid ${({ color }) => color || "blue"};
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;}
`;

