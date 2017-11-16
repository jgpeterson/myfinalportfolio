import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import Bio from './Bio'
import Header from './Header'
import HomePage from './HomePage'
import Projects from './Projects'

const FlexContainer = styled.div`
display: flex;
justify-content: space-around;
padding: 20px;
float: center;
`

class MainMenu extends Component {
    render() {
        return (
            <div>
            <Header />
            <FlexContainer>
           
            
            <img src="https://i.imgur.com/hSN4FUK.jpg"/> 
           
            </FlexContainer>
           </div>
        );
    }
}

export default MainMenu;