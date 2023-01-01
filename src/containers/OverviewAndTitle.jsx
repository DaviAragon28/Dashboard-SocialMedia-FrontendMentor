import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { CardsOverviewToday } from './CardsOverviewToday'

export const OverviewAndTitle = () => {
    const { modeTheme } = useContext(AppContext)
    return (
        <section className='px-5 flex flex-col gap-6 lg:px-10 lg:gap-10 lg:mt-10'>
            <h2 className={`text-2xl font-bold ${modeTheme ? 'text-white' : 'text-darkGrayishBlueText'} md:text-3xl lg:text-4xl `}>Overview - Today</h2>
            <CardsOverviewToday />
        </section>
    )
}
