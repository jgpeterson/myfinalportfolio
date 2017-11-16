import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'

const FlexContainer = styled.div`
text-align: center;
display: inline-block;
width:85%;
background: white;
border: 1px solid #B9D6C2 ;
margin-bottom: 8px;
margin-right: 8px;
margin-left: 170px;
border-radius: 50px;
padding: 18em;
position: relative;
min-width: 340px;
max-width:800px;


    img {
        height: 400px;
        float: bottom;
    }
`


class Projects extends Component {
    state = {
        projects: [],
       
    }

    componentWillMount() {
        this.getAllProjects()
    }

    getAllProjects = async () => {
        const res = await axios.get('/api/projects')
        this.setState({ projects: res.data })
    }

    render() {

        const sites = this.state.projects.map((site) => {
            return (
                <FlexContainer>
                <div>
                <Header />
                </div>
                <div>
                    <img src={site.name}/>
                    <div>
                    <p>{site.description}</p>
                   <p> <a href={site.info}>Click Here to View</a></p>
                    </div>
                </div>
                </FlexContainer>
            )
        })

        return (
            <div>
               
                {sites}
            </div>
        )
    }
}
            
export default Projects;