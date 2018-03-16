import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'

const FlexContainer = styled.div`

    img {
        height: 400px;
        float: bottom;
    }

    color: white;

    @media screen and (max-width:400px) {
        .ga img {
            font-size: 1.25rem;
            max-width: 200px;
            max-height: 200px;
        }
    }
    
`

const Back = styled.div`
margin: 50px;

@media screen and (max-width:450px) {
    .h4 {
        font-size: 1.25rem
    }
    .button {
        font-size: 1.20rem
    }
   }
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
                <Back>
                <FlexContainer>
                <div class="ga">
                    <img src={site.name}/>
                    <div>
                    <p>{site.description}</p>
                   <p class="click"> <Link to={site.info} target="_blank"><button>Click Here to View</button> </Link></p>
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