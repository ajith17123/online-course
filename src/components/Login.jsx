import '../assets/style/Login.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Login () {
    return (

<>

<section className="auth-section py-5 d-flex align-items-center justify-content-center">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 d-flex justify-content-center">
    
        <div className="auth-card" data-aos="zoom-in" data-aos-duration="800">
          <div className="auth-form-side">
   
            <div className="auth-header-nav d-flex justify-content-between align-items-center mb-5">
              <div className="auth-logo d-flex align-items-center">
                <span className="logo-name">Skill Bag</span>
              </div>
              <div className="auth-nav-links d-flex gap-3">
                <Link to="/" className="auth-nav-item">Home</Link>
                <Link to="/signup" className="auth-nav-item">Join</Link>
              </div>
            </div>

            <div className="form-content-wrapper">
              <span className="form-subtitle">Welcome Back</span>
              <h2 className="form-title mb-2">Log in to account</h2>
              <p className="form-toggle-text mb-4">
                Don't have an account? <Link to="/signup" className="auth-accent-link">Sign up</Link>
              </p>

              <form className="auth-main-form">
    
                <div className="form-group-custom mb-3">
                  <label className="form-label-custom">Email</label>
                  <div className="input-wrapper-custom">
                    <input type="email" className="form-control-custom" placeholder="Enter Mail Id" required />
                    <i className="bi bi-envelope-fill input-icon-custom"></i>
                  </div>
                </div>

                <div className="form-group-custom mb-4">
                  <label className="form-label-custom">Password</label>
                  <div className="input-wrapper-custom">
                    <input type="password" className="form-control-custom" placeholder="••••••••" required />
                    <i className="bi bi-eye-fill input-icon-custom eye-toggle"></i>
                  </div>
                </div>

                <div className="row g-3 align-items-center mt-2">
                  <div className="col-12">
                    <button type="submit" className="btn-auth-primary w-100">Log in</button>
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

export default Login;