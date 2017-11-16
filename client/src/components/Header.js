import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'



class Header extends Component {
    render() {
        return (
        
            <div>
            <div className="container">
            <div className="item">
              <Link to="/MainMenu">HomePage</Link>
            </div>
            <div className="item">
              <Link to="/bio">About Me</Link>
            </div>
            <div className="item">
            <Link to="/projects">Projects</Link>
            </div>
            </div>
            </div>
            
        );
    }
}

export default Header;