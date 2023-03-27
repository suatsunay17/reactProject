import React from 'react'
import ServicesCard from './ServicesCard'
import Carousel from './DarkCarousel'
import styles from './Home.module.css'

export const Home = () => {
    return (
        <div className='home'>
            <div>
                <ServicesCard />
                <Carousel />
            </div>
        </div>
    )
}

