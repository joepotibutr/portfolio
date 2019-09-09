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
    grid-gap: 10px;
    margin:0;

`

const ProjectItemBox = styled.li`
    list-style: none;
    background: gray;
    padding: 20px;
    border-radius: 4px;
    cursor: pointer;
    position: relative;

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
        box-shadow:black 1px 1px 12px 0px;
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
                        <h2>{project.name}</h2> <span>{project.year}</span>
                        <p>{project.description}</p>
                        {project.techstack.map((tech: string) => (
                            <span>{tech}</span>
                        ))}
                        </ProjectItemBox>
                    ))}
                    </ProjectsList>
                </div>
            </Section>
        )
    }
}
