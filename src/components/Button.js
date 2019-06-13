import React from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  font-size: 20px;
  border-radius: 3px;
  color: white;
  margin: 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  background-color: ${props =>
    props.primary ? 'blue' : 'grey'};
    
  &:hover {
    color: ${props => (props.primary ? 'blue' : 'grey')};
    border: ${props =>
    props.primary ? '2px solid blue' : '2px solid grey'};
    background: transparent;
  }
`;

const RedButton = styled(Button)`
  background-color: red;
  color: white;
   
  &:hover {
    color: red;
    background: transparent;
    border-color: red;
  }
`;

function Buttons() {
    return (
        <div>
            <div>
                <Helmet>
                    <title>Button</title>
                    <meta name="description" content="button" />
                </Helmet>
            </div>
            <div>
                <Button primary onClick={() => alert('You pressed the button Ok!')}>Ok</Button>
                <Button onClick={() => alert('You pressed the button Cancel!')}>Cancel</Button>
                <RedButton onClick={() => alert('Warning!')}>Warning</RedButton>
            </div>
        </div>
    )
}
export default Buttons;