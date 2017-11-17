import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'

const FlexContainer = styled.div`

`
const ImgWrapper = styled.img`
display: flex;
margin-left: 20%;
padding: 20px;
float: center;
`
const Wrapper = styled.div`

`
class Contacts extends Component {
    render() {
        return (
            <Wrapper>
            <Header />
             <FlexContainer>
             <h3>Contact Me:</h3>
             <p>jamespeterson0918@yahoo.com</p>
             <a href="https://github.com/timothygein">Github</a>
                 
    <ImgWrapper src="https://i.imgur.com/I5wUFAx.png"/>  
       </FlexContainer> 
            </Wrapper>
        );
    }
}


   
         

export default Contacts;