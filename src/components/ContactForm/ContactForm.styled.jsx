import styled from 'styled-components';

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
width: 300px;
height: auto;
padding: 10px;
border: 2px solid black;
`;

export const Label = styled.label`
font-size: 20px;
`;

export const Input = styled.input`
display: block;
margin-top: 8px;
`;

export const Button = styled.button`
font-size: inherit;
max-width: fit-content;
border-radius: 5px;
background-color: inherit;
border: 1px solid #d5d3d3;
cursor: pointer;
padding-right: 10px;
padding-left: 10px;
&:hover {
    ${props => props.type !== "submit" ? `background-color: #ec5c5c; color: white;` : `background-color: #8c8cef;` };
};
`;


