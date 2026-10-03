import React, { useState, useEffect, useRef } from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function TicketInformation() {
  const formRef = useRef(null);

  // Form State (matching 10 fields in Image 2)
  const [name, setName] = useState('');
  const [visitDate, setVisitDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [ticketCategory, setTicketCategory] = useState('bangladeshi-adult');
  const [passportNo, setPassportNo] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Accordion State (British Museum style)
  const [openSections, setOpenSections] = useState({
    'admission': true,
    'how-to-buy': true,
    'hours': true
  });

  const toggleSection = (id) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    document.body.classList.add('page-museum-story');
    document.title = "Ticket Information | Liberation War Museum";
    return () => {
      document.body.classList.remove('page-museum-story');
    };
  }, []);

  // Pricing Matrix
  const getUnitPrice = (cat) => {
    switch (cat) {
      case 'bangladeshi-child':
        return 20.00;
      case 'foreigner':
        return 500.00;
      case 'saarc':
        return 50.00;
      case 'bangladeshi-adult':
      default:
        return 50.00;
    }
  };

  const unitPrice = getUnitPrice(ticketCategory);
  const serviceChargePct = 4.00;
  const totalTicketPrice = unitPrice * (parseInt(quantity, 10) || 1);
  const serviceCharge = totalTicketPrice * (serviceChargePct / 100);
  const netPayable = totalTicketPrice + serviceCharge;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Please enter your Name.');
      return;
    }
    if (!visitDate) {
      alert('Please select a Visit Date.');
      return;
    }
    setIsSubmitted(true);
  };

  const scrollToBuy = () => {
    const element = formRef.current || document.getElementById('buy-eticket-section');
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Visual highlight pulse animation on the Buy eTicket card
      element.classList.remove('eticket-card--highlight');
      void element.offsetWidth; // Force DOM reflow to allow re-triggering animation
      element.classList.add('eticket-card--highlight');

      setTimeout(() => {
        element.classList.remove('eticket-card--highlight');
      }, 2000);

      // Focus the first input smoothly without causing an abrupt scroll jump
      setTimeout(() => {
        const nameInput = document.getElementById('eticket-name-input');
        if (nameInput) {
          nameInput.focus({ preventScroll: true });
        }
      }, 750);
    }
  };

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

        {/* 1. BUY ETICKET CARD (EXACT 10 FIELDS FROM USER SCREENSHOT) */}
        <div ref={formRef} id="buy-eticket-section" className="eticket-card">
          <div className="eticket-card__header">
            Buy eTicket
          </div>

          <div className="eticket-card__body">
            <form onSubmit={handleSubmit}>
              <div className="eticket-grid">
                {/* Left Column (5 fields) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {/* Field 1: Name */}
                  <div className="eticket-field">
                    <label className="eticket-label" htmlFor="eticket-name-input">
                      Name
                    </label>
                    <input
                      id="eticket-name-input"
                      type="text"
                      className="eticket-input"
                      placeholder="PMO"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  {/* Field 2: Visit Date * */}
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

                  {/* Field 3: Ticket Category * */}
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
                      <option value="bangladeshi-adult">Bangladeshi (Adult) - 50 BDT</option>
                      <option value="bangladeshi-child">Bangladeshi (Child) - 20 BDT</option>
                      <option value="saarc">SAARC Visitor - 50 BDT</option>
                      <option value="foreigner">Foreign Visitor - 500 BDT</option>
                    </select>
                  </div>

                  {/* Field 4: Passport No (for Foreigners) */}
                  <div className="eticket-field">
                    <label className="eticket-label" htmlFor="eticket-passport-input">
                      Passport No (for Foreigners)
                    </label>
                    <input
                      id="eticket-passport-input"
                      type="text"
                      className="eticket-input"
                      placeholder=""
                      value={passportNo}
                      onChange={(e) => setPassportNo(e.target.value)}
                    />
                  </div>

                  {/* Field 5: Quantity * */}
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

                {/* Right Column (5 fields) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {/* Field 6: Unit Price (BDT) */}
                  <div className="eticket-field">
                    <label className="eticket-label">
                      Unit Price (BDT)
                    </label>
                    <input
                      type="text"
                      className="eticket-input"
                      value={unitPrice.toFixed(2)}
                      readOnly
                      tabIndex="-1"
                    />
                  </div>

                  {/* Field 7: Service Charge % (BDT) */}
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

                  {/* Field 8: Total Ticket Price (BDT) */}
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

                  {/* Field 9: Service Charge (BDT) */}
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

                  {/* Field 10: Net Payable (BDT) */}
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
                      style={{ fontWeight: '700', color: '#8C1C19', fontSize: '1rem' }}
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button & Notification Banner */}
              <div style={{ marginTop: '16px' }}>
                <button type="submit" className="eticket-submit-btn">
                  Submit
                </button>
              </div>

              {isSubmitted && (
                <div
                  style={{
                    marginTop: '20px',
                    padding: '16px 20px',
                    backgroundColor: '#F0FDF4',
                    border: '1.5px solid #86EFAC',
                    borderRadius: '4px',
                    color: '#166534',
                    fontFamily: "'Roboto Slab', sans-serif"
                  }}
                >
                  <div style={{ fontWeight: '700', fontSize: '1.05rem', marginBottom: '6px' }}>
                    ✓ Order Generated Successfully!
                  </div>
                  <div style={{ fontSize: '0.92rem', lineHeight: '1.5', color: '#15803D' }}>
                    Ticket order for <strong>{name}</strong> ({quantity} ticket{quantity > 1 ? 's' : ''}, Net Payable: <strong>BDT {netPayable.toFixed(2)}</strong>) has been processed. Frontend validation complete; ready for SSLCommerz payment integration.
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    style={{
                      marginTop: '10px',
                      background: 'transparent',
                      border: '1px solid #166534',
                      color: '#166534',
                      padding: '5px 14px',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      fontWeight: '600'
                    }}
                  >
                    Edit / Place Another Order
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* 2. BRITISH MUSEUM STYLE SINGLE-COLUMN ACCORDION */}
        <div className="ticket-info-accordion">
          {/* ACCORDION ITEM 1: Ticket fees and categories */}
          <div className={`ticket-info-item ${openSections['admission'] ? 'is-open' : ''}`}>
            <button
              type="button"
              className="ticket-info-trigger"
              onClick={() => toggleSection('admission')}
              aria-expanded={openSections['admission']}
            >
              <span className="ticket-info-icon" aria-hidden="true">
                {openSections['admission'] ? (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                )}
              </span>
              <h3 className="ticket-info-title">Ticket fees and categories</h3>
            </button>

            {openSections['admission'] && (
              <div className="ticket-info-content">
                {/* Rate Table ONLY - As requested by user */}
                <div style={{ marginTop: '10px', marginBottom: '10px', width: '100%', overflowX: 'auto' }}>
                  <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontFamily: "'Roboto Slab', sans-serif",
                    fontSize: '0.92rem',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #DCD5C5',
                    borderRadius: '4px'
                  }}>
                    <thead>
                      <tr style={{ backgroundColor: '#FAF7EF', borderBottom: '2px solid #8b181e' }}>
                        <th style={{ padding: '12px 18px', textAlign: 'left', color: '#1A1512', fontWeight: '700' }}>Category</th>
                        <th style={{ padding: '12px 18px', textAlign: 'right', color: '#1A1512', fontWeight: '700' }}>Price (BDT)</th>
                        <th style={{ padding: '12px 18px', textAlign: 'right', color: '#8b181e', fontWeight: '700' }}>Online Surcharge</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #EAE3D2' }}>
                        <td style={{ padding: '12px 18px', color: '#333333' }}>Bangladeshi (Adult)</td>
                        <td style={{ padding: '12px 18px', textAlign: 'right', fontWeight: '700', color: '#1A1512' }}>50.00</td>
                        <td style={{ padding: '12px 18px', textAlign: 'right', color: '#8b181e', fontWeight: '600' }}>4%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #EAE3D2' }}>
                        <td style={{ padding: '12px 18px', color: '#333333' }}>Bangladeshi (Child / Student)</td>
                        <td style={{ padding: '12px 18px', textAlign: 'right', fontWeight: '700', color: '#1A1512' }}>20.00</td>
                        <td style={{ padding: '12px 18px', textAlign: 'right', color: '#8b181e', fontWeight: '600' }}>4%</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #EAE3D2' }}>
                        <td style={{ padding: '12px 18px', color: '#333333' }}>SAARC Visitor</td>
                        <td style={{ padding: '12px 18px', textAlign: 'right', fontWeight: '700', color: '#1A1512' }}>50.00</td>
                        <td style={{ padding: '12px 18px', textAlign: 'right', color: '#8b181e', fontWeight: '600' }}>4%</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 18px', color: '#333333' }}>Foreign Visitor</td>
                        <td style={{ padding: '12px 18px', textAlign: 'right', fontWeight: '700', color: '#1A1512' }}>500.00</td>
                        <td style={{ padding: '12px 18px', textAlign: 'right', color: '#8b181e', fontWeight: '600' }}>4%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* ACCORDION ITEM 2: How to Buy Ticket (MATCHING USER SCREENSHOT IMAGE 1) */}
          <div className={`ticket-info-item ${openSections['how-to-buy'] ? 'is-open' : ''}`}>
            <button
              type="button"
              className="ticket-info-trigger"
              onClick={() => toggleSection('how-to-buy')}
              aria-expanded={openSections['how-to-buy']}
            >
              <span className="ticket-info-icon" aria-hidden="true">
                {openSections['how-to-buy'] ? (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                )}
              </span>
              <h3 className="ticket-info-title">How to Buy Ticket</h3>
            </button>

            {openSections['how-to-buy'] && (
              <div className="ticket-info-content">
                <ol
                  className="how-to-buy-list"
                  style={{
                    fontFamily: "'Roboto Slab', 'Noto Sans Bengali', sans-serif",
                    fontSize: '0.92rem',
                    lineHeight: '1.65',
                    color: '#1A1512',
                    paddingLeft: '22px',
                    margin: '0 0 20px 0'
                  }}
                >
                  <li className="how-to-buy-step" style={{ fontFamily: "'Roboto Slab', sans-serif", fontSize: '0.92rem', color: '#1A1512', marginBottom: '12px' }}>
                    First login to eTicket Portal by submitting your Name &amp; Phone number. On next page submit your OTP which is sent to your device.
                  </li>
                  <li className="how-to-buy-step" style={{ fontFamily: "'Roboto Slab', sans-serif", fontSize: '0.92rem', color: '#1A1512', marginBottom: '12px' }}>
                    After login to ePortal, click on Buy eTicket button.
                  </li>
                  <li className="how-to-buy-step" style={{ fontFamily: "'Roboto Slab', sans-serif", fontSize: '0.92rem', color: '#1A1512', marginBottom: '12px' }}>
                    Please fill up the Buy eTicket Form
                  </li>
                  <li className="how-to-buy-step" style={{ fontFamily: "'Roboto Slab', sans-serif", fontSize: '0.92rem', color: '#1A1512', marginBottom: '12px' }}>
                    Afterwards click on "Make a Payment" button and complete your payment.
                  </li>
                  <li className="how-to-buy-step" style={{ fontFamily: "'Roboto Slab', sans-serif", fontSize: '0.92rem', color: '#1A1512', marginBottom: '12px' }}>
                    Finally download and print your eTicket and bring your eTicket while you visit our museum.
                  </li>
                </ol>

                {/* Buy eTicket Button - scrolls smoothly up to the Buy eTicket card */}
                <div>
                  <button
                    type="button"
                    onClick={scrollToBuy}
                    className="eticket-buy-btn"
                  >
                    Buy eTicket
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ACCORDION ITEM 3: LWM Opening & Closing Time (জাদুঘরের সময়সূচী) */}
          <div className={`ticket-info-item ${openSections['hours'] ? 'is-open' : ''}`}>
            <button
              type="button"
              className="ticket-info-trigger"
              onClick={() => toggleSection('hours')}
              aria-expanded={openSections['hours']}
            >
              <span className="ticket-info-icon" aria-hidden="true">
                {openSections['hours'] ? (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                )}
              </span>
              <h3 className="ticket-info-title">LWM Opening &amp; Closing Time (জাদুঘরের সময়সূচী)</h3>
            </button>

            {openSections['hours'] && (
              <div className="ticket-info-content">
                <div style={{
                  marginTop: '10px',
                  marginBottom: '14px',
                  width: '100%',
                  background: '#FAF7EF',
                  border: '1px solid #DCD5C5',
                  borderTop: '3px solid #8C1C19',
                  borderRadius: '2px',
                  padding: '24px 28px',
                  boxSizing: 'border-box'
                }}>
                  <h4 style={{
                    fontFamily: "'Roboto Slab', 'Noto Sans Bengali', serif",
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: '#1A1512',
                    margin: '0 0 18px 0'
                  }}>
                    LWM Opening &amp; Closing Time (জাদুঘরের সময়সূচী)
                  </h4>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    fontFamily: "'Roboto Slab', 'Noto Sans Bengali', sans-serif"
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '14px 0',
                      borderBottom: '1px solid #EAE3D2',
                      fontSize: '0.92rem'
                    }}>
                      <span style={{ fontWeight: '700', color: '#1A1512' }}>March to September:</span>
                      <span style={{ color: '#2B2B2B' }}>10.00 am to 6.00 pm</span>
                    </div>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '14px 0',
                      borderBottom: '1px solid #EAE3D2',
                      fontSize: '0.92rem'
                    }}>
                      <span style={{ fontWeight: '700', color: '#1A1512' }}>October to February:</span>
                      <span style={{ color: '#2B2B2B' }}>10.00 am to 5.00 pm</span>
                    </div>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '14px 0 4px 0',
                      fontSize: '0.92rem'
                    }}>
                      <span style={{ fontWeight: '700', color: '#8C1C19' }}>Weekly Holiday:</span>
                      <span style={{ fontWeight: '700', color: '#8C1C19' }}>Sunday</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
