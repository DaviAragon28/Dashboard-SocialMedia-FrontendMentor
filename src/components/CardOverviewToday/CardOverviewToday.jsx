import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import IconDown from '../../assets/images/icon-down.svg'
import IconUp from '../../assets/images/icon-up.svg'


export const CardOverviewToday = ({ icon, title, amount, porcent, up = true }) => {
    const { modeTheme } = useContext(AppContext)
    return (
        <div className={` transition-colors flex flex-col px-10 justify-around items-center h-32 rounded-md ${modeTheme ? 'bg-darkDesaturatedBlue' : 'bg-lightGrayishBlueCardBG'}`}>
            <div className='flex justify-between w-full'>
                <p className='text-desaturatedBlue font-bold'>{title}</p>
                <img className='object-contain' src={icon} alt="" />
            </div>
            <div className='flex justify-between w-full items-center'>

                <p className={`text-5xl font-bold ${modeTheme ? 'text-white' : 'text-black'}`}>{amount}</p>
                <div className='flex gap-1'> 

                    {
                        up
                            ?
                            <>
                                <img className='object-contain' src={IconUp} alt="" />
                                <p className='text-limeGreen'>{porcent}%</p>
                            </>
                            :
                            <>

                                <img className='object-contain' src={IconDown} alt="" />
                                <p className='text-brightRed'>{porcent}%</p>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}
