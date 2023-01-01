import React from 'react'
import { CardOverviewToday } from '../components/CardOverviewToday/CardOverviewToday'
import iconFacebook from '../assets/images/icon-facebook.svg'
import iconTwitter from '../assets/images/icon-twitter.svg'
import iconInstagram from '../assets/images/icon-instagram.svg'
import iconYoutube from '../assets/images/icon-youtube.svg'



export const CardsOverviewToday = () => {
  return (
    <section className=' flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <CardOverviewToday
            title='Page Views'
            amount='87'
            porcent='3'
            icon={iconFacebook}
        />
        <CardOverviewToday
            title='Likes'
            amount='52'
            porcent='2'
            icon={iconFacebook}
            up={false}
            />
        <CardOverviewToday
            title='Likes'
            amount='5462'
            porcent='2257'
            icon={iconInstagram}
            />
        <CardOverviewToday
            title='Profile Views'
            amount='52k'
            porcent='1375'
            icon={iconInstagram}
        />
        <CardOverviewToday
            title='Retweets'
            amount='117'
            porcent='303'
            icon={iconTwitter}
            />
        <CardOverviewToday
            title='Likes'
            amount='507'
            porcent='553'
            icon={iconTwitter}
            />
        <CardOverviewToday
            title='Likes'
            amount='107'
            porcent='19'
            icon={iconYoutube}
            up={false}
            />
        <CardOverviewToday
            title='Total Views'
            amount='1407'
            porcent='12'
            icon={iconYoutube}
            up={false}
            />
    </section>
  )
}
