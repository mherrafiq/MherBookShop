import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  HelpCircle,
  Briefcase,
  FileText,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Building,
  Headphones,
  ShieldCheck,
  Check,
  ExternalLink
} from 'lucide-react';

export default function Contract() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    orgName: '',
    subject: '',
    message: '',
    urgency: 'Normal'
  });

  const [activeCategory, setActiveCategory] = useState('general');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const categories = [
    { id: 'general', label: 'General Inquiry', icon: MessageSquare, desc: 'Book requests, catalog help & store queries' },
    { id: 'order', label: 'Order & Delivery Support', icon: Headphones, desc: 'Tracking, replacements & billing questions' },
    { id: 'contract', label: 'Publisher & Author Contract', icon: Briefcase, desc: 'Book distribution, publishing & partnerships' },
    { id: 'bulk', label: 'School & Bulk Orders', icon: Building, desc: 'Institutional discounts & school syllabus' },
  ];

  const faqs = [
    {
      q: 'How do authors and publishers sign a distribution contract with Mher Book Shop?',
      a: 'We welcome local and international publishers, academic authors, and independent writers. Select "Publisher & Author Contract" in the form below or email us directly at contracts@mherbookshop.com. Our procurement team will review your catalog and outline our consignment and distribution terms within 2-3 business days.'
    },
    {
      q: 'Can I order books that are not listed on your website?',
      a: 'Yes! If you are searching for a specific textbook, out-of-print classic, or international publication, send us the title, author, and ISBN via our form or WhatsApp. Our team will source it from our nationwide publisher network.'
    },
    {
      q: 'Do you offer special discounts for schools, colleges, and libraries?',
      a: 'Yes, we provide wholesale pricing tiers and tailored delivery schedules for educational institutions, tuition academies, and libraries for bulk book purchases. Contact our Bulk Order department for a custom quote.'
    },
    {
      q: 'What are your delivery timelines and courier charges?',
      a: 'We deliver nationwide across Pakistan. Standard delivery takes 2 to 4 business days. Express next-day delivery is available in major metropolitan cities. Shipping is calculated at checkout and is free on orders above Rs. 2,500.'
    },
    {
      q: 'What is your return & exchange policy if a book is damaged?',
      a: 'If you receive a damaged book or a misprinted copy, contact us within 7 days of delivery with your Order ID and photos. We provide hassle-free replacements or full refunds immediately.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategorySelect = (catId) => {
    setActiveCategory(catId);
    setFormData(prev => ({ ...prev, inquiryType: catId }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const ticketId = 'TKT-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedData({
        ...formData,
        ticketId,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: activeCategory,
        orgName: '',
        subject: '',
        message: '',
        urgency: 'Normal'
      });
    }, 900);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="contract-page-container">
      {/* Hero Header */}
      <section className="contract-hero">
        <div className="contract-badge">
          <Sparkles size={14} className="sparkle-icon" />
          <span>Contact Us</span>
        </div>
        <h1 className="contract-title">Contact &amp; Get in Touch</h1>
        <p className="contract-lead">
          Have a question about a book, need help with your order, or looking to reach our customer support team? We’re here to help!
        </p>
      </section>

      {/* Inquiry Type Tabs */}
      <section className="contract-categories-section">
        <div className="category-tabs-grid">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`category-tab-card ${isActive ? 'active' : ''}`}
                onClick={() => handleCategorySelect(cat.id)}
              >
                <div className="cat-icon-wrap">
                  <Icon size={22} />
                </div>
                <div className="cat-tab-text">
                  <h3>{cat.label}</h3>
                  <p>{cat.desc}</p>
                </div>
                {isActive && <span className="cat-active-check"><Check size={14} /></span>}
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <div className="contract-main-grid">
        
        {/* Left: Contact Info & Support Channels */}
        <div className="contract-info-column">
          <div className="contract-info-card">
            <h2 className="info-card-title">Get in Touch Directly</h2>
            <p className="info-card-desc">
              Reach our support and business desk directly through any of our channels below.
            </p>

            <div className="contact-methods-list">
              {/* Phone */}
              <div className="contact-method-item">
                <div className="method-icon-wrap phone-wrap">
                  <Phone size={20} />
                </div>
                <div className="method-details">
                  <span className="method-label">Customer Support Hotline</span>
                  <a href="tel:03222848222" className="method-value">0322-2848222</a>
                  <span className="method-sub">Mon – Sat (10:00 AM – 7:00 PM)</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="contact-method-item">
                <div className="method-icon-wrap whatsapp-wrap">
                  <MessageSquare size={20} />
                </div>
                <div className="method-details">
                  <span className="method-label">WhatsApp Quick Chat</span>
                  <a
                    href="https://wa.me/923222848222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="method-value"
                  >
                    +92 322 2848222 <ExternalLink size={13} className="inline-ext-icon" />
                  </a>
                  <span className="method-sub">Instant response for order &amp; stock queries</span>
                </div>
              </div>

              {/* Email */}
              <div className="contact-method-item">
                <div className="method-icon-wrap email-wrap">
                  <Mail size={20} />
                </div>
                <div className="method-details">
                  <span className="method-label">General &amp; Orders Email</span>
                  <a href="mailto:support@mherbookshop.com" className="method-value">support@mherbookshop.com</a>
                  <span className="method-sub">Reply within 4–12 hours</span>
                </div>
              </div>

              {/* Business & Contracts */}
              <div className="contact-method-item">
                <div className="method-icon-wrap contract-wrap">
                  <FileText size={20} />
                </div>
                <div className="method-details">
                  <span className="method-label">Publisher &amp; Contract Inquiries</span>
                  <a href="mailto:contracts@mherbookshop.com" className="method-value">contracts@mherbookshop.com</a>
                  <span className="method-sub">For distributors, schools &amp; authors</span>
                </div>
              </div>

              {/* Physical Location */}
              <div className="contact-method-item">
                <div className="method-icon-wrap location-wrap">
                  <MapPin size={20} />
                </div>
                <div className="method-details">
                  <span className="method-label">Flagship Store Location</span>
                  <p className="method-value-text">
                    Main University Road, Education Hub, Sector 4, Karachi, Pakistan
                  </p>
                </div>
              </div>
            </div>

            {/* Assurance Badges */}
            <div className="contract-guarantee-box">
              <div className="guarantee-item">
                <ShieldCheck size={18} className="guarantee-icon" />
                <span>100% Genuine Publications &amp; Transparent Terms</span>
              </div>
              <div className="guarantee-item">
                <Clock size={18} className="guarantee-icon" />
                <span>Prompt Resolution &amp; Dedicated Support Executive</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Message & Contract Form */}
        <div className="contract-form-column">
          <div className="contract-form-card">
            
            {/* Header */}
            <div className="form-card-header">
              <h2 className="form-title">
                {activeCategory === 'contract' && 'Submit Business or Publisher Proposal'}
                {activeCategory === 'bulk' && 'Request School or Bulk Order Quotation'}
                {activeCategory === 'order' && 'Submit Order or Delivery Query'}
                {activeCategory === 'general' && 'Send Us a Message'}
              </h2>
              <p className="form-subtitle">
                Fill out the details below and our team will get back to you promptly.
              </p>
            </div>

            {/* Success Banner if submitted */}
            {submittedData && (
              <div className="submission-success-banner">
                <div className="success-banner-top">
                  <CheckCircle2 size={28} className="success-icon" />
                  <div>
                    <h4>Thank You, {submittedData.name}!</h4>
                    <p>Your inquiry has been logged successfully with Reference ID: <strong>{submittedData.ticketId}</strong></p>
                  </div>
                </div>
                <div className="success-details-pill">
                  <span>Category: <strong>{submittedData.inquiryType.toUpperCase()}</strong></span>
                  <span>•</span>
                  <span>Logged: <strong>{submittedData.date}</strong></span>
                </div>
                <button
                  className="btn-dismiss-success"
                  onClick={() => setSubmittedData(null)}
                >
                  Send another message
                </button>
              </div>
            )}

            {/* Actual Form */}
            <form className="contract-form" onSubmit={handleSubmit}>
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="name">Full Name <span className="req">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Ali Ahmed"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="req">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="e.g. ali@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="phone">Phone / WhatsApp Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="e.g. 0322-1234567"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inquiryType">Inquiry Category</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={(e) => {
                      handleInputChange(e);
                      setActiveCategory(e.target.value);
                    }}
                    className="form-select"
                  >
                    <option value="general">General Inquiries &amp; Catalog</option>
                    <option value="order">Order &amp; Shipping Support</option>
                    <option value="contract">Publisher &amp; Author Distribution</option>
                    <option value="bulk">School / Bulk Purchase Quotation</option>
                  </select>
                </div>
              </div>

              {/* Conditional Organization / School Name field */}
              {(activeCategory === 'contract' || activeCategory === 'bulk') && (
                <div className="form-group">
                  <label htmlFor="orgName">Organization / School / Publisher Name</label>
                  <input
                    type="text"
                    id="orgName"
                    name="orgName"
                    placeholder="e.g. Beaconhouse School / Oxford Press / Self Published"
                    value={formData.orgName}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder={
                    activeCategory === 'contract'
                      ? 'e.g. Book distribution proposal for new science series'
                      : activeCategory === 'order'
                      ? 'e.g. Tracking update for Order #ORD-12345'
                      : 'e.g. Inquiry regarding Cambridge O-Level physics past papers'
                  }
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message &amp; Requirements <span className="req">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Please describe your question, required book titles, quantity, or contract details..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                />
              </div>

              <div className="form-actions-row">
                <div className="form-urgency-selector">
                  <span className="urgency-label">Priority:</span>
                  {['Normal', 'High', 'Urgent'].map(level => (
                    <label key={level} className={`urgency-radio-btn ${formData.urgency === level ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="urgency"
                        value={level}
                        checked={formData.urgency === level}
                        onChange={handleInputChange}
                      />
                      {level}
                    </label>
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary contract-submit-btn"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <section className="contract-faq-section">
        <div className="faq-header-centered">
          <div className="faq-badge">
            <HelpCircle size={15} />
            <span>Got Questions?</span>
          </div>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Find immediate answers regarding orders, publisher partnership contracts, and school discounts.
          </p>
        </div>

        <div className="faq-accordion-list">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`faq-item ${isOpen ? 'open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question">
                  <h3>{faq.q}</h3>
                  <div className={`faq-chevron ${isOpen ? 'rotated' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </div>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Direct WhatsApp Callout Banner */}
      <section className="contract-whatsapp-banner">
        <div className="wa-banner-content">
          <div className="wa-banner-icon">
            <MessageSquare size={32} />
          </div>
          <div className="wa-banner-text">
            <h3>Need Urgent Assistance or Looking for an Immediate Book Quote?</h3>
            <p>Chat directly with our bookstore customer care executive on WhatsApp for real-time stock confirmation.</p>
          </div>
          <a
            href="https://wa.me/923222848222"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa-direct"
          >
            Chat on WhatsApp
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

    </div>
  );
}
