import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Bar = styled.div`
align-items: center;
flex-direction: row;
justify-content: space-between;
padding: 0px 40px;
border-bottom: 1px solid #DCDCDC :
margin-bottom: 60px;
height: 77px; 
` 


class Header extends Component {
    render() {
        return (
        
            <Bar>
            <div className="container">
            <div className="item">
              <Link to="/bio">About Me</Link>
            </div>
            <div className="item">
            <Link to="/projects">Projects</Link>
            </div>
            <div className="item">
            <Link to="/contacts">Resume</Link>
            </div>
            </div>
            </Bar>
        );
    }
}

export default Header;