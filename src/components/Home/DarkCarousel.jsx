import Carousel from 'react-bootstrap/Carousel';
import styles from './DarkCarousel.module.css'

function DarkCarousel() {
    return (

        <div className={styles.mainCarousel}>
            <h1 className={styles.heading}>Projects</h1>
            <div className={styles.wrapper}>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block mx-auto"
                            src="https://assets.mugglenet.com/wp-content/uploads/2019/07/Hogwarys-Harry-Potter-3D-Print-5-1024x683.jpeg"
                            alt="First slide"
                            height={"500"}
                            
                        />
                        <Carousel.Caption>
                            <h5 className={styles.h5} >Hogwarts</h5>
                            <p className={styles.p}>3D Printed Hogwarts Castle.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block mx-auto"
                            src="https://3dprinterchat.com/wp-content/uploads/2017/06/Jet-engine.jpg"
                            alt="Second slide"
                            height={"500"}
                        />
                        <Carousel.Caption>
                            <h5 className={styles.h5}>5-Gear Transmission</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block mx-auto"
                            src="https://preview.free3d.com/img/2016/01/2408174068017661902/wsffn1gl.jpg"
                            alt="Third slide"
                            height={"500"}
                        />
                        <Carousel.Caption>
                            <h5 className={styles.h5}>Stamford Bridge</h5>
                            <p className={styles.p}>
                                3D Printed Stadium of Chelsea - Stamford Bridge.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default DarkCarousel;