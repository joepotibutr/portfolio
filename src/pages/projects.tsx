import React from 'react'
import styled from 'styled-components'
import { Section } from '../components'
import { Button } from '../components'
import { useOutsideClick } from '../utils/helper'
import ReactResizeDetector from 'react-resize-detector'


const projects = require('../data/projects.json')


const ProjectsList = styled.ul`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(310px,1fr));
    /* grid-template-rows: 255px; */
    grid-gap: 10px;
    margin:0;
    margin-bottom: 10px;

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
    justify-content: space-between;
    
    .project-title {
        transition: .3s;
        filter: blur(${props => props.active ? 5 : 0}px);
        opacity: ${props => props.active ? '.5' : '1'};
    }

    .techstack {
        transition: .3s;
        filter: blur(${props => props.active ? 5 : 0}px);
        opacity: ${props => props.active ? '.5' : '1'};
    }

    .detail {
        cursor: default;
        height: 100%;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: absolute;
        margin: -20px;
        display: flex;
        overflow:hidden;
        transition: .5s;
        visibility: ${props => props.active ? 'visible' : 'hidden'};
        opacity: ${props => props.active ? '1' : '0'};

        .detail-action-group {
            justify-content: center;
            height: 100%;
            width: 100%;
            margin: 0 20px;
            display: flex;
            flex-direction: column;
            align-items:center;
        }
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
        const outsideRef = React.useRef(null)

        useOutsideClick(outsideRef, () => {
            setOpen(-1)
        })

        return (
            <Section mobile={850} height={75}>
                <div>
                    <h2>Projects</h2>
                    <div ref={outsideRef} >
                        <ProjectsList>
                        {projects.map((project: any, index: number) => (
                                <ProjectItemBox key={project.name} active={index === currentIdx} onClick={() => setOpen(index)}>
                                    <ReactResizeDetector handleWidth>
                                    {({ width }: { width: number }) => {
                                        const size = width <= 300 ? 'small' : 'normal'
                                        return (<>
                                            <div
                                                className="project-title"
                                                style={{
                                                height: '150px',
                                                marginBottom: '20px'
                                            }}>
                                                <h5 style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between'
                                                }}>{project.name} {width}<span>{project.year}</span></h5> 
                                                <p>{project.description}</p>
                                            </div>
            
                                            <div className="techstack">
                                            {project.techstack.map((tech: string) => (
                                                <Tag key={tech}>{`#${tech}`}</Tag>
                                            ))}
                                            </div>
                                            <div className="detail">
                                                <div className="detail-action-group">
                                                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                                                        <h4>Production wasn't publish yet</h4>
                                                        <p>You can see an example of source code and images of this project.</p>
                                                    </div>
                                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                                                        <Button size={size} onClick={() => window.open(project.github)}>Github Source</Button>
                                                        <Button size={size}>See Images</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>)
                                    }}
                                    </ReactResizeDetector>
                            </ProjectItemBox>
                        ))}
                        </ProjectsList>
                        <a style={{ color: '#1C5F9C' }} href="https://bitbucket.org/josphr/">See more projects</a>
                    </div>
                </div>
            </Section>
        )
}
