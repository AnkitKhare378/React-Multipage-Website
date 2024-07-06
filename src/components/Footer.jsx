import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className='contact-short'>
        <div className='grid grid-two-column'>
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className='contact-short-btn'>
            <NavLink to="/">
              <Button>
                Get Started
              </Button> 
            </NavLink>
          </div>
        </div>
      </section>

      <footer>
        <div className='container grid grid-four-column'>
          <div className='footer-about'>
            <h3>Ankit Khare</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className='footer-subscribe'>
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input 
              type="email" 
              required 
              autoComplete="off" 
              placeholder='Email' 
              />
              <input type="submit" value="Subcribe" />
            </form>
          </div>

          <div className='footer-social'>
             <h3>Follows Us</h3>
             <div className='footer-social--icons'>
               <div>
                 <FaDiscord className='icons'/> 
               </div>
               <div>
                 <FaInstagram className='icons'/> 
               </div>
               <div>
                 <a 
                 href="https://www.youtube.com/"
                 target='_blank'>
                 <FaYoutube className='icons'/> 
                 </a>
               </div>
             </div>
          </div>

          <div className='footer-content'>
            <h3>Call Us</h3>
            <h3>+91 6393906928</h3>
          </div>
        </div>

        <div className='footer-bottom--section'>
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Ankit Khare. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    box-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport };
    transform: translateY(50%);

    }
    .contact-short-btn {
      justify-self: end;
      align-self: center;
    }
  

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;
    

    div {
      padding: 1rem;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.white};

      .icons {
        color: ${({theme}) => theme.colors.white};
        font-size: 2.4rem;
        position: relative;
        cursor: pointer;
      }
    }
  }

  .footer-bottom--section{
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  }
`;

export default Footer