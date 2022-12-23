import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-direction: column;
gap: 10px;
`; 

export const Item = styled.li`
display: flex;
gap: 10px;
justify-content: space-between;
align-items: center;
`;

export const Contact = styled.p`
font-size: 20px;
margin: 0;
text-transform: capitalize;
`;