import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <ExternalLink href='https://www.facebook.com/'>
              Facebook
            </ExternalLink>
            <ExternalLink href='https://www.instagram.com/'>
              Instagram
            </ExternalLink>
            <ExternalLink href='https://www.youtube.com/'>Youtube</ExternalLink>
            <ExternalLink href='https://twitter.com/'>Twitter</ExternalLink>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVL
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>TRVL © {year}</small>
          <div className='social-icons'>
            <ExternalLink
              className='social-icon-link facebook'
              href='https://www.facebook.com/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </ExternalLink>
            <ExternalLink
              className='social-icon-link instagram'
              href='https://www.instagram.com/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </ExternalLink>
            <ExternalLink
              className='social-icon-link youtube'
              href='https://www.youtube.com/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </ExternalLink>
            <ExternalLink
              className='social-icon-link twitter'
              href='https://twitter.com/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </ExternalLink>
            <ExternalLink
              className='social-icon-link linkedin'
              href='https://www.linkedin.com/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </ExternalLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
