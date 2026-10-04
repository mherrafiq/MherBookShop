import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HelpCircle,
  Search,
  ChevronDown,
  Package,
  CreditCard,
  Printer,
  RotateCcw,
  UserCheck,
  MessageSquare,
  Phone,
  Mail,
  X,
  Sparkles,
  ArrowRight,
  Share2,
  Check
} from 'lucide-react';

const FAQ_DATA = [
  {
    id: 'orders-products',
    prefix: 'ordersproducts',
    category: 'Orders & Products',
    icon: Package,
    color: '#818cf8',
    description: 'Book authenticity, placing orders, order tracking, and modifications.',
    questions: [
      {
        id: 'ordersproducts-01',
        q: 'Are products on KitaabNow new and unused?',
        a: (
          <div>
            <p>
              <strong>Yes, 100% brand new and genuine.</strong> All books, stationery, academic guides, and educational supplies sold on our store are completely new, unread, and sourced directly from licensed publishers, accredited distributors, and verified authorized suppliers.
            </p>
            <p>
              We maintain strict quality control standards. We never sell pirated, counterfeit, or previously owned items without explicit prior disclosure.
            </p>
          </div>
        )
      },
      {
        id: 'ordersproducts-02',
        q: 'Are there any hidden costs and charges?',
        a: (
          <div>
            <p>
              <strong>No hidden charges whatsoever.</strong> The final amount displayed at checkout is the exact total you pay. It includes the item price, applicable sales tax, and transparent shipping charges.
            </p>
            <p>
              There are no additional handling fees, transaction surcharge, or unexpected courier costs upon delivery.
            </p>
          </div>
        )
      },
      {
        id: 'ordersproducts-03',
        q: 'Can I request a certain book?',
        a: (
          <div>
            <p>
              <strong>Yes, we gladly accept custom book requests!</strong> If you are looking for a rare title, an out-of-stock textbook, or an international edition not currently listed in our catalog, our procurement team can source it for you.
            </p>
            <p>
              You can submit your request via our <Link to="/contact" className="faq-inline-link">Contact Page</Link> or send us the book details (Title, Author, ISBN) via WhatsApp at <strong>03222848222</strong>.
            </p>
          </div>
        )
      },
      {
        id: 'ordersproducts-04',
        q: 'Is there any minimum order amount to place an order?',
        a: (
          <div>
            <p>
              <strong>No minimum order amount is required.</strong> You are welcome to order a single notebook, pen, or paperback novel, as well as large academic and bulk institutional orders.
            </p>
          </div>
        )
      },
      {
        id: 'ordersproducts-05',
        q: 'Can I place an order through a phone call or WhatsApp?',
        a: (
          <div>
            <p>
              <strong>Yes, absolutely!</strong> While placing an order directly through our website ensures instant order confirmation and live tracking, our support desk is happy to process orders manually.
            </p>
            <p>
              Simply call or WhatsApp our official helpline at <a href="tel:03222848222" className="faq-inline-link">03222848222</a> with your desired item list, full name, complete shipping address, and active phone number.
            </p>
          </div>
        )
      },
      {
        id: 'ordersproducts-06',
        q: 'What happens after an order is placed?',
        a: (
          <div>
            <p>Here is what happens step-by-step after you click <em>Place Order</em>:</p>
            <ol className="faq-steps-list">
              <li><strong>Order Confirmation:</strong> You receive an instant confirmation SMS &amp; email with your unique Order ID.</li>
              <li><strong>Verification &amp; Quality Check:</strong> Our inventory team pulls the books and performs a protective check.</li>
              <li><strong>Secure Packaging:</strong> Items are wrapped in heavy-duty waterproof bubble wrap and boxed.</li>
              <li><strong>Courier Dispatch:</strong> The package is handed to our courier partner and a live tracking link is sent to you.</li>
              <li><strong>Doorstep Delivery:</strong> The courier rider contacts you and safely delivers your parcel.</li>
            </ol>
          </div>
        )
      },
      {
        id: 'ordersproducts-07',
        q: 'How will I know you have received my order?',
        a: (
          <div>
            <p>
              Immediately upon placing your order, you will see a confirmation screen with your Order ID. You will also receive:
            </p>
            <ul className="faq-bullet-list">
              <li>An automated confirmation email containing your itemized receipt and order details.</li>
              <li>An SMS notification confirming receipt of your order.</li>
              <li>The order will immediately reflect under the <em>Order History</em> in your <Link to="/account" className="faq-inline-link">Account Dashboard</Link>.</li>
            </ul>
          </div>
        )
      },
      {
        id: 'ordersproducts-08',
        q: 'Can I cancel an order after it has been placed?',
        a: (
          <div>
            <p>
              <strong>Yes, cancellations are 100% free before dispatch.</strong> You can cancel your order at any time while it is in <em>Processing</em> or <em>Pending</em> status.
            </p>
            <p>
              To cancel, visit your <Link to="/account" className="faq-inline-link">Account Dashboard</Link> or contact our customer support immediately at <strong>03222848222</strong> with your Order ID before the package is handed over to the courier.
            </p>
          </div>
        )
      },
      {
        id: 'ordersproducts-09',
        q: 'Can I add items to an existing order?',
        a: (
          <div>
            <p>
              If your order has not yet been packed or dispatched, you can contact our support team to merge additional books into your current parcel so you do not incur extra shipping fees.
            </p>
            <p>
              If the order has already been dispatched, you can easily place a new order on the website.
            </p>
          </div>
        )
      },
      {
        id: 'ordersproducts-10',
        q: 'How can I retrieve my order number?',
        a: (
          <div>
            <p>Your Order Number (e.g. <code>#ORD-89421</code>) can be found in:</p>
            <ul className="faq-bullet-list">
              <li>Your confirmation email subject line and body.</li>
              <li>The SMS text message sent to your mobile phone.</li>
              <li>Your <Link to="/account" className="faq-inline-link">Account Dashboard</Link> under the "Orders" tab.</li>
            </ul>
          </div>
        )
      },
      {
        id: 'ordersproducts-11',
        q: 'How do I track my order?',
        a: (
          <div>
            <p>
              You can check your order tracking information directly in your <Link to="/account" className="faq-inline-link">Account Dashboard</Link>.
            </p>
            <p>
              Additionally, once your parcel is dispatched, you will receive an SMS and email with a live tracking number and courier link (e.g. Leopards, TCS, or Trax) allowing you to track the exact shipment location in real-time.
            </p>
          </div>
        )
      }
    ]
  },
  {
    id: 'payments-delivery',
    prefix: 'paymentsdelivery',
    category: 'Payments & Delivery',
    icon: CreditCard,
    color: '#06b6d4',
    description: 'Payment options, Cash on Delivery, delivery timeline, rates, and addresses.',
    questions: [
      {
        id: 'paymentsdelivery-01',
        q: 'What payment methods are accepted by KitaabNow?',
        a: (
          <div>
            <p>We provide multiple flexible and secure payment gateways:</p>
            <ul className="faq-bullet-list">
              <li><strong>Cash on Delivery (COD):</strong> Pay in cash directly to the courier rider upon receiving your package anywhere in Pakistan.</li>
              <li><strong>Direct Bank Transfer / IBFT:</strong> Transfer seamlessly via your online banking app or ATM.</li>
              <li><strong>Mobile Wallets:</strong> Instant payments via JazzCash and EasyPaisa.</li>
              <li><strong>Debit &amp; Credit Cards:</strong> Visa, MasterCard, and UnionPay processed via 256-bit encrypted checkout.</li>
            </ul>
          </div>
        )
      },
      {
        id: 'paymentsdelivery-02',
        q: 'Can I open a cash on delivery package without making a payment to the courier first?',
        a: (
          <div>
            <p>
              Under standard courier operating policies across Pakistan, delivery riders are strictly required to collect full cash payment before handing over or unsealing the parcel envelope.
            </p>
            <p>
              <strong>You are always protected:</strong> If after opening the parcel you notice any missing items, damaged condition, or incorrect titles, our <strong>7-Day Hassle-Free Replacement &amp; Return Policy</strong> provides a prompt replacement or 100% money-back refund.
            </p>
          </div>
        )
      },
      {
        id: 'paymentsdelivery-03',
        q: 'What are the delivery charges and how long will it take for an order to be shipped?',
        a: (
          <div>
            <p><strong>Shipping Timelines:</strong></p>
            <ul className="faq-bullet-list">
              <li><strong>Karachi, Lahore, Islamabad / Rawalpindi:</strong> 2 to 3 business days.</li>
              <li><strong>Other Cities &amp; Nationwide:</strong> 3 to 5 business days.</li>
            </ul>
            <p><strong>Delivery Charges:</strong></p>
            <p>
              Standard flat-rate shipping is typically <strong>Rs. 150 – Rs. 250</strong> nationwide. We frequently offer <em>FREE DELIVERY</em> on qualifying basket sizes during promotional periods.
            </p>
          </div>
        )
      },
      {
        id: 'paymentsdelivery-04',
        q: 'Can I add any instructions for order or delivery?',
        a: (
          <div>
            <p>
              <strong>Yes!</strong> During checkout on the shipping form, you will find an <em>"Order Notes / Special Delivery Instructions"</em> box.
            </p>
            <p>
              You can include preferred delivery times (e.g. "Deliver between 2 PM - 5 PM"), nearby landmarks, or gate security instructions for the rider.
            </p>
          </div>
        )
      },
      {
        id: 'paymentsdelivery-06',
        q: 'Can I self collect my order?',
        a: (
          <div>
            <p>
              <strong>Yes, self-collection is available.</strong> You can pick up your order directly from our main fulfillment office during operational hours (Monday to Friday, 11:00 AM – 6:00 PM).
            </p>
            <p>
              Please mention "Self-Collection" in your order notes or notify us on WhatsApp prior to visiting so our team can have your parcel packed and ready at the front desk.
            </p>
          </div>
        )
      },
      {
        id: 'paymentsdelivery-07',
        q: 'Does KitaabNow deliver orders on weekends or at night?',
        a: (
          <div>
            <p>
              Our courier partners conduct deliveries from <strong>Monday through Saturday between 9:00 AM and 6:00 PM</strong>.
            </p>
            <p>
              Standard deliveries are paused on Sundays and national public holidays. Late-night deliveries are not supported due to courier security protocols.
            </p>
          </div>
        )
      },
      {
        id: 'paymentsdelivery-08',
        q: 'How do I change my delivery address?',
        a: (
          <div>
            <p>
              You can change a delivery address by clicking on <strong>Addresses</strong> under your <Link to="/account" className="faq-inline-link">Account Dashboard</Link>.
            </p>
            <p>
              If you need to change a delivery address after you’ve placed an order, please <Link to="/contact" className="faq-inline-link">contact us</Link> immediately or WhatsApp our support desk at <strong>03222848222</strong> before the parcel is dispatched.
            </p>
          </div>
        )
      },
      {
        id: 'paymentsdelivery-09',
        q: 'Can I change a delivery address after my order has been shipped?',
        a: (
          <div>
            <p>
              If your parcel has already left our fulfillment center and is in transit with the courier, updating the destination address may require rerouting at the courier hub and could add 24 to 48 hours to the delivery timeframe.
            </p>
            <p>
              Please contact us immediately with your tracking number, and our team will coordinate the address amendment directly with the courier dispatch team.
            </p>
          </div>
        )
      },
      {
        id: 'paymentsdelivery-10',
        q: 'Do we ship Internationally?',
        a: (
          <div>
            <p>
              <strong>Yes! We ship worldwide</strong> to readers, universities, and expatriates across the UK, USA, UAE, Canada, Australia, Europe, and over 50 countries via DHL Express and tracked international postal services.
            </p>
            <p>
              International shipping charges depend on parcel weight and destination country. For an international quote, please reach out through our <Link to="/contact" className="faq-inline-link">Contact Desk</Link>.
            </p>
          </div>
        )
      },
      {
        id: 'paymentsdelivery-11',
        q: 'How can I check if my order has been shipped yet?',
        a: (
          <div>
            <p>
              When your order status changes from <em>Processing</em> to <em>Shipped</em>, you will automatically receive an SMS notification and tracking email.
            </p>
            <p>
              You can also check real-time fulfillment status by logging into your <Link to="/account" className="faq-inline-link">Account Dashboard</Link> at any time.
            </p>
          </div>
        )
      }
    ]
  },
  {
    id: 'print-bind',
    prefix: 'printbind',
    category: 'Print & Bind Service',
    icon: Printer,
    color: '#10b981',
    description: 'Document printing, thesis binding, paper grades, formats, and customization.',
    questions: [
      {
        id: 'printbind-01',
        q: 'How to place a print and bind order?',
        a: (
          <div>
            <p>Placing a custom Print &amp; Bind order is quick and straightforward:</p>
            <ol className="faq-steps-list">
              <li>Upload your digital document (PDF, Word doc, slides) via our portal or provide a cloud link.</li>
              <li>Select your preferred paper size (A4, A5, B5) and paper thickness (75gsm, 80gsm, 100gsm).</li>
              <li>Choose color preference (Black &amp; White, Full Color, or mixed pages).</li>
              <li>Select your desired binding style (Spiral / Wire-O, Tape, Softcover Perfect Bind, or Deluxe Hardcover).</li>
              <li>Review the calculated price and proceed to checkout.</li>
            </ol>
          </div>
        )
      },
      {
        id: 'printbind-02',
        q: 'What paper size and quality is used for printing?',
        a: (
          <div>
            <p>
              We utilize premium, high-brightness, opacity-tested imported paper to prevent ink bleed-through:
            </p>
            <ul className="faq-bullet-list">
              <li><strong>75 GSM &amp; 80 GSM:</strong> Standard high-grade paper for university course packs, lecture notes, and general reading.</li>
              <li><strong>100 GSM &amp; 120 GSM:</strong> Ultra-smooth executive paper ideal for color graphics, presentations, and medical atlases.</li>
              <li><strong>Art Paper / Card (150-300 GSM):</strong> Used for high-gloss covers and full-color photo inserts.</li>
            </ul>
          </div>
        )
      },
      {
        id: 'printbind-03',
        q: 'Do you offer printing on sizes other than A4?',
        a: (
          <div>
            <p>
              <strong>Yes!</strong> In addition to standard <strong>A4</strong>, we offer:
            </p>
            <ul className="faq-bullet-list">
              <li><strong>A5:</strong> Pocket-sized booklets, novellas, and prayer books.</li>
              <li><strong>B5:</strong> Standard textbook format, popular for academic publications.</li>
              <li><strong>Letter &amp; Legal:</strong> Official court briefs, corporate documents, and research papers.</li>
            </ul>
          </div>
        )
      },
      {
        id: 'printbind-04',
        q: 'Can I add instructions for print order?',
        a: (
          <div>
            <p>
              <strong>Yes, full customization is supported.</strong> You can add special instructions regarding:
            </p>
            <ul className="faq-bullet-list">
              <li>Single-sided vs. Double-sided (duplex) printing.</li>
              <li>Matte or Glossy lamination on the cover.</li>
              <li>Margin adjustments and spine text formatting.</li>
            </ul>
          </div>
        )
      },
      {
        id: 'printbind-05',
        q: 'What if certain pages need to be printed out of a document?',
        a: (
          <div>
            <p>
              You can simply specify the exact page range in your order notes (e.g. <em>"Print only pages 12 to 85"</em> or <em>"Print pages 1-10 in color, and pages 11-120 in black &amp; white"</em>).
            </p>
            <p>
              Our automated system and operators will adjust the job and charge accordingly to save you costs.
            </p>
          </div>
        )
      },
      {
        id: 'printbind-06',
        q: 'Can I request for two fold printing option?',
        a: (
          <div>
            <p>
              <strong>Yes.</strong> We offer 2-up layout (2 document pages per single printed sheet side), booklet folding, and tri-fold brochure layouts. This option is popular for exam revision sheets, study slides, and pocket study guides.
            </p>
          </div>
        )
      },
      {
        id: 'printbind-07',
        q: 'How is the final price for a print and bind service calculated?',
        a: (
          <div>
            <p>The total cost is calculated automatically based on four parameters:</p>
            <ul className="faq-bullet-list">
              <li><strong>Page count:</strong> Total printed sides.</li>
              <li><strong>Color mode:</strong> Black &amp; White per-page rate vs. Color per-page rate.</li>
              <li><strong>Paper stock:</strong> Selected GSM weight.</li>
              <li><strong>Binding type:</strong> Spiral, Tape, Softcover Thermal, or Hardcover Embossed.</li>
            </ul>
          </div>
        )
      },
      {
        id: 'printbind-08',
        q: 'Can a print order be canceled once the order has been printed?',
        a: (
          <div>
            <p>
              Because customized print and bind orders are bespoke products manufactured specifically to your custom digital files, <strong>orders cannot be canceled or refunded once physical printing or binding has begun</strong>.
            </p>
            <p>
              If you need to make changes or cancel, please contact support immediately before production commences.
            </p>
          </div>
        )
      },
      {
        id: 'printbind-10',
        q: 'How to choose a binding type for my document?',
        a: (
          <div>
            <ul className="faq-bullet-list">
              <li><strong>Spiral / Wire-O Binding:</strong> Ideal for workbooks, recipe books, and lab manuals that need to lie 360° flat on a desk.</li>
              <li><strong>Softcover / Perfect Glue Binding:</strong> Professional bookstore-grade paperback finish, best for novels, guides, and manuals.</li>
              <li><strong>Hardcover Binding:</strong> Sturdy leatherette or hardcase with gold/silver foiling, recommended for university theses, dissertations, and collector volumes.</li>
              <li><strong>Tape / Staple Binding:</strong> Quick, economical option for assignments and documents under 60 pages.</li>
            </ul>
          </div>
        )
      },
      {
        id: 'printbind-11',
        q: 'What document formats can I upload?',
        a: (
          <div>
            <p>
              We strongly recommend uploading <strong>PDF (.pdf)</strong> files to guarantee that fonts, margins, page numbers, and vector graphics do not shift during printing.
            </p>
            <p>
              We also support Microsoft Word (<code>.docx</code>, <code>.doc</code>), PowerPoint (<code>.pptx</code>), and compressed image archives (<code>.zip</code>).
            </p>
          </div>
        )
      },
      {
        id: 'printbind-12',
        q: 'What is the maximum document upload size?',
        a: (
          <div>
            <p>
              Our direct website file uploader accepts single files up to <strong>100 MB</strong> in size.
            </p>
          </div>
        )
      },
      {
        id: 'printbind-13',
        q: 'My document file size exceeds the allowed limit, can I provide a download link?',
        a: (
          <div>
            <p>
              <strong>Yes!</strong> If your file exceeds 100 MB, you can upload it to Google Drive, Dropbox, OneDrive, or WeTransfer and paste the shareable link in the order notes, or email the link to <a href="mailto:support@mherbookshop.com" className="faq-inline-link">support@mherbookshop.com</a> referencing your Order ID.
            </p>
          </div>
        )
      }
    ]
  },
  {
    id: 'exchange-returns',
    prefix: 'exchangereturnrefund',
    category: 'Exchange, Returns & Refunds',
    icon: RotateCcw,
    color: '#f59e0b',
    description: '7-day replacement guarantee, return instructions, eligibility, and refund methods.',
    questions: [
      {
        id: 'exchangereturnrefund-01',
        q: 'How do I return an Item?',
        a: (
          <div>
            <p>Returning an item is quick and stress-free:</p>
            <ol className="faq-steps-list">
              <li>Contact our support team within <strong>7 days</strong> of delivery via email or WhatsApp (<strong>03222848222</strong>).</li>
              <li>Provide your Order ID, reason for return, and clear photos/short video showing the defect or issue.</li>
              <li>Our team will inspect and approve the request within 24 hours and issue a return shipping label or schedule courier pickup.</li>
              <li>Pack the book safely in its original packaging for handover.</li>
            </ol>
          </div>
        )
      },
      {
        id: 'exchangereturnrefund-02',
        q: 'What Items can be returned, exchanged or refunded?',
        a: (
          <div>
            <p><strong>Eligible for Return / Exchange:</strong></p>
            <ul className="faq-bullet-list">
              <li>Books with missing pages, printing errors, or defective bindings.</li>
              <li>Items physically damaged in transit.</li>
              <li>Incorrect title or edition dispatched in error.</li>
              <li>Unopened, unread books in brand-new sealed condition.</li>
            </ul>
            <p><strong>Non-eligible:</strong></p>
            <ul className="faq-bullet-list">
              <li>Custom Print &amp; Bind jobs where customer submitted incorrect source files.</li>
              <li>Digital downloads or redeemed online access codes.</li>
              <li>Items showing customer wear, pen markings, or folded pages.</li>
            </ul>
          </div>
        )
      },
      {
        id: 'exchangereturnrefund-03',
        q: 'Where do i send the items that I want to return?',
        a: (
          <div>
            <p>
              Once your return request is authorized by our support desk, our representative will provide the return shipping address for our nearest regional fulfillment hub.
            </p>
            <p>
              In major cities, we can arrange a convenient doorstep courier pickup directly from your address.
            </p>
          </div>
        )
      },
      {
        id: 'exchangereturnrefund-04',
        q: 'What is your return or exchange policy?',
        a: (
          <div>
            <p>
              We stand behind our products with a customer-first <strong>7-Day Return and Exchange Guarantee</strong>.
            </p>
            <p>
              If you receive any damaged, misprinted, or incorrect book, we will replace it free of charge (with zero additional courier fees) or issue a complete refund according to your preference.
            </p>
          </div>
        )
      },
      {
        id: 'exchangereturnrefund-05',
        q: 'When will I receive my refund?',
        a: (
          <div>
            <p>
              Once your returned package reaches our warehouse and completes a brief 24-hour verification inspection:
            </p>
            <ul className="faq-bullet-list">
              <li><strong>JazzCash / EasyPaisa / Bank Transfer (IBFT):</strong> Processed within 24 to 48 business hours.</li>
              <li><strong>Credit / Debit Card:</strong> 5 to 7 business days, depending on your bank's processing cycle.</li>
              <li><strong>Store Credit Voucher:</strong> Instant (immediately usable on any future order).</li>
            </ul>
          </div>
        )
      },
      {
        id: 'exchangereturnrefund-06',
        q: 'How will I receive my refund?',
        a: (
          <div>
            <p>
              Refunds are credited through your preferred payout channel:
            </p>
            <ul className="faq-bullet-list">
              <li>Direct Bank Account Transfer (IBFT).</li>
              <li>JazzCash or EasyPaisa mobile account.</li>
              <li>Store Credit Voucher code sent to your email with no expiration date.</li>
              <li>Original payment card reversal for online card transactions.</li>
            </ul>
          </div>
        )
      }
    ]
  },
  {
    id: 'user-account',
    prefix: 'useraccount',
    category: 'User Account',
    icon: UserCheck,
    color: '#ec4899',
    description: 'Account registration, password recovery, profile settings, and data privacy.',
    questions: [
      {
        id: 'useraccount-01',
        q: 'Do I need to setup an account to place an order?',
        a: (
          <div>
            <p>
              <strong>No, account creation is optional.</strong> You can quickly place orders as a guest without registering.
            </p>
            <p>
              However, creating a free account is highly recommended because it lets you track orders in real time, view order history, save multiple delivery addresses, and maintain a wishlist.
            </p>
          </div>
        )
      },
      {
        id: 'useraccount-02',
        q: 'How to create a user account?',
        a: (
          <div>
            <p>
              Creating an account takes less than 30 seconds:
            </p>
            <ol className="faq-steps-list">
              <li>Click on the <Link to="/register" className="faq-inline-link">Register</Link> link in the top-right navbar.</li>
              <li>Enter your Name, Email address, and choose a secure password.</li>
              <li>Click <strong>Create Account</strong> to instantly log in and access your dashboard.</li>
            </ol>
          </div>
        )
      },
      {
        id: 'useraccount-03',
        q: 'I have forgotten my password, what should I do?',
        a: (
          <div>
            <p>
              If you have forgotten your password, go to the <Link to="/login" className="faq-inline-link">Login Page</Link> and click <em>"Forgot Password?"</em>.
            </p>
            <p>
              Enter your registered email address, and we will immediately email you a password reset link to securely set a new password.
            </p>
          </div>
        )
      },
      {
        id: 'useraccount-04',
        q: 'How to check my account details and order history?',
        a: (
          <div>
            <p>
              Log in and navigate to your <Link to="/account" className="faq-inline-link">Account Dashboard</Link>. From there, you can:
            </p>
            <ul className="faq-bullet-list">
              <li>View all past and active orders with live fulfillment statuses.</li>
              <li>Manage your saved shipping and billing addresses.</li>
              <li>Update your personal profile name, email, and contact number.</li>
            </ul>
          </div>
        )
      },
      {
        id: 'useraccount-05',
        q: 'Is my information secure and private?',
        a: (
          <div>
            <p>
              <strong>Yes, your privacy and data security are our top priorities.</strong> Our entire website is secured with enterprise-grade 256-bit SSL encryption.
            </p>
            <p>
              We never store sensitive card CVVs or passwords in plain text, and we strictly adhere to our <Link to="/privacy-policy" className="faq-inline-link">Privacy Policy</Link>—your personal details will never be sold or shared with unauthorized third parties.
            </p>
          </div>
        )
      }
    ]
  }
];

export default function FAQ() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState({});
  const [copiedId, setCopiedId] = useState(null);
  const searchInputRef = useRef(null);

  // Scroll to top on load or handle hash
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      // Find which question matches this hash
      let foundCategory = null;
      FAQ_DATA.forEach(cat => {
        cat.questions.forEach(q => {
          if (q.id === hash) {
            foundCategory = cat.id;
          }
        });
      });

      if (foundCategory) {
        setSelectedCategory('all');
        setOpenItems(prev => ({ ...prev, [hash]: true }));
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  // Handle toggling single question
  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Expand all visible questions
  const handleExpandAll = (questionsToExpand) => {
    const newState = { ...openItems };
    questionsToExpand.forEach(q => {
      newState[q.id] = true;
    });
    setOpenItems(newState);
  };

  // Collapse all visible questions
  const handleCollapseAll = (questionsToCollapse) => {
    const newState = { ...openItems };
    questionsToCollapse.forEach(q => {
      newState[q.id] = false;
    });
    setOpenItems(newState);
  };

  // Copy direct link to clipboard
  const handleCopyLink = (e, id) => {
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  // Filtered FAQs based on category & search query
  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return FAQ_DATA.map(category => {
      if (selectedCategory !== 'all' && category.id !== selectedCategory) {
        return null;
      }

      const matchingQuestions = category.questions.filter(item => {
        if (!q) return true;
        const inQuestion = item.q.toLowerCase().includes(q);
        const inId = item.id.toLowerCase().includes(q);
        return inQuestion || inId;
      });

      if (matchingQuestions.length === 0) return null;

      return {
        ...category,
        questions: matchingQuestions
      };
    }).filter(Boolean);
  }, [searchQuery, selectedCategory]);

  // Total visible questions count
  const totalVisibleQuestions = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.questions.length, 0);
  }, [filteredCategories]);

  // All visible question items for bulk expand/collapse
  const allVisibleQuestions = useMemo(() => {
    return filteredCategories.flatMap(cat => cat.questions);
  }, [filteredCategories]);

  const totalAllQuestions = useMemo(() => {
    return FAQ_DATA.reduce((acc, cat) => acc + cat.questions.length, 0);
  }, []);

  return (
    <div className="faq-page-wrapper">
      {/* Hero Header Section */}
      <section className="faq-hero">
        <div className="faq-hero-content">
          <div className="faq-badge">
            <HelpCircle size={16} className="faq-badge-icon" />
            <span>Help Center &amp; Support</span>
          </div>

          <h1 className="faq-hero-title">
            Frequently Asked <span className="faq-title-highlight">Questions</span>
          </h1>

          <p className="faq-hero-subtitle">
            Find fast answers to common questions about orders, shipping, print &amp; bind services, returns, and your account.
          </p>

          {/* Search Box */}
          <div className="faq-search-box-wrap">
            <div className="faq-search-input-container">
              <Search size={20} className="faq-search-icon" />
              <input
                ref={searchInputRef}
                type="text"
                className="faq-search-input"
                placeholder="Search FAQs by question, topic or keyword (e.g., delivery, return, print)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search FAQs"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="faq-search-clear-btn"
                  onClick={() => {
                    setSearchQuery('');
                    if (searchInputRef.current) searchInputRef.current.focus();
                  }}
                  title="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            {searchQuery && (
              <div className="faq-search-results-pill">
                Showing <strong>{totalVisibleQuestions}</strong> result{totalVisibleQuestions !== 1 ? 's' : ''} for "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="faq-container">
        
        {/* Category Navigation Pills */}
        <div className="faq-category-nav">
          <button
            type="button"
            className={`faq-cat-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            <Sparkles size={16} />
            <span>All Categories</span>
            <span className="faq-cat-count">{totalAllQuestions}</span>
          </button>

          {FAQ_DATA.map(cat => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`faq-cat-btn ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <Icon size={16} style={{ color: isActive ? '#fff' : cat.color }} />
                <span>{cat.category}</span>
                <span className="faq-cat-count">{cat.questions.length}</span>
              </button>
            );
          })}
        </div>

        {/* Action Controls Bar */}
        <div className="faq-controls-bar">
          <div className="faq-results-indicator">
            {selectedCategory === 'all' ? (
              <span>Displaying <strong>{totalVisibleQuestions}</strong> questions across all categories</span>
            ) : (
              <span>
                Displaying <strong>{totalVisibleQuestions}</strong> questions in{' '}
                <strong>{FAQ_DATA.find(c => c.id === selectedCategory)?.category}</strong>
              </span>
            )}
          </div>

          <div className="faq-actions-group">
            <button
              type="button"
              className="faq-toggle-all-btn"
              onClick={() => handleExpandAll(allVisibleQuestions)}
            >
              Expand All
            </button>
            <button
              type="button"
              className="faq-toggle-all-btn"
              onClick={() => handleCollapseAll(allVisibleQuestions)}
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* FAQs List Section */}
        {filteredCategories.length > 0 ? (
          <div className="faq-sections-list">
            {filteredCategories.map(cat => {
              const Icon = cat.icon;
              return (
                <section key={cat.id} className="faq-category-card" id={cat.id}>
                  {/* Category Header */}
                  <div className="faq-cat-header">
                    <div className="faq-cat-icon-wrap" style={{ background: `${cat.color}20`, borderColor: `${cat.color}50` }}>
                      <Icon size={24} style={{ color: cat.color }} />
                    </div>
                    <div className="faq-cat-header-text">
                      <h2 className="faq-cat-title">{cat.category}</h2>
                      <p className="faq-cat-desc">{cat.description}</p>
                    </div>
                    <span className="faq-cat-badge">{cat.questions.length} Questions</span>
                  </div>

                  {/* Accordion Questions */}
                  <div className="faq-accordion-list">
                    {cat.questions.map((item, index) => {
                      const isOpen = !!openItems[item.id];
                      return (
                        <div
                          key={item.id}
                          id={item.id}
                          className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
                        >
                          {/* Accordion Trigger Header */}
                          <button
                            type="button"
                            className="faq-accordion-trigger"
                            onClick={() => toggleItem(item.id)}
                            aria-expanded={isOpen}
                          >
                            <span className="faq-question-index">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <span className="faq-question-text">{item.q}</span>

                            <div className="faq-trigger-right">
                              {/* Direct Anchor Copy Button */}
                              <button
                                type="button"
                                className="faq-anchor-btn"
                                title="Copy direct link to this FAQ"
                                onClick={(e) => handleCopyLink(e, item.id)}
                              >
                                {copiedId === item.id ? (
                                  <span className="faq-copied-tag">
                                    <Check size={12} /> Copied!
                                  </span>
                                ) : (
                                  <Share2 size={15} />
                                )}
                              </button>

                              <div className={`faq-chevron-wrap ${isOpen ? 'rotated' : ''}`}>
                                <ChevronDown size={18} />
                              </div>
                            </div>
                          </button>

                          {/* Accordion Body */}
                          {isOpen && (
                            <div className="faq-accordion-body">
                              <div className="faq-answer-content">
                                {item.a}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="faq-empty-state">
            <div className="faq-empty-icon">
              <Search size={40} />
            </div>
            <h3 className="faq-empty-title">No matching questions found</h3>
            <p className="faq-empty-desc">
              We couldn't find any FAQs matching "<strong>{searchQuery}</strong>". Try checking for spelling errors or searching for broader terms.
            </p>
            <div className="faq-empty-actions">
              <button
                type="button"
                className="faq-reset-search-btn"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Clear Search Filter
              </button>
              <Link to="/contact" className="faq-contact-support-btn">
                Contact Customer Support
              </Link>
            </div>
          </div>
        )}

        {/* Quick Contact & Support Footer Cards */}
        <section className="faq-support-banner">
          <div className="faq-support-header">
            <h3 className="faq-support-title">Still have questions? We're here to help!</h3>
            <p className="faq-support-subtitle">
              Can't find the answer you're looking for? Reach out directly to our dedicated friendly support team.
            </p>
          </div>

          <div className="faq-support-cards-grid">
            <a href="tel:03222848222" className="faq-support-card">
              <div className="faq-support-card-icon phone">
                <Phone size={22} />
              </div>
              <div className="faq-support-card-info">
                <h4>Call or WhatsApp Us</h4>
                <p>03222848222</p>
                <span className="faq-support-card-hint">Mon – Fri: 11 AM - 6 PM</span>
              </div>
              <ArrowRight size={18} className="faq-card-arrow" />
            </a>

            <a href="mailto:support@mherbookshop.com" className="faq-support-card">
              <div className="faq-support-card-icon email">
                <Mail size={22} />
              </div>
              <div className="faq-support-card-info">
                <h4>Email Support</h4>
                <p>support@mherbookshop.com</p>
                <span className="faq-support-card-hint">Response within 24 hours</span>
              </div>
              <ArrowRight size={18} className="faq-card-arrow" />
            </a>

            <Link to="/contact" className="faq-support-card">
              <div className="faq-support-card-icon contact">
                <MessageSquare size={22} />
              </div>
              <div className="faq-support-card-info">
                <h4>Contact Form</h4>
                <p>Submit a customized ticket</p>
                <span className="faq-support-card-hint">Book requests &amp; inquiries</span>
              </div>
              <ArrowRight size={18} className="faq-card-arrow" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
