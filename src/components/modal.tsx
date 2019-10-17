import React from 'react'
import ReactDOM from 'react-dom';

interface Props {
    isShowing: boolean
    hide: () => void
    children: React.ReactNode
}

export default function Modal(props: Props) {

    return (
      props.isShowing ? ReactDOM.createPortal(
        <div id="portal">
            {props.children}
            <button onClick={props.hide}></button>
        </div>, document.createElement('div')
        ) : null
    )
}
