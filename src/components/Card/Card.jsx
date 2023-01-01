import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import IconDown from '../../assets/images/icon-down.svg'
import IconUp from '../../assets/images/icon-up.svg'

export const Card = ({ icon, user, amount, platform, day, up = true, border }) => {
    const { modeTheme } = useContext(AppContext)

    return (
        <div className={` cursor-pointer justify-around  text-white  items-center flex flex-col h-56 rounded-md border-t-4 ${platform === 'facebook' && 'border-facebook'} ${platform === 'twitter' && 'border-twitter'} ${platform === 'youtube' && 'border-youtube'} ${platform === 'instagram' && 'border-t-0'}  transition-colors ${modeTheme ? 'bg-darkDesaturatedBlue hover:brightness-125' : 'hover:brightness-90 bg-lightGrayishBlueCardBG'} relative `}>
            {
                platform === 'instagram'
                &&
                <div className='h-1 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#fdc468] to-[#df4996] rounded-t-md'></div>
            }
            <div className='flex gap-2'>
                <img className='object-contain' src={icon} alt="icon" />
                <p className={`font-bold ${modeTheme ? 'text-desaturatedBlue' : 'text-darkGrayishBlueText'}`}>{user}</p>
            </div>
            <div className='flex flex-col items-center'>
                <p className={`text-5xl font-bold mb-1 ${modeTheme ? 'text-white' : 'text-veryDarkBlueText'} `}>{amount}</p>
                <p className={` ${modeTheme ? 'text-desaturatedBlue' : 'text-darkGrayishBlueText'} tracking-[4px]`}>
                    {
                        platform === 'youtube'
                            ? 'SUBSCRIBERS'
                            : 'FOLLOWERS'
                    }
                </p>
            </div>
            <div className='flex gap-2 items-center'>
                {
                    up
                        ?
                        <>
                            <img className='object-contain' src={IconUp} alt="" />
                            <p className='text-sm font-bold text-limeGreen'>{day} Today</p>
                        </>
                        :
                        <>
                            <img className='object-contain' src={IconDown} alt="" />
                            <p className='text-sm font-bold text-brightRed'>{day} Today</p>
                        </>
                }

            </div>
        </div>
    )
}
