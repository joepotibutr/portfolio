import React from 'react'
import {NavigationContext} from './index'
import { NAVIGATION } from '../constants';
import { Button, Section } from '../components/'
import styled from 'styled-components'

const  IndividualPicture = require('../assets/individual.png')

const AboutPage = styled.div`
    margin-bottom: 20px;
    display: flex;
    height: 100%;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
        > div {
            width: 100% !important;
        }
    }
`

export default () => {
    return (
        <Section height={60}>
            <AboutPage>
                <div style={{
                    height: '100%',
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'  }}>
                        <h1>Hi people</h1>
                        <h2 style={{ color: 'darkgray' }}>I'm Joe and I'm a full stack web developer </h2>
                    </div>
                    <div style={{ width: '100%', display: 'flex' }}>
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
                </div>
                <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <img style={{ maxWidth: '350px', width: '100%', height: 'auto' }} src={IndividualPicture} />
                </div>
            </AboutPage>
        </Section>
    )
}
