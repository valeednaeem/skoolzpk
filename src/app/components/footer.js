import React from 'react'
import Link from 'next/link'
import { Form } from 'react-bootstrap'
import { Input } from '@headlessui/react'

function footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <Link className="logo d-flex align-items-center" href="index.html"><span className="sitename">Skoolz.PK</span></Link>
            <div className="footer-contact pt-3">
              <p>371-N, Punch Road</p>
              <p>Samanabad, Lahore</p>
              <p className="mt-3"><strong>Phone:</strong> <span>+923014536761</span></p>
              <p><strong>Email:</strong> <span>info@skoolz.pk</span></p>
            </div>
            <div className="social-links d-flex mt-4">
              <Link href=""><i className="bi bi-twitter-x"></i></Link>
              <Link href=""><i className="bi bi-facebook"></i></Link>
              <Link href=""><i className="bi bi-instagram"></i></Link>
              <Link href=""><i className="bi bi-linkedin"></i></Link>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/terms-services">Terms of Service</Link></li>
              <li><Link href="/privacy-policy">Privacy policy</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><Link href="#">Web Design</Link></li>
              <li><Link href="#">Web Development</Link></li>
              <li><Link href="#">Product Management</Link></li>
              <li><Link href="#">Marketing</Link></li>
              <li><Link href="#">Graphic Design</Link></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <Form className="php-email-form" action="forms/newsletter.php" method="post">
              <div className="newsletter-form">
                <Input type="email" name="email" />
                <Input type="submit" value="Subscribe" />
              </div>
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your subscription request has been sent. Thank you!</div>
            </Form>
          </div>
        </div>
      </div>
      <div className="container copyright text-center mt-4">
        <p>&copy; <span>Copyright</span> <strong className="px-1 sitename">Skoolz.PK</strong> <span>All Rights Reserved, 2025</span></p>
        <div className="credits">Designed by <Link href="https://www.wall-v.com/">Wall-V</Link></div>
      </div>
    </footer>
  )
}

export default footer