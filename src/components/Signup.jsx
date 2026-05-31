import '../assets/style/Signup.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Signup () {
    return (

<>

<section className="auth-section py-5 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
    
            <div className="auth-card" data-aos="zoom-in" data-aos-duration="800">
              
              <div className="auth-form-side">
                
                <div className="auth-header-nav d-flex justify-content-between align-items-center mb-5">
                  <div className="auth-logo d-flex align-items-center">
                    <span className="logo-name">Skill Bag</span>
                  </div>
                  <div className="auth-nav-links d-flex gap-3">
                    <Link to="/" className="auth-nav-item">Home</Link>
                    <Link to="/login" className="auth-nav-item">Join</Link>
                  </div>
                </div>

                <div className="form-content-wrapper">
                  <span className="form-subtitle">Start For Free</span>
                  <h2 className="form-title mb-2">Create new account</h2>
                  <p className="form-toggle-text mb-4">
                    Already A Member? <Link to="/login" className="auth-accent-link">Log in</Link>
                  </p>

                  <form className="auth-main-form">
                    
                    <div className="row g-3 mb-3">
                      <div className="col-6">
                        <div className="form-group-custom">
                          <label className="form-label-custom">First name</label>
                          <div className="input-wrapper-custom">
                            <input type="text" className="form-control-custom" placeholder="Enter First Name" required />
                            <i className="bi bi-person-fill input-icon-custom"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group-custom">
                          <label className="form-label-custom">Last name</label>
                          <div className="input-wrapper-custom">
                            <input type="text" className="form-control-custom" placeholder="Enter Last Name" required />
                            <i className="bi bi-person-fill input-icon-custom"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group-custom mb-3">
                      <label className="form-label-custom">Email</label>
                      <div className="input-wrapper-custom">
                        <input type="email" className="form-control-custom" placeholder="Enter Mail Id" required />
                        <i className="bi bi-envelope-fill input-icon-custom"></i>
                      </div>
                    </div>

                    <div className="form-group-custom mb-4">
                      <label className="form-label-custom">Password</label>
                      <div className="input-wrapper-custom active-focus">
                        <input type="password" className="form-control-custom" placeholder="••••••••" required />
                        <i className="bi bi-eye-fill input-icon-custom eye-toggle"></i>
                      </div>
                    </div>

                    <div className="row g-3 align-items-center mt-2">
                      <div className="col-12">
                        <button type="submit" className="btn-auth-primary w-100">Create account</button>
                      </div>
                    </div>

                  </form>
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

export default Signup;