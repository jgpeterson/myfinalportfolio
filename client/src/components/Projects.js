import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'

const FlexContainer = styled.div`

    img {
        height: 150px;
        float: bottom;
    }
`

const Back = styled.div`
margin: 50px;
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
                <Back>
                <FlexContainer>
                <div>
                    <img src={site.name}/>
                    <div>
                    <p>{site.description}</p>
                   <p> <a href={site.info}><button>Click Here to View</button></a></p>
                    </div>
                </div>
                
                </FlexContainer>
                </Back>
                
            )
        })

        return (
            <div>
               <Header />
                {sites}
            </div>
        )
    }
}
            
export default Projects;