// **************** DEFAULT STYLED COMPONENTS **************** //
// ********************************************************** //
// ************* vars used form styleVars.js *************** //
import styled, {createGlobalStyle} from 'styled-components';
import {fontStyles, theme} from './styleVars';

const GlobalStyle= createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    font-size: 62.5%; 
  }
`;

// **************** CONTAINER **************** //
  const AppCont= styled.div`
    position: relative;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${theme.white};
  `;

// **************** HEADING 1-5 **************** //

const Heading1= styled.h1`
  color: ${ props=>  props.color || fontStyles.h1Color };
  background-color: ${ props => props.backgroundColor };
  font-size: ${props => props.fontSize || fontStyles.h1Size};
  margin: 5px auto 5px auto;
  text-align: center;
`;

const Heading2= styled.h2`
  color: ${props => props.color || fontStyles.h2Color};
  background-color: ${ props => props.backgroundColor };
  font-size: ${props => props.fontSize || fontStyles.h2Size};
  margin: 5px auto 5px auto;
  text-align: center;
`;

const Heading3= styled.h3`
  color: ${props => props.color || fontStyles.h3Color};
  background-color: ${ props => props.backgroundColor };
  font-size: ${props => props.fontSize || fontStyles.h3Size};
  margin: 5px auto 5px auto;
  text-align: center;
`;

const Heading4= styled.h4`
  color: ${props => props.color || fontStyles.h4Color};
  background-color: ${ props => props.backgroundColor };
  font-size: ${props => props.fontSize || fontStyles.h4Size};
  margin: 5px auto 5px auto;
  text-align: center;
`;

const Heading5= styled.h5`
  color: ${props => props.color || fontStyles.h5Color};
  background-color: ${ props => props.backgroundColor };
  font-size: ${props => props.fontSize || fontStyles.h5Size};
  margin: 5px auto 5px auto;
  text-align: center;
`;

// ******** PARAGRAPH AND LINK(a) TAG ********** //

const Para= styled.p`
  color: ${props => props.color || fontStyles.pColor};
  font-size: ${props => props.fontSize || fontStyles.pSize};
  margin: 5px;
`;

const Anchor= styled.a`
  color: ${props => props.color || fontStyles.linkColor};
  font-size: ${props => props.fontSize || fontStyles.linkSize};
  text-decoration: none;
  margin: 5px;
  
  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;

export {
  GlobalStyle,
  Heading1, 
  Heading2, 
  Heading3,
  Heading4,
  Heading5,
  Para,
  Anchor,
  AppCont
};