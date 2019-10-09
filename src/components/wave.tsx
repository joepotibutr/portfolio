import React from 'react'
import styled from 'styled-components'

const WaveStyling = styled.svg`
    width: 100%;
    height: 100%;
    fill: blueviolet;
    position: absolute;
    z-index: -1;`

export default () => <WaveStyling xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L26.7,197.3C53.3,171,107,117,160,128C213.3,139,267,213,320,218.7C373.3,224,427,160,480,112C533.3,64,587,32,640,37.3C693.3,43,747,85,800,96C853.3,107,907,85,960,69.3C1013.3,53,1067,43,1120,48C1173.3,53,1227,75,1280,90.7C1333.3,107,1387,117,1413,122.7L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></WaveStyling>