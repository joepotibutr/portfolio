import React from 'react'
import styled from 'styled-components'
import { Button, Section } from '../components'
import { useOutsideClick } from '../utils/helper'
import ReactResizeDetector from 'react-resize-detector'


const projects = require('../data/projects.json')
const repoIcon = require('../images/icons8-repository-30.png')


const ProjectsList = styled.ul`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(310px,1fr));
    /* grid-template-rows: 255px; */
    grid-gap: 10px;
    margin:0;
    margin-bottom: 10px;

`

const Tag = styled.span`
    background: cornflowerblue;
    border-radius: 3px;
    font-size: 12px;
    font-weight: bold;
    padding: 5px;
    margin-right: 10px;
    color:white;
`

const ProjectItemBox = styled.li<{ active: boolean }>`
    background: white;
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
            <Section mobile={960} height={7}>
                <div style={{ width: '100%', maxWidth: '720px'}}>
                    <h2>Projects</h2>
                    <div ref={outsideRef}style={{ width: '100%'}}>
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
                                                <h4 style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems:'center'
                                                }}>
                                                    <div style={{
                                                           display: 'flex',
                                                           justifyContent: 'space-between',
                                                           alignItems:'center'
                                                     }}>
                                                        <img style={{ width: '20px' }} src={repoIcon} />
                                                        <span style={{ marginLeft: '20px' }}>{project.name}</span>
                                                    </div>
                                                    <span>{project.year}</span>
                                                </h4> 
                                                <p>{project.description}</p>
                                            </div>
            
                                            <div className="techstack">
                                            {project.techstack.map((tech: string) => (
                                                <Tag key={tech}>{`#${tech}`}</Tag>
                                            ))}
                                            </div>
                                            <div className="detail">
                                                <div className="detail-action-group">
                                                    {project.link ?  
                                                    null :
                                                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                                                        <h4>Production wasn't published yet</h4>
                                                        <p>You can see an example of the source code of this project by hitting the button below.</p>
                                                    </div>}
                                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                                                        <Button size={size} onClick={() => window.open(project.github)}>Github Source</Button>
                                                        <Button size={size} disabled={!project.link} onClick={() => window.open(project.link)}>Visit Site</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>)
                                    }}
                                    </ReactResizeDetector>
                            </ProjectItemBox>
                        ))}
                        </ProjectsList>
                        <a style={{ color: '#1C5F9C' }} href="https://github.com/joepotibutr?tab=repositories">See more projects</a>
                    </div>
                </div>
            </Section>
        )
}
