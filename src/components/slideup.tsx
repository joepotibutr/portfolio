import React from 'react'
import styled from 'styled-components'

const Slider = styled.div<{ slideUp: boolean, height: number }>`
    width: 100%;
    height: auto;
    top: 0;
    transition: .5s ease-in;
    transform: translateY(${props => props.slideUp ?  `-${props.height}px` : 0});
    position:fixed;
`

interface Props {
    children: React.ReactChildren | JSX.Element
}

export default function SlideUpHeader({ children }: Props) {
    // const [newScrollPos,updateNewScroll] = React.useState(0) 
    // const [lastScrollPos, updateLastScroll] = React.useState(0)
    const [slideUp, slide] = React.useState(false)

    const slideRef = React.useRef(null)

    // const onScroll = () => {

    // updateLastScroll(window.scrollY)

    // if (newScrollPos < lastScrollPos && 
    //      (lastScrollPos > 280 && newScrollPos)){
    //         slide(true)
    // } else if (newScrollPos > lastScrollPos) {
    //       setTimeout(() => slide(false) ,500)
    //   }
    //   updateNewScroll(lastScrollPos)
    // }

    // React.useEffect(() => {
    //     window.addEventListener('scroll',onScroll)
    // })


    return (
        <Slider height={60} ref={slideRef} slideUp={slideUp}>{children}</Slider>
    )
}
