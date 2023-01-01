import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { CardsOverviewToday } from './CardsOverviewToday'

export const OverviewAndTitle = () => {
    const { modeTheme } = useContext(AppContext)
    return (
        <section className='px-5 flex flex-col gap-6'>
            <h2 className={`text-2xl font-bold ${modeTheme ? 'text-white' : 'text-darkGrayishBlueText'} `}>Overview - Today</h2>
            <CardsOverviewToday />
        </section>
    )
}
