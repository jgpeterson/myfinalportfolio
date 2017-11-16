import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'


const FlexContainer = styled.div`
   display: flex;
    justify-content: space-around;

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