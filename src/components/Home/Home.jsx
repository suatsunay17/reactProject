import React from 'react'
import ServicesCard from './ServicesCard'

export const Home = () => {
    return (
        <div className='home'>
            <div>
                <h1 className='services'>Services</h1>
                <ServicesCard />
                {/* <Carousel /> */}
            </div>
        </div>
    )
}

