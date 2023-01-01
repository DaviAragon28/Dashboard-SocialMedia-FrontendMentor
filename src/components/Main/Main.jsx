import React, { useContext } from 'react'
import { Cards } from '../../containers/Cards'
import { CardsOverviewToday } from '../../containers/CardsOverviewToday'
import { OverviewAndTitle } from '../../containers/OverviewAndTitle'
import { AppContext } from '../../context/AppContext'
import { Header } from '../Header/Header'

export const Main = () => {
  const { modeTheme } = useContext(AppContext)
  return (
    <div className={`flex flex-col gap-5 ${modeTheme ? 'bg-veryDarkBlueBG' : 'bg-white'} h-full pb-10  transition-colors`}>

      <Header />
      <Cards />

      <OverviewAndTitle />
    </div>

  )
}
