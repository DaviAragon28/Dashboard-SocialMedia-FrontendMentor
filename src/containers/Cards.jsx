import React from 'react'
import { Card } from '../components/Card/Card'
import iconFacebook from '../assets/images/icon-facebook.svg'
import iconTwitter from '../assets/images/icon-twitter.svg'
import iconInstagram from '../assets/images/icon-instagram.svg'
import iconYoutube from '../assets/images/icon-youtube.svg'


export const Cards = () => {
  return (
    <section className='px-5 flex flex-col gap-4 -mt-8'>
        <Card
          icon={iconFacebook}
          user='@nathanf'
          amount='1987'
          day='12'
        />
        <Card
          icon={iconTwitter}
          user='@nathanf'
          amount='1044'
          day='99'
        />
        <Card
          icon={iconInstagram}
          user='@realnathanf'
          amount='11k'
          day='1099'
        />
        <Card
          icon={iconYoutube}
          user='Nathan F.'
          amount='8239'
          day='144'
          platform='Subscribers'
          up={false}
        />
    </section>
  )
}
