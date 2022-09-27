import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import Footer from '../components/footer';
import Header from '../components/header';
import '../styles/login.scss'
import { ReactComponent as IconLock } from "../media/icon_lock.svg";
import { ReactComponent as GoogleLogo } from "../media/google.svg";
import { ReactComponent as VisibleOff } from "../media/visible_off.svg";
import { ReactComponent as VisibleOn } from "../media/visible_on.svg";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = (e: any) => {
    e.preventDefault();
  }

  return (
    <div className="signup">
      <Helmet>
          <title>Deepsync | Secure Login</title>
      </Helmet>
      <Header />
      <main>
        <section className="signupSection">
          <div className='container'>
            <div className="signupForm">
              <h3>Sign in securely to your account</h3>
              <form onSubmit={onSubmit}>
                <div className="fields">
                  <label><span>Email<span className='red'>*</span></span></label>
                  <input 
                    type="email"  
                    value={emailId}
                    onChange={(e: any) => {
                      console.log(e)
                      console.log(e.target.value)
                      setEmailId(e.target.value)
                    }}
                    placeholder="Enter email"
                  />
                  <label>
                    <span>Password<span className='red'>*</span></span>
                    <span className='forgotPassword'>Forgot your password?</span>
                  </label>
                  
                  <input 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e: any) => {
                      setPassword(e.target.value)
                    }}
                    placeholder="Enter email"
                  ></input>
                  <div className='visibilityIcon' onClick={() => setShowPassword(!showPassword)}>
                    {
                      showPassword ? (<VisibleOn  />) : (<VisibleOff />)
                    }
                  </div>
                  
                  
                  
                </div>
                <div className='buttons'>
                  <button className='btnBlue' type="submit"><IconLock /> Secure Login</button>
                  <p className="orText">OR</p>
                  <button className='btnGoogle'><GoogleLogo /> Login via Google</button>
                </div>
              </form>
              <p className='notes'>By Logging in, you agree to our <a href="https://app.deepsync.co/terms" target="_blank" rel="noreferrer">Terms</a> and <a  href="https://app.deepsync.co/privacy" target="_blank" rel="noreferrer">Privacy policy.</a></p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
