import React from 'react'
import styled from 'styled-components'
import { Section } from '../components'
import OutsideClickHandler from 'react-outside-click-handler';
import { Button } from '../components'


const projects = require('../data/projects.json')


const ProjectsList = styled.ul`
    display:flex;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 325px;
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

const ProjectItemBox = styled.li<{ active: boolean }>`
    list-style: none;
    padding: 20px;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    box-shadow: gray 1px 1px 3px 0px;
    display: flex;
    flex-direction: column;
    justify-content: start;

    .detail {
        display: flex;
        overflow:hidden;
        transition: .3s;
        height: ${props => props.active ? '100%' : '0'};
    }

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

export default () => {
        const [currentIdx,setOpen] = React.useState(-1)

        return (
            <Section height={70}>
                <div>
                    <h2>Projects</h2>
                    <ProjectsList>
                    {projects.map((project: any, index: number) => (
                        <ProjectItemBox key={project.name} active={index === currentIdx} onClick={() => setOpen(index)}>
                            <div style={{
                                height: '150px',
                                marginBottom: '20px'
                            }}>
                                <h4 style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>{project.name}<span>{project.year}</span></h4> 
                            <p>{project.description}</p>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                            {project.techstack.map((tech: string) => (
                                <Tag key={tech}>{`#${tech}`}</Tag>
                            ))}
                                    
                            </div>
                            <OutsideClickHandler onOutsideClick={() => setOpen(-1)} >
                                <div className="detail">
                                    <Button onClick={() => window.open(project.url)}>Source</Button>
                                    <Button>Example</Button>
                                </div>
                            </OutsideClickHandler>
                        </ProjectItemBox>
                    ))}
                    </ProjectsList>
                </div>
            </Section>
        )
}
