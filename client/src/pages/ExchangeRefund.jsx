import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  RefreshCcw,
  ShieldCheck,
  AlertCircle,
  Mail,
  Phone,
  MessageCircle,
  Globe,
  ArrowRight,
  CheckCircle2,
  XCircle,
  PackageCheck,
  Sparkles,
} from 'lucide-react';

const ExchangeRefund = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="erp-page">

      {/* ── Hero ── */}
      <section className="erp-hero">
        <div className="erp-hero-bg" />
        <div className="erp-hero-inner">
          <div className="erp-hero-badge">
            <RefreshCcw size={14} />
            <span>Exchange &amp; Refund Policy</span>
          </div>
          <h1 className="erp-hero-title">
            Your Satisfaction Is <span className="erp-hero-gradient">Our Priority</span>
          </h1>
          <p className="erp-hero-subtitle">
            Greetings! Thank you for choosing us for your purchase. We take strict measures to ensure
            that customers get what they ordered. If you're not satisfied, we've got you covered.
          </p>
          <div className="erp-hero-badges">
            <span className="erp-badge"><CheckCircle2 size={14} /> 7-Day Policy</span>
            <span className="erp-badge"><ShieldCheck size={14} /> Secure Returns</span>
            <span className="erp-badge"><PackageCheck size={14} /> Exchange &amp; Store Credits</span>
          </div>
        </div>
      </section>

      <div className="erp-content">

        {/* ── Main Policy Card ── */}
        <section className="erp-card">
          <div className="erp-card-header">
            <div className="erp-card-icon purple">
              <RefreshCcw size={20} />
            </div>
            <div>
              <h2 className="erp-card-title">Exchange &amp; Refunds</h2>
              <p className="erp-card-subtitle">Core policy rules you should know</p>
            </div>
          </div>
          <ul className="erp-list">
            <li>
              <CheckCircle2 size={16} className="erp-list-icon green" />
              <span>
                We follow a <strong>7-day Exchange &amp; Refund Policy</strong> from the date you received your order.
              </span>
            </li>
            <li>
              <CheckCircle2 size={16} className="erp-list-icon green" />
              <span>
                All returned items must be in <strong>new and unused condition</strong>, with all their original tags and labels attached.
              </span>
            </li>
            <li>
              <CheckCircle2 size={16} className="erp-list-icon green" />
              <span>
                Products can only be returned if you have received a <strong>wrong item</strong> as per your order.
              </span>
            </li>
            <li>
              <CheckCircle2 size={16} className="erp-list-icon green" />
              <span>
                Refunds will be issued exclusively in the form of <strong>store credits / vouchers</strong>.
              </span>
            </li>
            <li>
              <CheckCircle2 size={16} className="erp-list-icon green" />
              <span>
                In case of a return, <strong>shipping charges are not refundable</strong> and the customer bears return shipping costs.
              </span>
            </li>
            <li>
              <CheckCircle2 size={16} className="erp-list-icon green" />
              <span>
                Refunds will only be processed once we have <strong>received the returned parcel</strong>.
              </span>
            </li>
          </ul>
        </section>

        {/* ── Exceptions Card ── */}
        <section className="erp-card">
          <div className="erp-card-header">
            <div className="erp-card-icon red">
              <AlertCircle size={20} />
            </div>
            <div>
              <h2 className="erp-card-title">Exceptions</h2>
              <p className="erp-card-subtitle">Items that cannot be returned or exchanged</p>
            </div>
          </div>
          <ul className="erp-list">
            <li>
              <XCircle size={16} className="erp-list-icon red" />
              <span>
                <strong>Print and bind service</strong> orders cannot be returned or exchanged once the order has been placed and processed.
              </span>
            </li>
            <li>
              <XCircle size={16} className="erp-list-icon red" />
              <span>
                All items purchased <strong>on sale</strong> cannot be returned for an exchange or a refund.
              </span>
            </li>
          </ul>
        </section>

        {/* ── How to Initiate a Return ── */}
        <section className="erp-card">
          <div className="erp-card-header">
            <div className="erp-card-icon cyan">
              <PackageCheck size={20} />
            </div>
            <div>
              <h2 className="erp-card-title">How to Initiate a Return</h2>
              <p className="erp-card-subtitle">Follow these steps to start your return process</p>
            </div>
          </div>

          <p className="erp-body-text">
            To initiate the return process, email us at{' '}
            <a href="mailto:support@MherBookShop.com" className="erp-link">support@MherBookShop.com</a>{' '}
            with the following details:
          </p>

          <div className="erp-steps">
            <div className="erp-step">
              <div className="erp-step-num">1</div>
              <div>
                <strong>Order Number</strong>
                <p>Your unique order ID received in the confirmation email.</p>
              </div>
            </div>
            <div className="erp-step">
              <div className="erp-step-num">2</div>
              <div>
                <strong>Pictures of the Product(s)</strong>
                <p>Clear photos of the received product(s) along with the packaging.</p>
              </div>
            </div>
            <div className="erp-step">
              <div className="erp-step-num">3</div>
              <div>
                <strong>Reason for Return</strong>
                <p>A brief explanation of why you want to return the item.</p>
              </div>
            </div>
          </div>

          <p className="erp-thank-note">
            <Sparkles size={15} /> Thank you for your understanding and cooperation.
          </p>
        </section>

        {/* ── Contact Card ── */}
        <section className="erp-card erp-card-contact">
          <div className="erp-card-header">
            <div className="erp-card-icon indigo">
              <Mail size={20} />
            </div>
            <div>
              <h2 className="erp-card-title">Questions?</h2>
              <p className="erp-card-subtitle">Have queries about our policy? Reach out to us.</p>
            </div>
          </div>

          <div className="erp-contacts-grid">
            <a href="mailto:support@MherBookShop.com" className="erp-contact-item">
              <div className="erp-contact-icon email">
                <Mail size={18} />
              </div>
              <div>
                <span className="erp-contact-label">Email</span>
                <span className="erp-contact-value">support@MherBookShop.com</span>
              </div>
              <ArrowRight size={15} className="erp-contact-arrow" />
            </a>

            <a href="https://MherBookShop.com/contact/" target="_blank" rel="noopener noreferrer" className="erp-contact-item">
              <div className="erp-contact-icon globe">
                <Globe size={18} />
              </div>
              <div>
                <span className="erp-contact-label">Website</span>
                <span className="erp-contact-value">Contact Us Page</span>
              </div>
              <ArrowRight size={15} className="erp-contact-arrow" />
            </a>

            <a href="tel:03222848222" className="erp-contact-item">
              <div className="erp-contact-icon phone">
                <Phone size={18} />
              </div>
              <div>
                <span className="erp-contact-label">Phone Call</span>
                <span className="erp-contact-value">03222848222</span>
              </div>
              <ArrowRight size={15} className="erp-contact-arrow" />
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=%2B923222848222&text=Hello&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="erp-contact-item"
            >
              <div className="erp-contact-icon whatsapp">
                <MessageCircle size={18} />
              </div>
              <div>
                <span className="erp-contact-label">WhatsApp</span>
                <span className="erp-contact-value">03222848222</span>
              </div>
              <ArrowRight size={15} className="erp-contact-arrow" />
            </a>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="erp-cta">
          <div className="erp-cta-glow" />
          <ShieldCheck size={34} className="erp-cta-icon" />
          <h2>Shop with Confidence</h2>
          <p>We stand behind every order. Browse our full collection and order with peace of mind.</p>
          <Link to="/" className="erp-cta-btn">
            Browse Books <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ExchangeRefund;
