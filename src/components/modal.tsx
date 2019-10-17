import React from 'react'

interface Props {
    isShowing: boolean
    hide: () => void
    children: React.ReactNode
}

export default function Modal(props: Props) {

    return (
      props.isShowing ? 
        <div>
            {props.children}
            <button onClick={props.hide}></button>
        </div> : null
    )
}
