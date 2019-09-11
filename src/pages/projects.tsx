import React, { Component } from 'react'
import styled from 'styled-components'
import { Section } from '../components'

const projects = require('../data/projects.json')

interface Props {
    
}
interface State {
    
}

const ProjectsList = styled.ul`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 250px;
    grid-gap: 10px;
    margin:0;

`

const Tag = styled.span`
    background: darkgray;
    border-radius: 3px;
    font-size: 12px;
    font-weight: bold;
    padding: 5px;
    margin-right: 10px;
    color:white;
`

const ProjectItemBox = styled.li`
    list-style: none;
    padding: 20px;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    box-shadow: gray 1px 1px 3px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:after {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        content: '';
        transition: opacity .3s;
        opacity: 0;
        box-shadow:gray 1px 1px 12px 0px;
        border-radius: 4px;
    }

    &:hover {
        &:after {
            opacity: 1;
        }
    }


`

export default class Projects extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Section height={70}>
                <div>
                    <h2>Projects</h2>
                    <ProjectsList>
                    {projects.map((project: any) => (
                        <ProjectItemBox>
                            <div>
                                <h4 style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>{project.name}<span>{project.year}</span></h4> 
                            <p>{project.description}</p>
                            </div>
                            <div>
                            {project.techstack.map((tech: string) => (
                            <Tag>#{tech}</Tag>
                        ))}
                            </div>
                       
                        </ProjectItemBox>
                    ))}
                    </ProjectsList>
                </div>
            </Section>
        )
    }
}
