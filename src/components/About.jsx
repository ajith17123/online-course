import '../assets/style/About.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import v1 from '../assets/videos/v1.mp4';

function About () {
    return (

<>

{/* {aboutsection} */}

<section className='about-sec py-5 d-flex align-items-center'>
  <div className="container">

    <div className="row mb-5" data-aos="fade-up">
      <div className="col-12 text-center">
        <span className="section-subtitle">Discover Our Vision</span>
        <h2 className="section-main-title">Who We Are</h2>
      </div>
    </div>

    <div className="row align-items-center g-5">

      <div className="col-12 col-md-6" data-aos="fade-right" data-aos-delay="200">
        <div className="about-content-block">
          <p className="about-text-para">
            At Skill Bag, we bridge the gap between complex engineering architectures and modern creators. 
            We focus on refining real-world engineering concepts into practical, interactive paradigms 
            that empower continuous software deployment. Our programs are engineered to build high-performance 
            mindsets, enabling professionals to streamline workflow systems with maximum agility. Through carefully 
            curated logic-driven paths, we ensure every technical hurdle turns into an intuitive framework. 
            Step inside to elevate your digital ecosystem, mastering core technical elements flawlessly.
          </p>
        </div>
      </div>

      <div className="col-12 col-md-6" data-aos="fade-left" data-aos-delay="400">
        <div className="about-video-wrapper">
          <video 
            src={v1} 
            className="about-native-video img-fluid" 
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>
      </div>

    </div>

  </div>
</section>

{/* {getintouchsection} */}

<section className='get-touch py-5' id='cont'>
  <div className="container">

    <div className="row mb-5" data-aos="fade-up">
      <div className="col-12 text-center">
        <span className="section-subtitle">Have Any Questions?</span>
        <h2 className="section-main-title">Get In Touch</h2>
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-8" data-aos="zoom-in" data-aos-duration="900">
        <div className="contact-card-panel">
          
          <form className="contact-main-form">
            <div className="row g-4">
     
              <div className="col-12 col-sm-6">
                <div className="form-group-custom">
                  <label className="form-label-custom">Full name</label>
                  <div className="input-wrapper-custom">
                    <input type="text" className="form-control-custom" placeholder="Enter Full Name" required />
                    <i className="bi bi-person-fill input-icon-custom"></i>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="form-group-custom">
                  <label className="form-label-custom">Email Address</label>
                  <div className="input-wrapper-custom">
                    <input type="email" className="form-control-custom" placeholder="Enter Mail Id" required />
                    <i className="bi bi-envelope-fill input-icon-custom"></i>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="form-group-custom">
                  <label className="form-label-custom">Select Course</label>
                  <div className="input-wrapper-custom">
                    <select className="form-control-custom" required>
                      <option value="" disabled hidden>Choose Your Learning Domain</option>
                      <option value="react">React Web Development Architecture</option>
                      <option value="python">Python Programming Logic Modules</option>
                      <option value="css">Advanced UI Engineering CSS Design</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="form-group-custom">
                  <label className="form-label-custom">Message</label>
                  <div className="input-wrapper-custom">
                    <textarea 
                      className="form-control-custom text-area-custom" 
                      rows="4" 
                      placeholder="How Can We Help You?" 
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="col-12 text-center mt-3">
                <button type="submit" className="btn-auth-p">
                  Send Message
                </button>
              </div>

            </div>
          </form>

        </div>
      </div>
    </div>

  </div>
</section>

</>

    )
}

export default About;