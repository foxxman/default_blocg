
import React, { FC } from 'react'
import classNames from 'classnames'
import { IconProps } from '../../../types/icons'

const CloseOutlineIcon: FC<IconProps> = ({ className }) => {

    const classes = classNames(className, "ionicon")
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={classes}  
            viewBox="0 0 512 512"
        >
            <path 
                fill="none" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="32" 
                d="M368 368L144 144M368 144L144 368"
            />
        </svg>
    )
}

export default CloseOutlineIcon
