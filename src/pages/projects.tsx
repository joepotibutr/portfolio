import React from 'react'
import styled from 'styled-components'
import { Section } from '../components'
import OutsideClickHandler from 'react-outside-click-handler';
import { Button } from '../components'


const projects = require('../data/projects.json')


const ProjectsList = styled.ul`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(280px,1fr));
    /* grid-template-rows: 255px; */
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
            width: 100%;
            margin: 0 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
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

        return (
            <Section height={70}>
                <div>
                    <h2>Projects</h2>
                    <OutsideClickHandler onOutsideClick={() => setOpen(-1)} >
                        <ProjectsList>
                        {projects.map((project: any, index: number) => (
                            <ProjectItemBox key={project.name} active={index === currentIdx} onClick={() => setOpen(index)}>
                                <div
                                    className="project-title"
                                    style={{
                                    height: '150px',
                                    marginBottom: '20px'
                                }}>
                                <h5 style={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>{project.name}<span>{project.year}</span></h5> 
                                <p>{project.description}</p>
                                </div>

                                <div className="techstack">
                                {project.techstack.map((tech: string) => (
                                    <Tag key={tech}>{`#${tech}`}</Tag>
                                ))}
                                        
                                </div>
                                <div className="detail">
                                    <div className="detail-action-group">
                                        <Button onClick={() => window.open(project.url)}>Source</Button>
                                        <Button>View</Button>
                                    </div>
                                </div>
                            </ProjectItemBox>
                        ))}
                        </ProjectsList>
                    </OutsideClickHandler>
                </div>
            </Section>
        )
}
