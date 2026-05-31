import '../assets/style/Footer.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer () {
    return (

<>

<footer className='footer-sec py-5'>
  <div className='container'>
     <div className='row g-4 justify-content-between'>
        
     <div className='col-12 col-md-4 col-lg-3'>
         <h3 className='footer-title'>Skill Bag</h3>
         <p className='foot-para'>
          Empowering learners worldwide with premium structured course materials, expert mentorship, and industry-grade learning resources.
         </p>
     </div>

     <div className='col-6 col-md-3 col-lg-2'>
        <h5 className='footer-heading'>Explore</h5>
        <ul className='footer-links-list'>
           <li><Link className='f-text' to="/">Home</Link></li>
           <li><Link className='f-text' to="/product">Our Courses</Link></li>
           <li><NavHashLink className='f-text' to="/product#plan">Pricing Plans</NavHashLink></li>
           <li><Link className='f-text' to="/blog">Our Blog</Link></li>
        </ul>
     </div>

     <div className='col-6 col-md-3 col-lg-2'>
         <h5 className='footer-heading'>Company</h5>
         <ul className='footer-links-list'>
            <li><Link className='f-text' to="/about">About Us</Link></li>
            <li><NavHashLink className='f-text' to="/about#cont">Get In Touch</NavHashLink></li>
            <li><NavHashLink className='f-text' to="/blog#faq">FAQs</NavHashLink></li>
            <li><Link className='f-text' to="/login">Login</Link></li>
         </ul>
     </div>
         
      <div className='col-12 col-md-6 col-lg-3'>
          <h5 className='footer-heading'>Contact Us</h5>
          <ul className='footer-contact-details'>
            <li className='foot-con'>
                <i className="bi bi-envelope"></i>
                <span className='con-span'>skillbag@gmail.com</span>
            </li>
            <li className='foot-con'>
                <i className="bi bi-telephone"></i>
                <span className='con-span'>+91-9847522685</span>
            </li>
          </ul>
          <div className='social-icons-footer d-flex justify-content-center'>
            <a href="https://facebook.com" ><i className="bi bi-facebook"></i></a>
            <a href="https://instagram.com" ><i className="bi bi-instagram"></i></a>
            <a href="https://youtube.com" ><i className="bi bi-youtube"></i></a>
         </div>
      </div>

     </div>

     <hr className='foot-divider' />

     <div className='row align-items-center footer-bottom'>

        <div className='col-12 col-md-6'>
            <p className='copyright-text'>
                &copy; {new Date().getFullYear()} Skill Bag. All Rights Reserved.
            </p>
        </div>

        <div className='col-12 col-md-6'>
           <div className='foot-legal d-flex'>
              <Link>Privacy Policy</Link>
              <Link>Terms Of Service</Link>
           </div>
        </div>

     </div>

  </div>
</footer>

</>

    )
}

export default Footer;