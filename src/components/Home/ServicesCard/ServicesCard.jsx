import './ServicesCard.scss'


const ServicesCard = () => {
    return (
        <div>
            <h1 className='head'>Services</h1>
        <div className="blog-card">
          <div className="meta">
            <div className="photo" style={{backgroundImage: 'url(https://i.pinimg.com/564x/51/34/a8/5134a892b94f11146cd3dcd4deb32ef7.jpg)'}} />
          </div>
          <div className="description">
            <h1>3D Printing</h1>
            <p> Our 3D print service provides a high-quality, affordable option for bringing your designs to life. With our state-of-the-art technology and experienced team, we can produce highly detailed and accurate prints in a variety of materials, including plastics and metals.
            </p>
          </div>
        </div>
        <div className="blog-card alt">
          <div className="meta">
            <div className="photo" style={{backgroundImage: 'url(https://marvle3d.co.nz/6682-large_default/revopoint-mini-3d-scanner-blue-lightprecision-002mm-dual-axis-turntable-combo.jpg)'}} />
          </div>
          <div className="description">
            <h1>3D Scanning</h1>
            <p> Our 3D scanning service uses advanced technology to capture detailed and accurate digital replicas of physical objects.
            </p>
          </div>
        </div>
        <div className="blog-card">
          <div className="meta">
            <div className="photo" style={{backgroundImage: 'url(https://i.pinimg.com/564x/49/7f/1e/497f1ed6f2dba10f464bd1db1beae941.jpg)'}} />
          </div>
          <div className="description">
            <h1>3D Prototype</h1>
            <p> 
            3D prototyping is a process that involves creating a physical object from a digital model using additive manufacturing technologies such as 3D printing.
            </p>
          </div>
        </div>
      </div>
      
      
    );
}

export default ServicesCard