import React from 'react'
import { Card } from '../components/Card/Card'
import iconFacebook from '../assets/images/icon-facebook.svg'
import iconTwitter from '../assets/images/icon-twitter.svg'
import iconInstagram from '../assets/images/icon-instagram.svg'
import iconYoutube from '../assets/images/icon-youtube.svg'


export const Cards = () => {
  return (
    <section className='px-5 flex flex-col gap-5 -mt-8 md:grid md:grid-cols-2 md:-mt-14 lg:grid-cols-4 lg:px-10 lg:-mt-36'>
        <Card
          icon={iconFacebook}
          user='@nathanf'
          amount='1987'
          day='12'
          border='#198ff5'
          platform='facebook'
        />
        <Card
          icon={iconTwitter}
          user='@nathanf'
          amount='1044'
          day='99'
          border='#1ca0f2'
          platform='twitter'
        />
        <Card
          icon={iconInstagram}
          user='@realnathanf'
          amount='11k'
          day='1099'
          platform='instagram'
        />
        <Card
          icon={iconYoutube}
          user='Nathan F.'
          amount='8239'
          day='144'
          platform='youtube'
          up={false}
          border='#c4032a'
        />
    </section>
  )
}
