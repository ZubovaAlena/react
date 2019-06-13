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
    (props.primary ? 'blue' : 
        props.warning ? 'red' : 'grey')};
    
  &:hover {
    color: ${props => 
    (props.primary ? 'blue' : 
        props.warning ? 'red' : 'grey')};
    border: ${props =>
    props.primary ? '2px solid blue' : 
        props.warning ? '2px solid red' :  '2px solid grey'};
    background: transparent;
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
                <Button warning onClick={() => alert('Warning!')}>Warning</Button>
            </div>
        </div>
    )
}
export default Buttons;