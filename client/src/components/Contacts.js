import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'

const FlexContainer = styled.div`
display: block-flex;
margin-left: 40%;
padding: 20px;
float: center;
aign-items: center;
`
const Wrapper = styled.div`

`
class Contacts extends Component {
    render() {
        return (
            <Wrapper>
            <Header />
             <FlexContainer>
             <h3>Click below to Download my Resume</h3>
             <p>jamespeterson0918@yahoo.com</p>
            
              </FlexContainer>   
    
        
            </Wrapper>
        );
    }
}


   
         

export default Contacts;