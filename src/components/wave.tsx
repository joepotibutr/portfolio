import React from 'react'
import styled from 'styled-components'

const WaveStyling = styled.svg`
    width: 1000px;
    height: 1000px;
    position: absolute;
    z-index: -1;
    fill-opacity: .3;
    top: -170px;
    left: 400px;

    @media only screen and (max-width: 720px) {
        /* width: 500px; */
        /* height: 800px; */
        left: 1px;
    }
`

export default () => 
    (<WaveStyling  
    xmlns="http://www.w3.org/2000/svg">
        <path style={{
            transform: `translate(50%, 50%)`
        }} d="M113.1,-163.2C156.3,-148.3,207.8,-133.3,225.1,-101.1C242.4,-68.9,225.6,-19.4,214.9,28.4C204.2,76.3,199.6,122.6,172.9,145.3C146.2,168,97.5,167,54.3,175.3C11.1,183.6,-26.6,201.2,-63.8,198.7C-101,196.3,-137.8,173.8,-161.1,142.2C-184.4,110.6,-194.1,70,-203.8,27C-213.6,-15.9,-223.2,-61.1,-202.3,-86.3C-181.4,-111.6,-129.9,-116.8,-91.1,-133.7C-52.3,-150.7,-26.1,-179.3,4.4,-186.2C35,-193.1,69.9,-178.1,113.1,-163.2Z" fill="#8ed1fc" />
    </WaveStyling>)