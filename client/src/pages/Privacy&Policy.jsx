import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Mail,
  Phone,
  MessageSquare,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const tocItems = [
    { id: 'section-1', title: '1. WHAT INFORMATION DO WE COLLECT?' },
    { id: 'section-2', title: '2. HOW DO WE USE YOUR INFORMATION?' },
    { id: 'section-3', title: '3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?' },
    { id: 'section-4', title: '4. WHO WILL YOUR INFORMATION BE SHARED WITH?' },
    { id: 'section-5', title: '5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?' },
    { id: 'section-6', title: '6. HOW LONG DO WE KEEP YOUR INFORMATION?' },
    { id: 'section-7', title: '7. HOW DO WE KEEP YOUR INFORMATION SAFE?' },
    { id: 'section-8', title: '8. WHAT ARE YOUR PRIVACY RIGHTS?' },
    { id: 'section-9', title: '9. CONTROLS FOR DO-NOT-TRACK FEATURES' },
    { id: 'section-10', title: '10. DO WE MAKE UPDATES TO THIS NOTICE?' },
    { id: 'section-11', title: '11. HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?' },
    { id: 'section-12', title: '12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' },
  ];

  return (
    <div className="privacy-page-container">
      {/* Header Banner */}
      <section className="privacy-hero">
        <div className="privacy-badge">
          <ShieldCheck size={16} className="privacy-badge-icon" />
          <span>Privacy Policy</span>
        </div>
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-lead">
          <strong>Welcome to our Privacy Policy</strong> — Your privacy is critically important to us!
        </p>
      </section>

      {/* Main Document Body */}
      <div className="privacy-content-card">
        
        {/* Intro Paragraphs */}
        <div className="privacy-intro-block">
          <p>
            Thank you for choosing to be part of our community at <strong>Now eStore Pvt. Ltd.</strong>, doing business as <strong>MherBookShop</strong> (“<strong>MherBookShop</strong>“, “<strong>we</strong>“, “<strong>us</strong>“, “<strong>our</strong>“). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at <a href="mailto:support@MherBookShop.com" className="privacy-link">support@MherBookShop.com</a>.
          </p>
          <p>
            When you visit our website <a href="http://www.Mherbookshop.com/" target="_blank" rel="noopener noreferrer" className="privacy-link">www.MherBookShop.com</a> (the “<strong>Website</strong>“), and more generally, use any of our services (the “<strong>Services</strong>“, which include the Website), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.
          </p>
          <p>
            This privacy notice applies to all information collected through our Services (which, as described above, includes our Website), as well as, any related services, sales, marketing or events.
          </p>
          <p className="privacy-notice-highlight">
            <em>Please read this privacy notice carefully as it will help you understand what we do with the information that we collect.</em>
          </p>
        </div>

        {/* Table of Contents */}
        <div className="privacy-toc-box">
          <h2 className="toc-title">TABLE OF CONTENTS</h2>
          <div className="toc-grid">
            {tocItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className="toc-link-btn"
                onClick={() => scrollToSection(item.id)}
              >
                <ChevronRight size={14} className="toc-chevron" />
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Section 1 */}
        <section id="section-1" className="policy-section">
          <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
          
          <div className="policy-sub-block">
            <h3>Personal Information You Disclose To Us</h3>
            <div className="policy-in-short">
              <strong>In Short:</strong> We collect personal information that you provide to us.
            </div>
            <p>
              We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.
            </p>
            <p>
              The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following:
            </p>
            <p>
              <strong>Personal Information Provided By You:</strong> We collect names; phone numbers; email addresses; mailing addresses; usernames; passwords; contact preferences; billing addresses; contact or authentication data; and other similar information.
            </p>
            <p>
              All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.
            </p>
          </div>

          <div className="policy-sub-block">
            <h3>Information Automatically Collected</h3>
            <div className="policy-in-short">
              <strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Website.
            </div>
            <p>
              We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website and other technical information. This information is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes.
            </p>
            <p>
              Like many businesses, we also collect information through cookies and similar technologies.
            </p>
            <p>The information we collect includes:</p>
            <ul className="policy-bullet-list">
              <li>
                <strong>Log and Usage Data:</strong> Log and usage data is service-related, diagnostic, usage and performance information our servers automatically collect when you access or use our Website and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type and settings and information about your activity in the Website (such as the date/time stamps associated with your usage, pages and files viewed, searches and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called ‘crash dumps’) and hardware settings).
              </li>
              <li>
                <strong>Device Data:</strong> We collect device data such as information about your computer, phone, tablet or other device you use to access the Website. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model Internet service provider and/or mobile carrier, operating system and system configuration information.
              </li>
              <li>
                <strong>Location Data:</strong> We collect location data such as information about your device’s location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Website. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. Note however, if you choose to opt out, you may not be able to use certain aspects of the Services.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2 */}
        <section id="section-2" className="policy-section">
          <h2>2. HOW DO WE USE YOUR INFORMATION?</h2>
          <div className="policy-in-short">
            <strong>In Short:</strong> We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.
          </div>
          <p>
            We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
          </p>
          <p>We use the information we collect or receive:</p>
          <ul className="policy-bullet-list">
            <li>
              <strong>To post testimonials:</strong> We post testimonials on our Website that may contain personal information. Prior to posting a testimonial, we may obtain your consent to use your name and the content of the testimonial. If you wish to update, or delete your testimonial, please contact us at <a href="mailto:support@MherBookShop.com" className="privacy-link">support@MherBookShop.com</a> and be sure to include your name, testimonial content, and contact information.
            </li>
            <li>
              <strong>Request feedback:</strong> We may use your information to request feedback and to contact you about your use of our Website.
            </li>
            <li>
              <strong>To enable user-to-user communications:</strong> We may use your information in order to enable user-to-user communications with each user’s consent.
            </li>
            <li>
              <strong>To manage user accounts:</strong> We may use your information for the purposes of managing our account and keeping it in working order.
            </li>
            <li>
              <strong>To send administrative information to you:</strong> We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.
            </li>
            <li>
              <strong>To protect our Services:</strong> We may use your information as part of our efforts to keep our Website safe and secure (for example, for fraud monitoring and prevention).
            </li>
            <li>
              <strong>To enforce our terms, conditions and policies:</strong> for business purposes, to comply with legal and regulatory requirements or in connection with our contract.
            </li>
            <li>
              <strong>To respond to legal requests and prevent harm:</strong> If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.
            </li>
            <li>
              <strong>Fulfill and manage your orders:</strong> We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Website.
            </li>
            <li>
              <strong>Administer prize draws and competitions:</strong> We may use your information to administer prize draws and competitions when you elect to participate in our competitions.
            </li>
            <li>
              <strong>To deliver and facilitate delivery of services to the user:</strong> We may use your information to provide you with the requested service.
            </li>
            <li>
              <strong>To respond to user inquiries/offer support to users:</strong> We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.
            </li>
            <li>
              <strong>To send you marketing and promotional communications:</strong> We and/or our third-party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. For example, when expressing an interest in obtaining information about us or our Website, subscribing to marketing or otherwise contacting us, we will collect personal information from you. You can opt-out of our marketing emails at any time.
            </li>
            <li>
              <strong>Deliver targeted advertising to you:</strong> We may use your information to develop and display personalized content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness.
            </li>
            <li>
              <strong>For other business purposes:</strong> We may use your information for other business purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Website, products, marketing and user experience. We may use and store this information in aggregated and anonymized form so that it is not associated with individual end users and does not include personal information. We will not use identifiable personal information without your consent.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section id="section-3" className="policy-section">
          <h2>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
          <div className="policy-in-short">
            <strong>In Short:</strong> We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
          </div>
          <p>We may process or share your data that we hold based on the following legal basis:</p>
          <ul className="policy-bullet-list">
            <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
            <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
            <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
            <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</li>
            <li><strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
          </ul>
          <p>More specifically, we may need to process your data or share your personal information in the following situations:</p>
          <ul className="policy-bullet-list">
            <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            <li><strong>Vendors, Consultants and Other Third-Party Service Providers:</strong> We may share your data with third-party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts. We may allow selected third parties to use tracking technology on the Website, which will enable them to collect data on our behalf about how you interact with our Website over time. This information may be used to, among other things, analyze and track data, determine the popularity of certain content, pages or features, and better understand online activity. Unless described in this notice, we do not share, sell, rent or trade any of your information with third parties for their promotional purposes.</li>
            <li><strong>Affiliates:</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.</li>
            <li><strong>Business Partners:</strong> We may share your information with our business partners to offer you certain products, services or promotions.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section id="section-4" className="policy-section">
          <h2>4. WHO WILL YOUR INFORMATION BE SHARED WITH?</h2>
          <div className="policy-in-short">
            <strong>In Short:</strong> We only share information with the following third parties.
          </div>
          <p>
            We only share and disclose your information with the following third parties. We have categorized each party so that you may easily understand the purpose of our data collection and processing practices. If we have processed your data based on your consent and you wish to revoke your consent, please contact us using the contact details provided in section 12 below.
          </p>
          <div className="policy-table-wrapper">
            <table className="policy-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Third-Party Services</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Communicate and Chat with Users</strong></td>
                  <td>Facebook Customer Chat</td>
                </tr>
                <tr>
                  <td><strong>Content Optimization</strong></td>
                  <td>Google Site Search</td>
                </tr>
                <tr>
                  <td><strong>Retargeting Platforms</strong></td>
                  <td>Google Analytics Remarketing</td>
                </tr>
                <tr>
                  <td><strong>Web and Mobile Analytics</strong></td>
                  <td>Google Analytics</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5 */}
        <section id="section-5" className="policy-section">
          <h2>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
          <div className="policy-in-short">
            <strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.
          </div>
          
          <div className="policy-sub-block">
            <h3>What Are Cookies?</h3>
            <p>
              As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or ‘break’ certain elements of the site’s functionality.
            </p>
          </div>

          <div className="policy-sub-block">
            <h3>How We Use Cookies?</h3>
            <p>
              We use cookies for a variety of reasons detailed below. Unfortunately, in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case, they are used to provide a service that you use.
            </p>
          </div>

          <div className="policy-sub-block">
            <h3>Disabling Cookies</h3>
            <p>
              You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this Site. Therefore, it is recommended that you do not disable cookies.
            </p>
          </div>

          <div className="policy-sub-block">
            <h3>The Cookies We Set</h3>
            <ul className="policy-bullet-list">
              <li><strong>Account related cookies:</strong> If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases, they may remain afterwards to remember your site preferences when logged out.</li>
              <li><strong>Login related cookies:</strong> We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.</li>
              <li><strong>Email newsletters related cookies:</strong> This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.</li>
              <li><strong>Orders processing related cookies:</strong> This site offers e-commerce or payment facilities and some cookies are essential to ensure that your order is remembered between pages so that we can process it properly.</li>
              <li><strong>Surveys related cookies:</strong> From time to time we offer user surveys and questionnaires to provide you with interesting insights, helpful tools, or to understand our user base more accurately. These surveys may use cookies to remember who has already taken part in a survey or to provide you with accurate results after you change pages.</li>
              <li><strong>Forms related cookies:</strong> When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</li>
            </ul>
          </div>

          <div className="policy-sub-block">
            <h3>Third Party Cookies</h3>
            <p>
              In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
            </p>
            <ul className="policy-bullet-list">
              <li>This site uses <strong>Google Analytics</strong> which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content. For more information on Google Analytics cookies, see the official Google Analytics page.</li>
              <li>Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content. These cookies may track things such as how long you spend on the site or pages you visit which helps us to understand how we can improve the site for you.</li>
              <li>From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features, these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimizations our users appreciate the most.</li>
              <li>We use adverts to offset the costs of running this site and provide funding for further development. The behavioral advertising cookies used by this site are designed to ensure that we provide you with the most relevant adverts where possible by anonymously tracking your interests and presenting similar things that may be of interest.</li>
              <li>Several partners advertise on our behalf and affiliate tracking cookies simply allow us to see if our customers have come to the site through one of our partner sites so that we can credit them appropriately and where applicable allow our affiliate partners to provide any bonus that they may provide you for making a purchase.</li>
              <li>We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work the social media sites will set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.</li>
            </ul>
          </div>

          <div className="policy-sub-block">
            <h3>More Information</h3>
            <p>
              Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren’t sure whether you need or not it’s usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section id="section-6" className="policy-section">
          <h2>6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
          <div className="policy-in-short">
            <strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
          </div>
          <p>
            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
          </p>
          <p>
            When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
          </p>
        </section>

        {/* Section 7 */}
        <section id="section-7" className="policy-section">
          <h2>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
          <div className="policy-in-short">
            <strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.
          </div>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Website is at your own risk. You should only access the Website within a secure environment.
          </p>
        </section>

        {/* Section 8 */}
        <section id="section-8" className="policy-section">
          <h2>8. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
          <div className="policy-in-short">
            <strong>In Short:</strong> You may review, change, or terminate your account at any time.
          </div>
          <p>
            If you have questions or comments about your privacy rights, you may email us at <a href="mailto:support@MherBookShop.com" className="privacy-link">support@MherBookShop.com</a>.
          </p>
          
          <div className="policy-sub-block">
            <h3>Account Information</h3>
            <p>
              If you would at any time like to review or change the information in your account or terminate your account, you can:
            </p>
            <ul className="policy-bullet-list">
              <li>Log in to your account settings and update your user account.</li>
              <li>Contact us using the contact information provided.</li>
            </ul>
            <p>
              Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms and Conditions and/or comply with applicable legal requirements.
            </p>
          </div>

          <div className="policy-sub-block">
            <p>
              <strong>Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Website.
            </p>
            <p>
              <strong>Opting out of email marketing:</strong> You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list — however, we may still communicate with you, for example to send you service-related emails that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes. To otherwise opt-out, you may:
            </p>
            <ul className="policy-bullet-list">
              <li>Contact us using the contact information provided.</li>
            </ul>
          </div>
        </section>

        {/* Section 9 */}
        <section id="section-9" className="policy-section">
          <h2>9. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
          <p>
            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
          </p>
        </section>

        {/* Section 10 */}
        <section id="section-10" className="policy-section">
          <h2>10. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
          <div className="policy-in-short">
            <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.
          </div>
          <p>
            We may update this privacy notice from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
          </p>
        </section>

        {/* Section 11 */}
        <section id="section-11" className="policy-section">
          <h2>11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
          <p>
            Based on applicable laws, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please contact us at: <a href="mailto:support@MherBookShop.com" className="privacy-link">support@MherBookShop.com</a>. We will respond to your request within 30 days.
          </p>
        </section>

        {/* Section 12 */}
        <section id="section-12" className="policy-section">
          <h2>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
          <p>If you have questions or comments about this notice, please contact us:</p>
          
          <div className="privacy-contact-card-box">
            <div className="contact-box-row">
              <span className="contact-box-icon"><Mail size={18} /></span>
              <div>
                <strong>By email:</strong>
                <a href="mailto:support@MherBookShop.com" className="privacy-link">support@MherBookShop.com</a>
              </div>
            </div>

            <div className="contact-box-row">
              <span className="contact-box-icon"><ExternalLink size={18} /></span>
              <div>
                <strong>By visiting this page on our website:</strong>
                <Link to="/contact" className="privacy-link">Contact us</Link>
              </div>
            </div>

            <div className="contact-box-row">
              <span className="contact-box-icon"><Phone size={18} /></span>
              <div>
                <strong>By phone call:</strong>
                <a href="tel:03222848222" className="privacy-link">03222848222</a>
              </div>
            </div>

            <div className="contact-box-row">
              <span className="contact-box-icon"><MessageSquare size={18} /></span>
              <div>
                <strong>By WhatsApp:</strong>
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B923222848222&text=Hello&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-link"
                >
                  03222848222 (Click to chat)
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
