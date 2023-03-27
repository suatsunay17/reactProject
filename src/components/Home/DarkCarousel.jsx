import Carousel from 'react-bootstrap/Carousel';
import styles from './DarkCarousel.module.css'

function DarkCarousel() {
    return (

        <div className={styles.mainCarousel}>
            <h1 className={styles.heading}>PROJECTS</h1>
            <div className={styles.wrapper}>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block mx-auto"
                            src="https://assets.mugglenet.com/wp-content/uploads/2019/07/Hogwarys-Harry-Potter-3D-Print-5-1024x683.jpeg"
                            alt="First slide"
                            height={"550"}
                        />
                        <Carousel.Caption>
                            <h5 className={styles.h5} >First slide label</h5>
                            <p className={styles.p}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block mx-auto"
                            src="https://3dprinterchat.com/wp-content/uploads/2017/06/Jet-engine.jpg"
                            alt="Second slide"
                            height={"550"}
                        />
                        <Carousel.Caption>
                            <h5 className={styles.h5}>Second slide label</h5>
                            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block mx-auto"
                            src="https://preview.free3d.com/img/2016/01/2408174068017661902/wsffn1gl.jpg"
                            alt="Third slide"
                            height={"550"}
                        />
                        <Carousel.Caption>
                            <h5 className={styles.h5}>Third slide label</h5>
                            <p className={styles.p}>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default DarkCarousel;