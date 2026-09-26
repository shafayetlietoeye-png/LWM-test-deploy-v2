import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MembershipOverview() {
  const [copied, setCopied] = useState(false);

  const bankDetails = {
    accountName: 'Muktijuddha Jadughar',
    accountNumber: '210 530 51',
    bankName: 'Mercantile Bank Limited',
    branch: 'Main Branch, Dhaka',
    swiftCode: 'MBLBBDDH',
    routingNumber: '140271692'
  };

  const copyBankInfo = () => {
    const text = `Account Name: ${bankDetails.accountName}\nAccount Number: ${bankDetails.accountNumber}\nBank: ${bankDetails.bankName}\nBranch: ${bankDetails.branch}\nSWIFT: ${bankDetails.swiftCode}\nRouting: ${bankDetails.routingNumber}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* 1. INSTITUTIONAL OVERVIEW */}
      <section className="block">
        <div className="block__cap">
          <span className="cap__title">Institutional Overview</span>
        </div>

        <div className="block__content">
          <p className="p">
            The Liberation War Museum was established in 1996 through a unique citizens' initiative, dedicated to commemorating the heroic struggle of the Bengali nation for democratic and national rights. The Museum preserves historical evidence, documentation, and relics of the 1971 Genocide and Liberation War.
          </p>
          <p className="p">
            Operating completely independent of regular government budget allocations, the Museum relies upon the collective generosity of citizens, patron members, philanthropic foundations, and corporate partners. Contributions to the Liberation War Museum fall under the Government’s Corporate Social Responsibility (CSR) program and are declared 100% tax-exempt by statutory regulatory authorities.
          </p>
        </div>
      </section>

      {/* 2. DONATIONS, MEMBERSHIPS & PARTNERSHIPS (ACCREDITATIONS GRID STYLE) */}
      <section className="block">
        <div className="block__cap">
          <span className="cap__title">Donations, Memberships and Support Channels</span>
        </div>

        <div className="block__content">
          <p className="p" style={{ marginBottom: '24px' }}>
            Citizens, organizations, and corporate patrons can support the Museum’s conservation, educational outreach, and archival mission through several dedicated channels:
          </p>

          <div className="facilities-grid facilities-grid--accred">
            {/* FEATURED FULL-WIDTH CARD: DIRECT DONATIONS & BANK DETAILS */}
            <div className="facility-card facility-card--featured-accred">
              <div className="facility-label">
                <span className="facility-label-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                </span>
                <span>Direct Donations &amp; Official Bank Remittance</span>
              </div>
              <div className="facility-value">
                <p className="facility-desc">
                  Membership fees, general donations, and contributions can be sent directly to our office or remitted directly to the official bank accounts of Muktijuddha Jadughar at Mercantile Bank Limited. All contributions directly fund artifact conservation, research, and outreach programs.
                </p>

                <div className="facility-sub-items">
                  <div className="facility-sub-title">Official Bank Account for Remittance:</div>
                  <ul className="facility-sub-list">
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2L2 7h20L12 2z" />
                      </svg>
                      <span><strong>Account Title:</strong> {bankDetails.accountName}</span>
                    </li>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <line x1="6" y1="12" x2="18" y2="12" />
                      </svg>
                      <span><strong>Account No:</strong> <span style={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#8C1C19' }}>{bankDetails.accountNumber}</span></span>
                    </li>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span><strong>Bank &amp; Branch:</strong> {bankDetails.bankName}, {bankDetails.branch}</span>
                    </li>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      <span><strong>SWIFT / Routing:</strong> {bankDetails.swiftCode} / {bankDetails.routingNumber}</span>
                    </li>
                  </ul>

                  <div style={{ marginTop: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Link
                      to="/donate"
                      className="btn btn--primary"
                      style={{
                        backgroundColor: '#8C1C19',
                        color: '#fff',
                        padding: '9px 18px',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      Make A Donation Online
                    </Link>

                    <button
                      type="button"
                      onClick={copyBankInfo}
                      className="btn btn--secondary"
                      style={{
                        backgroundColor: '#fff',
                        color: '#8C1C19',
                        border: '1px solid #8C1C19',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      {copied ? (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                          Copied to Clipboard!
                        </>
                      ) : (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                          Copy Bank Details
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: MEMBERSHIP CATEGORIES */}
            <div className="facility-card">
              <div className="facility-label">
                <span className="facility-label-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                <span>Museum Membership Categories</span>
              </div>
              <div className="facility-value">
                <p className="facility-desc">
                  Members receive a Membership Card allowing free entrance to the museum, invitation to museum programmes and museum publications. The names of Sponsor Members and Charter Members appear permanently at the museum entrance and they receive the Liberation War Museum crest.
                </p>

                <div className="facility-sub-items">
                  <div className="facility-sub-title">Honorary Categories &amp; Privileges:</div>
                  <ul className="facility-sub-list">
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span><strong>General Member:</strong> Annual membership card, free entrance to permanent galleries, and event invitations.</span>
                    </li>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span><strong>Sponsor Member:</strong> Name inscribed at the museum entrance and receives the official Liberation War Museum crest.</span>
                    </li>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span><strong>Charter Member:</strong> Lifetime recognition, permanent entrance memorial inscription, and commemorative crest.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CARD 3: OBJECT COLLECTIONS */}
            <div className="facility-card">
              <div className="facility-label">
                <span className="facility-label-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </span>
                <span>Object Collections &amp; Physical Relics</span>
              </div>
              <div className="facility-value">
                <p className="facility-desc">
                  The primary assets of the museum are authentic objects relating to the Bengali nation’s struggle for democracy, human rights, and liberation war. If you possess historical items or know where they may be preserved, please notify our curatorial office.
                </p>

                <div className="facility-sub-items">
                  <div className="facility-sub-title">Donor Registers &amp; Records:</div>
                  <ul className="facility-sub-list">
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="9 11 12 14 22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                      </svg>
                      <span>Letters, wartime diaries, personal belongings of martyrs, weapons, photographs, and eyewitness records.</span>
                    </li>
                  </ul>

                  <div style={{ marginTop: '14px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <Link
                      to="/support/donation/object-donors"
                      className="btn btn--primary"
                      style={{
                        backgroundColor: '#8C1C19',
                        color: '#fff',
                        padding: '7px 14px',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '0.85rem'
                      }}
                    >
                      Object Donor List
                    </Link>
                    <Link
                      to="/support/donation/archive-donors"
                      className="btn btn--secondary"
                      style={{
                        backgroundColor: '#fff',
                        color: '#8C1C19',
                        border: '1px solid #8C1C19',
                        padding: '7px 14px',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '0.85rem'
                      }}
                    >
                      Archive Donors
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 4: PROFESSIONAL EXPERTISE */}
            <div className="facility-card">
              <div className="facility-label">
                <span className="facility-label-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </span>
                <span>Professional Expertise Support</span>
              </div>
              <div className="facility-value">
                <p className="facility-desc">
                  The Museum welcomes professional collaboration to enhance archival displays and conservation. For instance, the ‘International Consortium for Energy Development’ (ICED) partnered with the museum to install solar energy infrastructure.
                </p>

                <div className="facility-sub-items">
                  <div className="facility-sub-title">Key Areas of Collaboration:</div>
                  <ul className="facility-sub-list">
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                      </svg>
                      <span>Renewable green energy (solar installation) and sustainable infrastructure.</span>
                    </li>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                      <span>Digital cataloging, software development, and online archival accessibility.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CARD 5: PROGRAMME SUPPORT */}
            <div className="facility-card">
              <div className="facility-label">
                <span className="facility-label-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                </span>
                <span>Programme &amp; Outreach Support</span>
              </div>
              <div className="facility-value">
                <p className="facility-desc">
                  Institutional partners can finance educational initiatives, such as Freedom Foundation in Student Outreach and Manusher Jonno Foundation (Care Bangladesh Fund) in promoting Human Rights and Peace Education.
                </p>

                <div className="facility-sub-items">
                  <div className="facility-sub-title">Impact Highlights:</div>
                  <ul className="facility-sub-list">
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 14 14" />
                      </svg>
                      <span>Reach-Out Mobile Museum buses visiting remote schools across all 64 districts.</span>
                    </li>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>
                      <span>Center for the Study of Genocide and Justice (CSGJ) and annual Winter School.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CARD 6: EXCHANGE PROGRAM & CSR */}
            <div className="facility-card">
              <div className="facility-label">
                <span className="facility-label-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1" />
                    <path d="M18 8l4 4-4 4" />
                    <path d="M8 12h14" />
                  </svg>
                </span>
                <span>Exchange Programs &amp; Corporate CSR</span>
              </div>
              <div className="facility-value">
                <p className="facility-desc">
                  Liberation War Museum actively builds partnerships with global institutions sharing similar values through dialogue and academic exchanges. All corporate contributions are 100% tax-exempt under National Board of Revenue (NBR) regulations.
                </p>

                <div className="facility-sub-items">
                  <div className="facility-sub-title">Institutional Engagement:</div>
                  <ul className="facility-sub-list">
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      <span>100% Tax-Exemption status recognized by the National Board of Revenue (NBR).</span>
                    </li>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                      </svg>
                      <span>Founder member of the International Coalition of Sites of Conscience (ICSC).</span>
                    </li>
                  </ul>

                  <div style={{ marginTop: '14px' }}>
                    <Link
                      to="/support/donation/all-donors"
                      className="btn btn--secondary"
                      style={{
                        backgroundColor: '#fff',
                        color: '#8C1C19',
                        border: '1px solid #8C1C19',
                        padding: '7px 14px',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '0.85rem'
                      }}
                    >
                      View All Donors Register
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECRETARIAT & CONTACT INFORMATION */}
      <section className="block">
        <div className="block__cap">
          <span className="cap__title">Secretariat &amp; Trustee Office</span>
        </div>

        <div className="block__content">
          <p className="p" style={{ marginBottom: '20px' }}>
            To discuss membership enrollment, artifact appraisal, CSR partnerships, or other institutional support, please contact our Development Secretariat:
          </p>

          <div className="facilities-grid facilities-grid--accred">
            <div className="facility-card facility-card--featured-accred">
              <div className="facility-label">
                <span className="facility-label-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>Liberation War Museum Secretariat &amp; Trustee Office</span>
              </div>
              <div className="facility-value">
                <p className="facility-desc">
                  Plot F-11/A-B, Agargaon, Sher-e-Bangla Nagar, Dhaka - 1207, Bangladesh.
                </p>

                <div className="facility-sub-items">
                  <ul className="facility-sub-list">
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span><strong>Phone:</strong> +880 2 223381617</span>
                    </li>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span><strong>Email:</strong> trustees@liberationwarmuseumbd.org</span>
                    </li>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 14 14" />
                      </svg>
                      <span><strong>Visiting Hours:</strong> Tuesday – Sunday: 10:00 AM – 5:00 PM (Monday Closed)</span>
                    </li>
                  </ul>

                  <div style={{ marginTop: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Link
                      to="/donate"
                      className="btn btn--primary"
                      style={{
                        backgroundColor: '#8C1C19',
                        color: '#fff',
                        padding: '9px 18px',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '0.9rem'
                      }}
                    >
                      Make A Donation Online
                    </Link>
                    <Link
                      to="/support/community/friends"
                      className="btn btn--secondary"
                      style={{
                        backgroundColor: '#fff',
                        color: '#8C1C19',
                        border: '1px solid #8C1C19',
                        padding: '9px 18px',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '0.9rem'
                      }}
                    >
                      Friends of LWM
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
