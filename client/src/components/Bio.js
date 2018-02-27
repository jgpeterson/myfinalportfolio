import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'


const FlexContainer = styled.div`
width: 50%;
color: white;
`
const ImgWrapper = styled.img`
width: 15%;
height: 20%;
float: bottom;
`

const Wrapper = styled.div`
display: block-flex;
justify-content: space-between;
align: center;
margin-left: 2%;
`

const Bar = styled.div`

@media screen and (max-width:450px) {
    .h4 {
        font-size: 1.25rem
    }
    .button {
        font-size: 1.20rem
    }
   }

`

class Bio extends Component {
    render() {
        return (
            <Bar>
            <Header />
            <Wrapper>
             <FlexContainer>
                 <h1>Bio</h1>
                  <p>My name is James Peterson and I am a full-stack Web Application Developer currently living in Atlanta, Georgia. I have a Web Development certification from GA Assembly in Atlanta. In my spare time you can find me editing videos using Adobe Premiere and Final Cut Pro or editing music using Adobe Audition CS5.
                   My only passion in life is to create and I think that without the ability and artistic freedom to create any piece of art, one would go insane. 
                   "If you want to be creative don’t worry about style or what is trending. Focus on what you want to achieve and do it. Don’t worry about the veneer and packaging till after." - Vincent Van Gogh</p>
                 
                  <h1>Languages/Experience</h1>
                  <p>I started studying Web Development in August of 2017 and completed a 3 month immersive course in order to receive my certification, and my primary choice for development is React on Rails. I have experience in both front and back-end development, and also have efficient experience with 
                      Javascript, jQuery, Node ,SQL and Postgresql, Ajax ,HTML5, and CSS3.</p>

                <h1>Technologies Used for Portfolio</h1>
                  <p>HTML5, CSS, Ruby, React, and Heroku (used to deploy the finalized working app)</p>
    <ImgWrapper src="https://i.imgur.com/l8RnQp2.jpg"/>  

    <h3>Contact Me:</h3>
    <a href="https://www.linkedin.com/in/james-peterson-a6777814a/">LinkedIn</a>
    <br />
    <br />
    <a href="https://github.com/jgpeterson">Github</a>
    <br />
    <br />
    <a href="https://profiles.generalassemb.ly/profiles/9427/preview">GA Profile</a>

       
       </FlexContainer> 
            </Wrapper>
            </Bar>
        );
    }
}

export default Bio;