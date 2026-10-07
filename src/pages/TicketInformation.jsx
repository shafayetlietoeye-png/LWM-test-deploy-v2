import React, { useState, useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function TicketInformation() {
  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [visitDate, setVisitDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [ticketCategory, setTicketCategory] = useState('');
  const [passportNo, setPassportNo] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  // Accordion State - Initially closed as requested by user
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    document.body.classList.add('page-museum-story');
    document.title = 'Ticket Information | Liberation War Museum';
    return () => {
      document.body.classList.remove('page-museum-story');
    };
  }, []);

  // Pricing Matrix - Auto Calculated based on selected category
  const getUnitPrice = (cat) => {
    switch (cat) {
      case 'bangladeshi-adult':
        return 50.00;
      case 'bangladeshi-child':
        return 20.00;
      case 'foreigner':
        return 500.00;
      case 'saarc':
        return 50.00;
      default:
        return 0.00;
    }
  };

  const getCategoryLabel = (cat) => {
    switch (cat) {
      case 'bangladeshi-adult':
        return 'Bangladeshi (Adult)';
      case 'bangladeshi-child':
        return 'Bangladeshi (Child)';
      case 'foreigner':
        return 'Foreign Visitor';
      case 'saarc':
        return 'SAARC Visitor';
      default:
        return 'General Admission';
    }
  };

  const unitPrice = getUnitPrice(ticketCategory);
  const serviceChargePct = 4.00;
  const parsedQuantity = parseInt(quantity, 10) || 1;
  const totalTicketPrice = unitPrice > 0 ? unitPrice * parsedQuantity : 0.00;
  const serviceCharge = totalTicketPrice > 0 ? totalTicketPrice * (serviceChargePct / 100) : 0.00;
  const netPayable = totalTicketPrice + serviceCharge;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Please enter your Name.');
      return;
    }
    if (!phone.trim()) {
      alert('Please enter your Phone Number.');
      return;
    }
    if (!ticketCategory) {
      alert('Please select a Ticket Category.');
      return;
    }
    if (!visitDate) {
      alert('Please select a Visit Date.');
      return;
    }

    const randomSerial = 'LWM-TKT-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomSerial);
    setIsSubmitted(true);
  };

  const handleDownloadTicket = () => {
    const categoryLabel = getCategoryLabel(ticketCategory);
    const ticketHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Liberation War Museum - e-Ticket (${ticketId})</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #F4EFE6; padding: 30px; margin: 0; color: #1A1512; }
    .ticket-card { max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 2px solid #8C1C19; border-radius: 6px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.12); }
    .header { background: #8C1C19; color: #FFFFFF; padding: 22px 25px; text-align: center; }
    .header h1 { margin: 0 0 6px 0; font-size: 22px; letter-spacing: 0.5px; }
    .header p { margin: 0; font-size: 13px; opacity: 0.92; }
    .body { padding: 25px 30px; }
    .status-badge { display: inline-block; background: #15803D; color: #FFFFFF; padding: 5px 14px; border-radius: 4px; font-size: 12px; font-weight: bold; margin-bottom: 20px; letter-spacing: 0.5px; }
    .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 22px; }
    .info-item { display: flex; flex-direction: column; }
    .label { font-size: 11px; text-transform: uppercase; color: #666666; font-weight: 700; margin-bottom: 3px; }
    .val { font-size: 14px; color: #1A1512; font-weight: 600; }
    .barcode-area { text-align: center; padding: 20px; background: #FAF7EF; border-top: 2px dashed #DCD5C5; border-radius: 4px; margin-top: 10px; }
    .barcode { font-family: monospace; font-size: 24px; letter-spacing: 5px; font-weight: bold; color: #1A1512; }
    .footer { text-align: center; font-size: 11px; color: #777777; margin-top: 20px; line-height: 1.5; }
  </style>
</head>
<body>
  <div class="ticket-card">
    <div class="header">
      <h1>LIBERATION WAR MUSEUM</h1>
      <p>বাংলাদেশ মুক্তিযুদ্ধ জাদুঘর • Agargaon, Dhaka-1207</p>
    </div>
    <div class="body">
      <span class="status-badge">✓ PAID • OFFICIAL E-TICKET</span>
      <div class="info-grid">
        <div class="info-item"><span class="label">Ticket Reference</span><span class="val">${ticketId}</span></div>
        <div class="info-item"><span class="label">Visit Date</span><span class="val">${visitDate}</span></div>
        <div class="info-item"><span class="label">Visitor Name</span><span class="val">${name}</span></div>
        <div class="info-item"><span class="label">Phone Number</span><span class="val">${phone}</span></div>
        ${email ? `<div class="info-item"><span class="label">Email</span><span class="val">${email}</span></div>` : ''}
        <div class="info-item"><span class="label">Category</span><span class="val">${categoryLabel}</span></div>
        <div class="info-item"><span class="label">Quantity</span><span class="val">${parsedQuantity} Person(s)</span></div>
        <div class="info-item"><span class="label">Total Paid</span><span class="val">BDT ${netPayable.toFixed(2)}</span></div>
        ${passportNo ? `<div class="info-item"><span class="label">Passport No</span><span class="val">${passportNo}</span></div>` : ''}
      </div>
      <div class="barcode-area">
        <div class="barcode">||| | |||| || ||| |||| | ||</div>
        <div style="font-size: 13px; font-weight: 700; color: #333333; margin-top: 5px;">${ticketId}</div>
        <div style="font-size: 11px; color: #666666; margin-top: 8px;">
          Present this e-ticket on your mobile device or as a printed copy at the main entrance gate.
        </div>
      </div>
      <div class="footer">
        Plot F11/A & F11/B, Sher-e-Bangla Nagar Civic Centre, Agargaon, Dhaka-1207, Bangladesh<br />
        Contact: 02-48114991-3, 02-9142780 | Email: info@liberationwarmuseumbd.org
      </div>
    </div>
  </div>
</body>
</html>`;
    const blob = new Blob([ticketHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Liberation-War-Museum-eTicket-${ticketId}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrintTicket = () => {
    window.print();
  };

  const handleResetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setTicketCategory('');
    setPassportNo('');
    setQuantity(1);
    setIsSubmitted(false);
  };

  // Ticket Information Accordion Points (Exact text matching British Museum reference)
  const ticketInfoItems = [
    {
      id: 'free-entry',
      title: 'Free Entry',
      content: (
        <p className="getting-here-paragraph">
          Admission is free for children under 5 years, war veterans, and differently-abled individuals.
        </p>
      )
    },
    {
      id: 'student-group',
      title: 'Student Group Entry',
      content: (
        <p className="getting-here-paragraph">
          Special discounts are available for school, college, and university student groups when booked in advance through their respective institutions.
        </p>
      )
    },
    {
      id: 'how-to-buy-online',
      title: 'How to Buy Online Ticket',
      content: (
        <ol className="how-to-buy-list">
          <li className="how-to-buy-step">Fill out the form above.</li>
          <li className="how-to-buy-step">Pick the date you'd like to visit.</li>
          <li className="how-to-buy-step">Select a ticket category.</li>
          <li className="how-to-buy-step">Click the “Make a Payment” button and complete your payment.</li>
          <li className="how-to-buy-step">Finally, download your e-ticket and bring it with you when you visit the museum.</li>
        </ol>
      )
    }
  ];

  return (
    <main
      className="museum-story-content"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '130px',
        paddingBottom: '70px',
        minHeight: '85vh',
        boxSizing: 'border-box',
        width: '100%'
      }}
    >
      <section className="block" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <Breadcrumb
          customTrail={[
            { label: 'Visit', to: '/visit/ticket-information' },
            { label: 'Ticket Information', to: '/visit/ticket-information' }
          ]}
        />
        <div className="separator" style={{ marginBottom: '28px' }}></div>

        {/* 1. BUY ETICKET CARD (IMAGE 1 FORM) */}
        <div id="buy-eticket-section" className="eticket-card">
          <div className="eticket-card__header">
            Buy eTicket
          </div>

          <div className="eticket-card__body">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <div className="eticket-grid">
                  {/* Left Column (Input Fields) */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Name * (Mandatory, not pre-filled) */}
                    <div className="eticket-field">
                      <label className="eticket-label" htmlFor="eticket-name-input">
                        Name <span className="required-star">*</span>
                      </label>
                      <input
                        id="eticket-name-input"
                        type="text"
                        className="eticket-input"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    {/* Phone Number * (Mandatory) */}
                    <div className="eticket-field">
                      <label className="eticket-label" htmlFor="eticket-phone-input">
                        Phone Number <span className="required-star">*</span>
                      </label>
                      <input
                        id="eticket-phone-input"
                        type="tel"
                        className="eticket-input"
                        placeholder="01XXXXXXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>

                    {/* Email (Optional) */}
                    <div className="eticket-field">
                      <label className="eticket-label" htmlFor="eticket-email-input">
                        Email Address (Optional)
                      </label>
                      <input
                        id="eticket-email-input"
                        type="email"
                        className="eticket-input"
                        placeholder="example@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    {/* Visit Date * (Mandatory) */}
                    <div className="eticket-field">
                      <label className="eticket-label" htmlFor="eticket-date-input">
                        Visit Date <span className="required-star">*</span>
                      </label>
                      <input
                        id="eticket-date-input"
                        type="date"
                        className="eticket-input"
                        value={visitDate}
                        onChange={(e) => setVisitDate(e.target.value)}
                        required
                      />
                    </div>

                    {/* Ticket Category * (Mandatory) */}
                    <div className="eticket-field">
                      <label className="eticket-label" htmlFor="eticket-category-select">
                        Ticket Category <span className="required-star">*</span>
                      </label>
                      <select
                        id="eticket-category-select"
                        className="eticket-input"
                        value={ticketCategory}
                        onChange={(e) => setTicketCategory(e.target.value)}
                        required
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="">Select Ticket Category</option>
                        <option value="bangladeshi-adult">Bangladeshi (Adult) - 50.00 BDT</option>
                        <option value="bangladeshi-child">Bangladeshi (Child) - 20.00 BDT</option>
                        <option value="foreigner">Foreign Visitor - 500.00 BDT</option>
                        <option value="saarc">SAARC Visitor - 50.00 BDT</option>
                      </select>
                    </div>

                    {/* Passport Number (applicable for Foreigners only) */}
                    <div className="eticket-field">
                      <label className="eticket-label" htmlFor="eticket-passport-input">
                        Passport Number (applicable for Foreigners only)
                      </label>
                      <input
                        id="eticket-passport-input"
                        type="text"
                        className="eticket-input"
                        placeholder={ticketCategory === 'foreigner' ? 'Enter passport number' : ''}
                        value={passportNo}
                        onChange={(e) => setPassportNo(e.target.value)}
                        required={ticketCategory === 'foreigner'}
                      />
                    </div>

                    {/* Quantity * (Mandatory) */}
                    <div className="eticket-field">
                      <label className="eticket-label" htmlFor="eticket-quantity-input">
                        Quantity <span className="required-star">*</span>
                      </label>
                      <input
                        id="eticket-quantity-input"
                        type="number"
                        min="1"
                        max="50"
                        className="eticket-input"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
                        required
                      />
                    </div>
                  </div>

                  {/* Right Column (Auto-calculated Fields) */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Unit Price (BDT) */}
                    <div className="eticket-field">
                      <label className="eticket-label">
                        Unit Price (BDT)
                      </label>
                      <input
                        type="text"
                        className="eticket-input"
                        value={unitPrice > 0 ? unitPrice.toFixed(2) : '0.00'}
                        readOnly
                        tabIndex="-1"
                      />
                    </div>

                    {/* Service Charge % (BDT) */}
                    <div className="eticket-field">
                      <label className="eticket-label">
                        Service Charge % (BDT)
                      </label>
                      <input
                        type="text"
                        className="eticket-input"
                        value={serviceChargePct.toFixed(2)}
                        readOnly
                        tabIndex="-1"
                      />
                    </div>

                    {/* Total Ticket Price (BDT) */}
                    <div className="eticket-field">
                      <label className="eticket-label">
                        Total Ticket Price (BDT)
                      </label>
                      <input
                        type="text"
                        className="eticket-input"
                        value={totalTicketPrice.toFixed(2)}
                        readOnly
                        tabIndex="-1"
                      />
                    </div>

                    {/* Service Charge (BDT) */}
                    <div className="eticket-field">
                      <label className="eticket-label">
                        Service Charge (BDT)
                      </label>
                      <input
                        type="text"
                        className="eticket-input"
                        value={serviceCharge.toFixed(2)}
                        readOnly
                        tabIndex="-1"
                      />
                    </div>

                    {/* Net Payable (BDT) */}
                    <div className="eticket-field">
                      <label className="eticket-label" style={{ color: '#8C1C19' }}>
                        Net Payable (BDT)
                      </label>
                      <input
                        type="text"
                        className="eticket-input"
                        value={netPayable.toFixed(2)}
                        readOnly
                        tabIndex="-1"
                        style={{ fontWeight: '700', color: '#8C1C19', fontSize: '1.05rem', background: '#FDF2F2' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Make a Payment Button */}
                <div style={{ marginTop: '22px' }}>
                  <button type="submit" className="eticket-submit-btn">
                    Make a Payment
                  </button>
                </div>
              </form>
            ) : (
              /* Payment Complete & e-Ticket Confirmation / Download View */
              <div
                style={{
                  padding: '24px',
                  backgroundColor: '#FAF7EF',
                  border: '1.5px solid #86EFAC',
                  borderRadius: '4px',
                  fontFamily: "'Roboto Slab', sans-serif"
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '1.6rem', color: '#166534' }}>✓</span>
                  <div>
                    <h3 style={{ margin: 0, color: '#166534', fontSize: '1.3rem' }}>
                      Payment Successful! e-Ticket Confirmed
                    </h3>
                    <p style={{ margin: '4px 0 0 0', color: '#555555', fontSize: '0.9rem' }}>
                      Booking Reference: <strong>{ticketId}</strong>
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #DCD5C5',
                    borderRadius: '4px',
                    padding: '18px 22px',
                    margin: '18px 0',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '14px',
                    fontSize: '0.92rem'
                  }}
                >
                  <div>
                    <span style={{ color: '#777777', fontSize: '0.8rem', display: 'block', textTransform: 'uppercase' }}>Visitor Name</span>
                    <strong>{name}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#777777', fontSize: '0.8rem', display: 'block', textTransform: 'uppercase' }}>Phone Number</span>
                    <strong>{phone}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#777777', fontSize: '0.8rem', display: 'block', textTransform: 'uppercase' }}>Visit Date</span>
                    <strong>{visitDate}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#777777', fontSize: '0.8rem', display: 'block', textTransform: 'uppercase' }}>Category</span>
                    <strong>{getCategoryLabel(ticketCategory)}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#777777', fontSize: '0.8rem', display: 'block', textTransform: 'uppercase' }}>Quantity</span>
                    <strong>{parsedQuantity} Person(s)</strong>
                  </div>
                  <div>
                    <span style={{ color: '#777777', fontSize: '0.8rem', display: 'block', textTransform: 'uppercase' }}>Total Paid</span>
                    <strong style={{ color: '#8C1C19' }}>BDT {netPayable.toFixed(2)}</strong>
                  </div>
                </div>

                {/* Email Delivery Notification */}
                {email ? (
                  <p style={{ fontSize: '0.92rem', color: '#15803D', lineHeight: '1.5', margin: '0 0 16px 0' }}>
                    ✉️ An official e-ticket copy has been sent to <strong>{email}</strong>. You can present the email or your downloaded e-ticket at the museum entrance to enter.
                  </p>
                ) : (
                  <p style={{ fontSize: '0.92rem', color: '#15803D', lineHeight: '1.5', margin: '0 0 16px 0' }}>
                    🎟️ Your e-ticket has been generated. Please download or print your e-ticket below and present it at the museum entrance to enter.
                  </p>
                )}

                {/* Action Buttons: Download e-Ticket, Print, and Book Another */}
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '16px' }}>
                  <button
                    type="button"
                    onClick={handleDownloadTicket}
                    className="eticket-submit-btn"
                    style={{ margin: 0, padding: '10px 22px', fontSize: '0.92rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    ⬇ Download e-Ticket
                  </button>
                  <button
                    type="button"
                    onClick={handlePrintTicket}
                    style={{
                      background: '#1A1512',
                      color: '#FFFFFF',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '0.92rem'
                    }}
                  >
                    🖨 Print e-Ticket
                  </button>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    style={{
                      background: 'transparent',
                      color: '#666666',
                      border: '1px solid #CCCCCC',
                      padding: '10px 18px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.92rem'
                    }}
                  >
                    Book Another Ticket
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 2. TICKET FEES AND CATEGORIES (ALWAYS OPEN - NO EXPAND OPTION) */}
        <div className="section-card-box">
          <h3 className="section-card-title">
            Ticket Fees and Categories
            <span className="section-card-subtitle">(টিকিট মূল্য)</span>
          </h3>
          <div style={{ width: '100%', overflowX: 'auto' }}>
            <table className="ticket-rate-table">
              <thead>
                <tr>
                  <th>Ticket Type</th>
                  <th style={{ textAlign: 'center' }}>Price (BDT)</th>
                  <th style={{ textAlign: 'right' }}>Service Charge</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bangladeshi (Adult)</td>
                  <td style={{ textAlign: 'center', fontWeight: '700' }}>50.00</td>
                  <td style={{ textAlign: 'right' }}>4%</td>
                </tr>
                <tr>
                  <td>Bangladeshi (Child)</td>
                  <td style={{ textAlign: 'center', fontWeight: '700' }}>20.00</td>
                  <td style={{ textAlign: 'right' }}>4%</td>
                </tr>
                <tr>
                  <td>Foreign Visitor</td>
                  <td style={{ textAlign: 'center', fontWeight: '700' }}>500.00</td>
                  <td style={{ textAlign: 'right' }}>4%</td>
                </tr>
                <tr>
                  <td>SAARC Visitor</td>
                  <td style={{ textAlign: 'center', fontWeight: '700' }}>50.00</td>
                  <td style={{ textAlign: 'right' }}>4%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. MUSEUM OPENING HOURS (ALWAYS OPEN - NO EXPAND OPTION) */}
        <div className="section-card-box">
          <h3 className="section-card-title">
            Museum Opening Hours
            <span className="section-card-subtitle">(জাদুঘরের সময়সূচী)</span>
          </h3>
          <div className="hours-list-box">
            <div className="hours-row">
              <span className="hours-label">March to September:</span>
              <span className="hours-val">10.00 am to 6.00 pm</span>
            </div>
            <div className="hours-row">
              <span className="hours-label">October to February:</span>
              <span className="hours-val">10.00 am to 5.00 pm</span>
            </div>
            <div className="hours-row hours-row--holiday">
              <span className="hours-label holiday-label">Weekly Holiday:</span>
              <span className="hours-val holiday-val">Sunday</span>
            </div>
          </div>
        </div>

        {/* 4. TICKET INFORMATION (BRITISH MUSEUM STYLE ACCORDION - INITIALLY CLOSED) */}
        <div style={{ marginTop: '40px' }}>
          <h2 className="bm-section-title">Ticket Information</h2>

          <div className="ticket-info-accordion">
            {ticketInfoItems.map((item) => {
              const isOpen = !!openSections[item.id];
              return (
                <div
                  key={item.id}
                  className={`ticket-info-item ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="ticket-info-trigger"
                    onClick={() => toggleSection(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="ticket-info-icon" aria-hidden="true">
                      {isOpen ? (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      ) : (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      )}
                    </span>
                    <h3 className="ticket-info-title">{item.title}</h3>
                  </button>

                  {isOpen && (
                    <div className="ticket-info-content">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
