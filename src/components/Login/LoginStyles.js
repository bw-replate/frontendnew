import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: lightblue;
    border: 2px solid lightblue;
    border-radius: 10px;
    margin: 2% 35% 0 35%;
    padding: 4%;
`;

const Error= styled.p`
  color: red;
  font-size: 1rem;
`
;
const Message= styled.p`
  color: green;
  font-size: 1rem;
`;

export {Error, Message, StyledDiv};