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
`
const Wrapper = styled.div`

`
class Contacts extends Component {
    render() {
        return (
            <Wrapper>
            <Header />
             <FlexContainer>
             <h4>Click below to Download my Resume</h4>
             <button><a href="https://drive.google.com/drive/folders/1ntGmMC1cW4PhjxD_q-jtAd4fB6zRkfGf">Download</a></button>
            
            

              </FlexContainer>    
            </Wrapper>
        );
    }
}


   
         

export default Contacts;