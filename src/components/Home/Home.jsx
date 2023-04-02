import React from 'react'
import ServicesCard from './ServicesCard/ServicesCard'
import Projects from './Projects/Projects'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import sample from './sample.mp4'
import LatestProducts from './Latest/LatestProducts'


export const Home = () => {
    return (
        <div className='home'>
            <div className={styles.content}>
                <video autoPlay loop muted className={styles.backVideo}>
                    <source src={sample} type='video/mp4' />
                </video>
                <h1 className={styles.h1}>Printopia</h1>
                <Link className={styles.p} to={'/catalog'}>Explore</Link>
            </div>
            <ServicesCard />
            <LatestProducts />
            <Projects />
        </div >
    )
}

