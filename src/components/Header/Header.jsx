import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { ModeTheme } from '../ModeTheme/ModeTheme'

export const Header = () => {
    const { modeTheme } = useContext(AppContext)
    
    return (
        <header className={`transition-colors flex gap-4 flex-col font-bold ${modeTheme ? 'bg-veryDarkBlueTOP' : 'bg-veryPaleBlue'}   px-5 pt-4 pb-8 rounded-b-[40px] md:pt-8 md:h-44 md:flex-row md:justify-between lg:h-80 lg:px-10 lg:pt-10`}>
            <div className='max-w-lg '>
                <h2 className={`text-2xl ${modeTheme ? 'text-white' : 'text-veryDarkBlueText'}  font-bold md:text-3xl lg:text-4xl `}>Social Media Dashboard</h2>
                <p className={`text-sm ${modeTheme ? 'text-desaturatedBlue' : 'text-darkGrayishBlueText'} md:text-lg`}>Total Followers: 23,004</p>
            </div>
            <div className='border-b border-gray-600 md:hidden'></div>
            <ModeTheme />
        </header>
    )
}
