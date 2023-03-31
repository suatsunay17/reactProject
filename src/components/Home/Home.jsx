import React from 'react'
import ServicesCard from './ServicesCard'
import Carousel from './DarkCarousel'
import styles from './Home.module.css'
import { Video } from './Video'
import { Link } from 'react-router-dom'
import sample from './sample.mp4'


export const Home = () => {
    return (
        <div className='home'>
            <div className={styles.content}>
                <video autoPlay loop muted className={styles.backVideo}>
                    <source src={sample} type='video/mp4' />
                </video>
                <h1 className={styles.h1}>PrintWorx</h1>
                <Link className={styles.p} to={'/catalog'}>Explore</Link>
            </div>
            <ServicesCard />
            <Carousel />
        </div >
    )
}

