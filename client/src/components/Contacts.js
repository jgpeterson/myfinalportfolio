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
             <h3>Click below to Download my Resume</h3>
             <p><a href="path_to_file" download="proposed_file_name">Download</a></p>
            
              </FlexContainer>   
    
        
            </Wrapper>
        );
    }
}


   
         

export default Contacts;