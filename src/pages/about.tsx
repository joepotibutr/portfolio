import React from 'react'
import {NavigationContext} from './index'
import { NAVIGATION } from '../constants';
import { Button, Section, Wave } from '../components/'
import styled from 'styled-components'

const  GithubLogo = require('../assets/github-logo.png')
const  LinkedinLogo = require('../assets/linkedin-letters.png')
const  LetterLogo = require('../assets/envelope.png')
const  IndividualPicture = require('../images/individual.png')
const  ArrowDown = require('../assets/arrow-down-sign-to-navigate.svg') 

const AboutPage = styled.div`
    margin-top:100px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 40% 60%;
    height: 100%;
    width:100%;

    @media (max-width: 576px) {
        margin:0;
    }

    .welcome {
        padding: 0;
        grid-column:1/2;
        grid-row:1/2;
    }

    .self-cartoon {
        grid-column:2/3;
        grid-row:1/4;
    }

    .tour-button {
        margin: 20px 0;
        grid-column:1/2;
        grid-row: 2/3;
    }

    .social {
        height:50px;
        display:flex;
        justify-content: flex-start;
        align-items: center;
        grid-column:1/2;
        grid-row: 3/4;

        .github,.linkedin {
            margin-right: 30px;
        }

        .email {
            transform:translate(0, 2px);
        }

        .logo {
            max-width: 15px;
            width: 100%;
            height: auto;
            cursor:pointer;
        }
    }


    @media only screen and (max-width: 720px) {
        grid-template-columns: auto;
        grid-template-rows: min-content;

        .welcome {
            max-width: 500px;
            margin: 0 auto;
            padding: 0 20px;
            grid-row:2/3;
            text-align:center;
        }
        
        .self-cartoon {
            grid-column:1/2;
            grid-row:1/2;
            margin: 0 auto;
            max-width: 250px;
            position:relative;
        }

        .tour-button {
            justify-content: center !important;
            grid-column:1/2;
            grid-row: 3/4;
        }
        .social {

            justify-content: center;
            grid-row: 4/5;
        }
    }
`



export default () => {
    return (
        <Section height={6} mobile={600}>
            <AboutPage>
                <div className="welcome" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'  }}>
                    <h1>Hi people!</h1>
                    <h3>I'm Joe and I'm a full stack web developer</h3>
                    <p style={{ margin: 0 }}>I'm a developer with extensive experience from many projects and full-time career. Latest web development technologies that was used to provide business needs.</p>
                </div>
                <div className="tour-button" style={{ width: '100%', display: 'flex',justifyContent: 'start' }}>
                    <div style={{ marginRight: '20px' }}>
                        <Button onClick={() => window.open('https://drive.google.com/file/d/1oIE0cHlGoacFtfgjx7RjfyuP0G8SksK1/view?usp=sharing')}>View resume</Button>
                    </div>
                    <div>
                        <NavigationContext.Consumer>
                        {(goto) => (
                            <Button transparent onClick={() => goto(NAVIGATION.CONTACT)}>Get in touch <span style={{ marginLeft: '5px',color: 'lightblue'}}><img style={{ maxWidth: '12px', margin: 0 }}  src={ArrowDown}/></span></Button>
                        )}
                        </NavigationContext.Consumer>
                    </div>
                </div>
                <div className="self-cartoon" style={{ display: 'flex', alignItems: 'center',justifyContent:'center' }}>
                    <img style={{ maxWidth: '350px', width: '100%', height: 'auto' }} src={IndividualPicture} />
                    <div style={{ position: 'absolute',zIndex: -1 }}>
                        <Wave />
                    </div>
                </div>
                <div className="social">
                    <a target="_blank" href="https://www.github.com/vchrpng" className="github">
                        <img className="logo" src={GithubLogo} alt=""/>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/vchrpng" className="linkedin">
                        <img className="logo" src={LinkedinLogo} alt=""/>
                    </a>
                    <a target="_blank" href={`mailto:vchrpng@gmail.com`} className="email">
                        <img className="logo" src={LetterLogo} alt=""/>
                    </a>
                </div>
            </AboutPage>
        </Section>
    )
}
