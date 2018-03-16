import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Bar = styled.div`
text-align: right;
flex-direction: row;
justify-content: space-between;
padding: 40px 40px;
border-bottom: 1px solid #DCDCDC :
margin-bottom: 60px;
height: 77px; 

` 

const Head = styled.div`
@media screen and (max-width:450px) {
    .container {
        font-size: 1rem;
        margin-right: 30%;
    }
    .item {
        font-size: 10px;
    }
   }
`



class Header extends Component {
    render() {
        return (
            <Head>
            <Bar>
            <div className="dropdown">
            <button class="dropbtn">Navigate</button>
            <div class="dropdown-content">
            <Link to="/bio">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contacts">Resume</Link>
            </div>
            </div>
            </Bar>
            </Head>
        );
    }
}

export default Header;