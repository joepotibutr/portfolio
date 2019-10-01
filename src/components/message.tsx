import React from 'react'

interface Props {
    message: string
}

export default function Message(props: Props) {
    return (
        <div>
            {props.message}
        </div>
    )
}
