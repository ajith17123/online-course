import '../assets/style/Blog.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import blog1 from '../assets/images/blog1.jpg';
import blog2 from '../assets/images/blog2.jpg';
import blog3 from '../assets/images/blog3.jpg';

function Blog () {
    return (

<>

<section className='blog-sec py-5'>
   <div className="container">

    <div className="row mb-5" data-aos="fade-up">
      <div className="col-12 text-center">
        <span className="section-subtitle">Our Latest Insight</span>
        <h2 className="section-main-title">From The Blog</h2>
      </div>
    </div>

    <div className="row g-4">
  
      <div className="col-12" data-aos="fade-up" data-aos-delay="100">
        <div className="blog-premium-card">
          <div className="blog-img-wrapper">
            <img src={blog1} alt="UI Engineering" className="blog-native-img img-fluid" />
          </div>
          <div className="blog-content-panel">
            <h3 className="blog-post-title">Mastering Advanced UI Engineering & CSS Paradigms</h3>
            <p className="blog-short-para">
              Explore how fluid scaling layouts and custom properties turn complex user interaction interfaces into flawless fluid web environments.
            </p>
            <div className="blog-action-footer">
              <Link to="/product" className="blog-know-more-link">
                Know More About Us <i className="bi bi-arrow-right brand-icon-arrow"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12" data-aos="fade-up" data-aos-delay="200">
        <div className="blog-premium-card">
          <div className="blog-img-wrapper">
            <img src={blog2} alt="React Patterns" className="blog-native-img img-fluid" />
          </div>
          <div className="blog-content-panel">
            <h3 className="blog-post-title">Deconstructing Modern React Architecture Components</h3>
            <p className="blog-short-para">
              Diving deep into hook state compilation models to enhance scalable web ecosystems, maximizing speed optimization parameters seamlessly.
            </p>
            <div className="blog-action-footer">
              <Link to="/product" className="blog-know-more-link">
                Know More About Us <i className="bi bi-arrow-right brand-icon-arrow"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12" data-aos="fade-up" data-aos-delay="300">
        <div className="blog-premium-card">
          <div className="blog-img-wrapper">
            <img src={blog3} alt="Python Logic" className="blog-native-img img-fluid" />
          </div>
          <div className="blog-content-panel">
            <h3 className="blog-post-title">Python Logic Systems & Data Stream Management</h3>
            <p className="blog-short-para">
              A carefully structured modular overview engineered to pipeline scalable clean code backends through enterprise server environments.
            </p>
            <div className="blog-action-footer">
              <Link to="/product" className="blog-know-more-link">
                Know More About Us <i className="bi bi-arrow-right brand-icon-arrow"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>

</>

    )
}

export default Blog;