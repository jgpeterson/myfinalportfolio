import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const FlexContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 150px;
align-items: center;
height: 50vh;
flex-direction: column;
text-align: center;
`

class HomePage extends Component {
    render() {
        return (
            
        <FlexContainer>
            <div class="photo">
       <img src="https://i.imgur.com/9Gh9BZS.jpg"/>
       <div class="james">
       <p>James Peterson</p>
       <p>Full-Stack Web Developer</p>
       </div>
       <h1> <Link to="/Bio">ENTER</Link></h1>
        </div>
    </FlexContainer>
        );
    }
}

export default HomePage;