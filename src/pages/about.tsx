import React from 'react'
import {NavigationContext} from './index'
import { NAVIGATION } from '../constants';
import { Button, Section, Wave } from '../components/'
import styled from 'styled-components'


const  IndividualPicture = require('../images/individual.png')

const AboutPage = styled.div`
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 50% 50%;
    height: 100%;
    width:100%;

    .welcome {
        grid-column:1/2;
        grid-row:1/2;
    }

    .self-cartoon {
        grid-column:2/3;
        grid-row:1/3;
    }

    .tour-button {
        grid-column:1/2;
        grid-row: 2/3;
    }


    @media only screen and (max-width: 720px) {
        grid-template-columns: auto;
        grid-template-rows: min-content;
        .welcome {
            text-align:center;
        }
        
        .self-cartoon {
            grid-column:1/2;
            grid-row:2/3;
        }
        .tour-button {
            justify-content: center !important;
            grid-column:1/2;
            grid-row: 3/4;
        }
    }
`



export default () => {
    return (
        <Section height={60}>
                <Wave />
            <AboutPage>
                <div className="welcome" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'  }}>
                    <h1>Hi people</h1>
                    <h3>I'm Joe and I'm a full stack web developer </h3>
                </div>
                <div className="tour-button" style={{ width: '100%', display: 'flex',justifyContent: 'start' }}>
                    <div style={{ marginRight: '20px' }}>
                        <Button onClick={() => window.open('https://drive.google.com/file/d/1oIE0cHlGoacFtfgjx7RjfyuP0G8SksK1/view?usp=sharing')}>View Resume</Button>
                    </div>
                    <div>
                        <NavigationContext.Consumer>
                        {(goto) => (
                            <Button onClick={() => goto(NAVIGATION.CONTACT)}>Get in touch</Button>
                        )}
                        </NavigationContext.Consumer>
                    </div>
                </div>
                <div className="self-cartoon" style={{ display: 'flex', alignItems: 'center',justifyContent:'center' }}>
                    <img style={{ maxWidth: '350px', width: '100%', height: 'auto' }} src={IndividualPicture} />
                </div>
            </AboutPage>
        </Section>
    )
}
