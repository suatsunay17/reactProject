import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import styles from './ServicesCard.module.css'

function ServicesCard() {

    return (
        <div className={styles.services}>
            <h1 className={styles.heading}>SERVICES</h1>
            <CardGroup>
                <Card className={styles.card}>
                    <Card.Img variant="top" src="https://i.pinimg.com/564x/51/34/a8/5134a892b94f11146cd3dcd4deb32ef7.jpg" />
                    <Card.Body>
                        <Card.Title>3D Printing</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card className={styles.card}>
                    <Card.Img variant="top" src="https://marvle3d.co.nz/6682-large_default/revopoint-mini-3d-scanner-blue-lightprecision-002mm-dual-axis-turntable-combo.jpg" />
                    <Card.Body>
                        <Card.Title>3D Scanning</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                   
                </Card>
                <Card className={styles.card}>
                    <Card.Img variant="top" src="https://i.pinimg.com/564x/49/7f/1e/497f1ed6f2dba10f464bd1db1beae941.jpg" />
                    <Card.Body>
                        <Card.Title>Prototyping</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
            </CardGroup>
        </div>

    );

}

export default ServicesCard