import { Switch } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export const ModeTheme = () => {
    const { modeTheme, handleModeTheme } = useContext(AppContext)

    return (
        <div className='transition-colors flex justify-between items-center'>
            <span className={` text-sm ${modeTheme ? 'text-desaturatedBlue' : 'text-darkGrayishBlueText'}`}>
                {
                    modeTheme ? 'Dark Mode' : 'Light Mode'
                }
            </span>
            <Switch onChange={handleModeTheme} defaultChecked />
        </div>
    )
}
