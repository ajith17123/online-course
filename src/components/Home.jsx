import '../assets/style/Home.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import p1 from '../assets/images/p1.jpg';
import p2 from '../assets/images/p2.jpg';
import p3 from '../assets/images/p3.jpg';
import h1 from '../assets/images/hero.jpg';

function Home () {

const proddata = [
        { id: 1, img: p1, heading: "Data Science Engineering", para: "Master predictive modeling paradigms, computational statistics modules, and clean pipeline architectures to transform raw infrastructure data streams fluidly."},
        { 
        id: 2, 
        img: p2, 
        heading: "Digital Marketing", 
        para: "Optimize multi-channel visibility, algorithmic search matrices, and conversion rate structures engineered to maximize brand performance frameworks." 
    },
    { 
        id: 3, 
        img: p3, 
        heading: "Microsoft Excel", 
        para: "Deep dive into advanced logical lookup variables, dynamic dashboard frameworks, and complex data analysis structures to handle enterprise pipelines seamlessly." 
    }
    ];

    return (

<>

{/* {herosection} */}

<section className='hero-sec'>
   <div className='container'>
      <div className='row align-items-center'>
          <div className="col-12 col-lg-6" data-aos="fade-right">
              <span className="hero-badge">Empower Your Journey</span>
              <h1 className="hero-title">Advance Your Technical Expertise To The Next Level.</h1>
              <p className="hero-subtitle-text">
                  Gain comprehensive industry-ready training loops under direct guidance. Master modern engineering systems and deploy production-scale frameworks accurately.
              </p>
              <div className="hero-actions d-flex gap-3 mt-4">
                  <NavHashLink to="/product#plan" className="btn-hero-primary">Get Started</NavHashLink>
                  <Link to="/about" className="btn-hero">Learn More</Link>
              </div>
          </div>
          <div className="col-12 col-lg-6 mt-5 text-center" data-aos="fade-left">
              <div className="hero-img-backdrop">
                  <img src={h1} alt="Hero Engine" className="hero-showcase-img img-fluid" />
              </div>
          </div>
      </div>
   </div>
</section>

{/* {coursesection} */}

<section className='cour-sec py-5'>
    <div className='container'>
        <h2 className='sec-title'>Our Premium Courses</h2>
       <div className='row'>

    {proddata.map((item) => (
        <div className='col-12 col-md-4' key={item.id}>
            <div className='card'>

              <div className='card-img'>
                 <img src={item.img} alt="course" className='img-fluid prod-course' />
              </div>
              <div className='card-body'>
                 <h5 className='card-title'>{item.heading}</h5>
                 <p className='card-para'>{item.para}</p>
              </div>

              <button className='prod-btn'>View Details</button>

            </div>
        </div>
    ))}

       </div>
    </div>
</section>

{/* {webminarsection} */}

<section className='web-sec py-5'>
   <div className='container'>
    <h2 className='sec-title'>Upcoming Webminars</h2>
     <div className='row g-4'>
        
        <div className='col-12 col-md-6' data-aos="fade-up" data-aos-delay="100">
            <div className='web-card'>
                <div className="web-badge">Live Today</div>
                <div className="web-icon"><i className="bi bi-camera-video-fill"></i></div>
                <h4 className="web-card-title">Scalable Layout Systems With Flexbox & CSS Grid</h4>
                <p className="web-card-desc">Deep dive into custom responsive alignments, structural break points and fluid transformations.</p>
                <div className="web-footer mt-auto">
                    <span className="web-time"><i className="bi bi-calendar3"></i> 4:00 PM IST</span>
                    <Link to="/login" className="web-join-link">Join Stream</Link>
                </div>
            </div>
        </div>

        <div className='col-12 col-md-6' data-aos="fade-up" data-aos-delay="200">
            <div className='web-card'>
                <div className="web-badge secondary-badge">June 05</div>
                <div className="web-icon"><i className="bi bi-lightning-charge-fill"></i></div>
                <h4 className="web-card-title">React State Engine Hooks Compilations Models</h4>
                <p className="web-card-desc">Optimize complex logic re-renders tree layouts and track background dependencies efficiently.</p>
                <div className="web-footer mt-auto">
                    <span className="web-time"><i className="bi bi-calendar3"></i> 6:30 PM IST</span>
                    <Link to="/login" className="web-join-link">Register Now</Link>
                </div>
            </div>
        </div>

     </div>
   </div>
</section>

{/* {aboutsec} */}

<section className='about-sec py-5'>
   <div className='container'>
    <h2 className='sec-title'>Who We Are</h2>
        <div className='row'>
           <div className='col-12'>
               <div className='about-text text-center'>
                    <p className='about-para'>
                        We are an advanced educational technology workspace dedicated to bridge the technical divide between current institutional theory models and live corporate industry requirements. Through practical modules and absolute step-by-step logic streaming, we elevate your engineering capabilities seamlessly.
                    </p>
               </div>
           </div>
        </div>
   </div>
</section>

{/* {statsection} */}

<section className='stat-sec py-5'>
   <div className='container'>
       <div className='row g-4'>
          
        <div className="col-12 col-md-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="stat-node-box">
                  <h3 className="stat-count">15K+</h3>
                  <p className="stat-label">Active Learners</p>
              </div>
          </div>

          <div className="col-12 col-md-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="stat-node-box">
                  <h3 className="stat-count">98%</h3>
                  <p className="stat-label">Completion Rate</p>
              </div>
          </div>

          <div className="col-12 col-md-4" data-aos="zoom-in" data-aos-delay="300">
              <div className="stat-node-box">
                  <h3 className="stat-count">50+</h3>
                  <p className="stat-label">Enterprise Mentors</p>
              </div>
          </div>

       </div>
   </div>
</section>

</>

    )
}

export default Home;