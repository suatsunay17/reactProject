// import React from 'react';
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBIcon,
//   MDBBtn
// } from 'mdb-react-ui-kit';

// export default function Footer() {
//   return (
//     <MDBFooter className='bg-light text-center text-white'>
//       <MDBContainer className='p-4 pb-0'>
//         <section className='mb-4'>
//           <MDBBtn
//             floating
//             className='m-1'
//             style={{ backgroundColor: '#3b5998' }}
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab icon='facebook-f' />
//           </MDBBtn>

//           <MDBBtn
//             floating
//             className='m-1'
//             style={{ backgroundColor: '#55acee' }}
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab icon='twitter' />
//           </MDBBtn>

//           <MDBBtn
//             floating
//             className='m-1'
//             style={{ backgroundColor: '#dd4b39' }}
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab icon='google' />
//           </MDBBtn>
//           <MDBBtn
//             floating
//             className='m-1'
//             style={{ backgroundColor: '#ac2bac' }}
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab icon='instagram' />
//           </MDBBtn>

//           <MDBBtn
//             floating
//             className='m-1'
//             style={{ backgroundColor: '#0082ca' }}
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab icon='linkedin-in' />
//           </MDBBtn>

//           <MDBBtn
//             floating
//             className='m-1'
//             style={{ backgroundColor: '#333333' }}
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab icon='github' />
//           </MDBBtn>
//         </section>
//       </MDBContainer>

//       <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         © 2020 Copyright:
//         <a className='text-white' href='https://mdbootstrap.com/'>
//           MDBootstrap.com
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }

import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedin, FaGithub,FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <p>© 2023 PrintWorx. All rights reserved.</p>
      </div>
      <div className={styles.social}>
        <a href="https://www.linkedin.com/in/suat-sunay-081512227/"><FaLinkedin /></a>
        <a href="https://github.com/suatsunay17"><FaGithub /></a>
        <a href="https://www.instagram.com/suat.sunay17/"><FaInstagram/></a>
      </div>
    </footer>
  );
}

export default Footer