import '../assets/style/Nav.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Nav () {
    return (

<>

<section className='nav-sec'>
  <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Skill Bag</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product">Our Courses</Link>
        </li>
        <li className="nav-item">
          <NavHashLink className="nav-link" to="/product#plan">Plans</NavHashLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <NavHashLink className="nav-link" to="/about#cont">Get In Touch</NavHashLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
          <NavHashLink className="nav-link" to="/blog#faq">FAQs</NavHashLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login/Register</Link>
        </li>
      </ul>
      <button className='btn-nav'><Link className='nav-log' to="/login">Enroll Now</Link></button>
    </div>
  </div>
</nav>
</section>

</>

    )
}

export default Nav;