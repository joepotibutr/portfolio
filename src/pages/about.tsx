import React, { Component } from 'react'
import {NavigationContext} from './index'
import { NAVIGATION } from '../constants';
import { Button, Section } from '../components'

interface Props {
    
}
interface State {
    
}

export default class About extends Component<Props, State> {
    state = {}

    render() {
        return (
           
<div>
<Section height={60}>
        <div style={{ marginBottom: '20px' }}>
        <h1>Hi people</h1>
    <p>I am a full stack web developer based in Bangkok, Thailand. I started in the modern web development since studying in college when I watch videos and read about full stack javascript development and made some projects after that.
        Over a couple years I have doing my side projects and then worked with latest technology with a company that I have gained a lot of knowledge and experience with JavaScript and its ecosystem - things like TypeScript, React, Node and many more.
        I have a huge passion for front and backend web development which I expanding my knowledge every day and staying up to date</p>
        </div>
        <div style={{ width: '100%', display: 'flex' }}>
            <div style={{
                marginRight: '20px'
            }}>
                <Button>View Resume</Button>
            </div>
            <div>
                <NavigationContext.Consumer>
                {(goto) => (
                    <Button onClick={() => goto(NAVIGATION.CONTACT)}>Get in touch</Button>
                )}
                </NavigationContext.Consumer>
           
            </div>
        </div>
    </Section>
</div>

        )
    }
}
