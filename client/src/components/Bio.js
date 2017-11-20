import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'


const FlexContainer = styled.div`
width: 60%;
`
const ImgWrapper = styled.img`
width: 45%;
height: 60%;
float: bottom;
`
const Wrapper = styled.div`
display: block-flex;
justify-content: space-between;
align: center;
padding: 15px;
`
class Bio extends Component {
    render() {
        return (
            <Wrapper>
            <Header />
             <FlexContainer>
                 <h1>Bio</h1>
                  <p>My name is James Peterson and I am a full-stack Web Application Developer currently living in Atlanta, Georgia. I have a Web Development certification from GA Assembly in Atlanta. In my spare time you can find me editing videos using Adobe Premeire or editing music using Adobe Audition.
                   My only passion in life is to create and I think that without the ability and freedom to create any piece of art, one would go insane. 
                   "If you want to be creative don’t worry about style or what is trending. Focus on what you want to achieve and do it. Don’t worry about the veneer and packaging till after." - Vincent Van Gogh</p>
                 
                  <h2>Languages</h2>
                  <p>I started studying web development in August of 2017 and completed a 3 month immersive course in order to receive my certification, and my primary choice for development is React on Rails. I have experience in both front and back-end development, and also have efficient experience with 
                      Javascript, jQuery, Node ,SQL and Postgresql, Ajax ,HTML5, and CSS3.</p>

                <h3>Experience</h3>
                <p></p>

                <h4>Technologies Used for Portfolio</h4>
                  <p>HTML5, CSS, Ruby, React, and Heroku (used to deploy the finalized working app)</p>
    <ImgWrapper src="https://i.imgur.com/KNhmwJD.jpg"/>  
       </FlexContainer> 
            </Wrapper>
        );
    }
}

export default Bio;