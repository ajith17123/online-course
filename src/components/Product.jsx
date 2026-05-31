import '../assets/style/Product.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import c1 from '../assets/images/c1.jpg';
import c2 from '../assets/images/c2.jpg';
import c3 from '../assets/images/c3.jpg';

function Product () {

const course = [
  {
    id: 1,
    img: c1,
    title: "React Web Architecture",
    para: "Master the foundational and advanced rules of modern component architecture, rendering compilation pipelines, and hooks state trees hooks flawlessly.",
    period: " 12 Weeks",
    chapter: " 45 Modules"
  },
    {
    id: 2,
    img: c2,
    title: "Python Logic Pipelines",
    para: "Build high-performance computing logic backends and clean automation scripts customized to parse massive enterprise data matrices fluidly.",
    period: " 10 Weeks",
    chapter: " 38 Modules"
  },
    {
    id: 3,
    img: c3,
    title: "Advanced UI Engineering",
    para: "Deep dive into complex layout spacing, cubic-bezier transformation speeds, and grid properties to assemble hyper-responsive responsive frames.",
    period: " 8 Weeks",
    chapter: " 30 Modules"
  }
  
];

    return (

<>

<section className='course-sec py-5'>
  <div className='container'>
      
   <div className='row mb-5'>
       <div className='col-12 text-center'>
          <span className='sec-sub-title'>Boost Your Skill Set</span>
          <h2 className='sec-title'>Explore Our Premium Courses.</h2>
       </div>
   </div>

   <div className='row g-4 courses-grid'>
      
     {course.map((item) => (
        <div className='col-12 col-md-4' key={item.id}>
           <div className='course-card'>
                 <div className='course-img'>
                    <img src={item.img} alt="course" className='img-fluid prod-img' />
                 </div>
                 <div className='course-body'>
                      <div className='course-panel'>
                        <h3 className="course-card-title">{item.title}</h3>
                        <p className="course-short-desc">{item.para}</p>
                      </div>
                      <div className='meta-tags'>
                         <span><i className="bi bi-clock"></i>{item.period}</span>
                         <span><i className="bi bi-book"></i>{item.chapter}</span>
                      </div>
                 </div>
                 <button className='btn-course'>View Now</button>
           </div>
        </div>
     ))}

   </div>

  </div>
</section>

<section className='pricing-sec py-5' id='plan'>
  <div className="container">

    <div className="row mb-5" data-aos="fade-up">
      <div className="col-12 text-center">
        <span className="sec-sub-title">Invest In Your Future</span>
        <h2 className="sec-title">Flexible Pricing Plans.</h2>
      </div>
    </div>

    <div className="row g-4 pricing-grid-row align-items-center">
     
      <div className="col-12 col-md-6 col-lg-5" data-aos="fade-right" data-aos-delay="100">
        <div className="pricing-premium-card">
          <span className="tier-badge">Basic Pack</span>
          <div className="tier-price-wrapper">
            <span className="currency">₹</span>
            <span className="price">1,499</span>
            <span className="duration">/ course</span>
          </div>
          <p className="tier-summary-text">Perfect for self-paced independent developers eager to learn foundational blocks.</p>
          <hr className="tier-divider" />
          <ul className="tier-features-list">
            <li><i className="bi bi-check-circle-fill"></i> Full access to curated course materials</li>
            <li><i className="bi bi-check-circle-fill"></i> Standard certificate of completion</li>
            <li><i className="bi bi-check-circle-fill"></i> Downloadable resource assets code</li>
            <li><i className="bi bi-check-circle-fill"></i> Live 1-on-1 expert mentor sync</li>
          </ul>
          <div className="mt-4">
            <Link to="/login" className="btn-tier-action w-100">Get Started</Link>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
        <div className="pricing-premium-card active-highlighted-tier">
          <div className="popular-ribbon">Most Popular</div>
          <span className="tier-badge">Pro Elite Pass</span>
          <div className="tier-price-wrapper my-3">
            <span className="currency">₹</span>
            <span className="price">3,999</span>
            <span className="duration">/ full pass</span>
          </div>
          <p className="tier-summary-text">Engineered for professionals aiming to acquire enterprise-grade career growth paths.</p>
          <hr className="tier-divider" />
          <ul className="tier-features-list">
            <li><i className="bi bi-check-circle-fill"></i> Unlimited access to ALL current courses</li>
            <li><i className="bi bi-check-circle-fill"></i> Premium verified expert certificate</li>
            <li><i className="bi bi-check-circle-fill"></i> Priority discord community support pool</li>
            <li><i className="bi bi-check-circle-fill"></i> 2 Live doubt-clearing sessions per week</li>
          </ul>
          <div className="mt-4">
            <Link to="/login" className="btn-tier-action w-100">Enroll Now</Link>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>

</>

    )
}

export default Product;