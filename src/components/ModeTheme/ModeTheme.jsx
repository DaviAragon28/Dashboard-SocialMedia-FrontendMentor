import { Switch } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { RiSunFill } from 'react-icons/ri'
import { RiMoonFill } from 'react-icons/ri'
import { yellow } from '@mui/material/colors'


export const ModeTheme = () => {
    const { modeTheme, handleModeTheme } = useContext(AppContext)

    return (
        <div className='transition-colors flex justify-between items-center md:items-start'>
            <span className={` text-sm ${modeTheme ? 'text-desaturatedBlue' : 'text-darkGrayishBlueText'}`}>
                {
                    modeTheme ? <RiMoonFill size={30} /> : <RiSunFill size={30} color='orange'/>    
                }
            </span>
            <Switch onChange={handleModeTheme} defaultChecked />
        </div>
    )
}
