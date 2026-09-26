import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, BookOpen, Heart, ArrowRight } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-container">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-badge">
          <Sparkles size={14} className="sparkle-icon" />
          <span>About Us</span>
        </div>
        <h1 className="about-title">About MherBookShop</h1>
      </section>

      {/* Main Content Card with Exact Provided Text */}
      <div className="about-text-content-card">
        <p className="about-lead-para">
          At <strong>MherBookShop</strong>, we are passionate about literature and dedicated to bringing the joy of reading to book lovers everywhere. As avid readers ourselves, we understand the thrill of discovering new stories, the satisfaction of turning the pages of a well-loved classic, and the transformative power of a great book, accompanied by the enticing scent of fresh pages as you journey through its chapters.
        </p>

        <p>
          With a vast inventory curated by our team of literary enthusiasts, we offer something for every reader. From gripping thrillers and heartwarming romance novels to thought-provoking non-fiction and captivating <Link to="/?category=children" className="about-inline-link">children’s books</Link>, our shelves are stocked with treasures waiting to be discovered.
        </p>

        <p>
          We believe that knowledge should be accessible to everyone. That’s why we offer a diverse collection of <Link to="/" className="about-inline-link">books</Link> and educational materials at market-competitive prices. From <Link to="/?category=textbooks" className="about-inline-link">textbooks</Link> and <Link to="/?category=past-papers" className="about-inline-link">study guides</Link> to <Link to="/?category=fiction" className="about-inline-link">fiction</Link>, <Link to="/?category=non-fiction" className="about-inline-link">non-fiction</Link>, and everything in between, we have something for every reader and learner.
        </p>

        <p>
          We understand the demands of modern life, especially when it comes to balancing education, work, and personal commitments. That’s why we’ve made it our mission to make accessing books and <Link to="/?category=writing-tools" className="about-inline-link">stationery</Link> products as convenient as possible for you.
        </p>

        <p>
          <strong>MherBookShop</strong> supplies books &amp; stationery products delivered to your home while you are busy with your studies. We are one of the largest online bookstores in Pakistan catering to your reading and educational requirements. MherBookShop is a collection of books you need, books your siblings need; books your children might need delivered to your doorstep at market competitive prices.
        </p>

        <p>
          Customer satisfaction is at the heart of everything we do. While you’re browsing our virtual shelves, we are committed to providing you with exceptional service, unparalleled selection, and a memorable shopping experience. Your love for reading drives us to continuously improve and expand our offerings, ensuring that you always find your next literary adventure with us.
        </p>

        <p>
          Join us on our journey as we celebrate the written word and connect readers with stories that inspire, entertain, and enlighten. Follow us on social media, sign up for our newsletter and explore our website to discover the latest additions to our catalog.
        </p>

        <div className="about-closing-box">
          <p className="about-closing-text">
            Thank you for choosing <strong>MherBookShop</strong> as your literary companion. Let’s embark on this adventure together!
          </p>
          <div className="about-happy-reading">
            <Heart size={18} className="heart-icon" />
            <span>Happy reading!</span>
          </div>
        </div>

        <div className="about-cta-row">
          <Link to="/" className="btn btn-primary about-browse-btn">
            <BookOpen size={16} />
            Explore Our Catalog
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
