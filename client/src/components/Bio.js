import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'


const FlexContainer = styled.div`
display: flex;
justify-content: space-between; 
align: center;
background: black;
padding: 15px;
`
const ImgWrapper = styled.img`
width: 45%;
margin: 15px;
height: 60%;
`

class Bio extends Component {
    render() {
        return (
            <div>
             <FlexContainer>
    <p class="bio">My name is James Peterson and I am a full-stack Web Application Develope,r currently living in Atlanta, Georgia. I have a Web Development certification from GA Assembly in Atlanta. In my spare time you can find me editing videos using Adobe Premeire or editing music using Adobe Audition.
                   My only passion in life is to create and I think that without the ability and freedom to create any piece of art, one would go insane.</p>
                   <p>"If you want to be creative don’t worry about style or what is trending. Focus on what you want to achieve and do it. Don’t worry about the veneer and packaging till after." - Vincent Van Gogh</p>
   
    <ImgWrapper src="https://i.imgur.com/NyG8ZJV.jpg"/>  
       </FlexContainer> 
            </div>
        );
    }
}

export default Bio;