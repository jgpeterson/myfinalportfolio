import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'

const FlexContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 150px;
align-items: center;
flex-direction: column;
text-align: center;
color: black;
`
const Wrapper = styled.div`
@media screen and (max-width:450px) {
    .h4 {
        font-size: 1.25rem
    }
    .button {
        font-size: 1.20rem
    }
   }
`
class Contacts extends Component {
    render() {
        return (
            <Wrapper>
            <Header />
             <FlexContainer>
             <h4>Click below to Download my Resume</h4>
             <a href="https://drive.google.com/drive/folders/1ntGmMC1cW4PhjxD_q-jtAd4fB6zRkfGf">Download</a>
            
            

              </FlexContainer>    
            </Wrapper>
        );
    }
}


   
         

export default Contacts;