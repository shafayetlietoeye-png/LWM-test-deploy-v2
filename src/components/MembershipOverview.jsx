import React from 'react';
import { Link } from 'react-router-dom';

export default function MembershipOverview() {
  const pStyle = {
    fontFamily: "'Roboto Slab', 'Noto Sans Bengali', sans-serif",
    fontSize: '1.05rem',
    lineHeight: '1.75',
    color: '#1a1a1a',
    margin: '0 0 16px 0'
  };

  const capStyle = {
    marginBottom: '16px'
  };

  const sectionStyle = {
    paddingBottom: '46px',
    marginBottom: '46px',
    borderBottom: '1px solid #dfd8c8'
  };

  const btnStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#8d2024',
    padding: '10px 22px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.95rem',
    transition: 'background-color 0.2s ease, transform 0.2s ease'
  };

  return (
    <>
      {/* 1. DONATIONS AND MEMBERSHIPS */}
      <section className="block" style={sectionStyle}>
        <div className="block__cap" style={capStyle}>
          <span className="cap__title">Donations and Memberships</span>
        </div>

        <div className="block__content">
          <p className="p" style={pStyle}>
            Membership fees and other donations can be sent to our office or directly to accounts Muktijuddha Jadughar, A/C No. 210 530 51 of Mercantile Bank Limited, Main Branch, Dhaka.
          </p>
          <p className="p" style={pStyle}>
            Members receive a Membership Card allowing free entrance to the museum, invitation to museum programmes and museum publications. The name of Sponsor Member and Charter Members appear at the museum entrance and they receive the Liberation War Museum crest.
          </p>
          <div style={{ marginTop: '8px' }}>
            <Link
              to="/donate"
              className="btn btn--primary"
              style={btnStyle}
            >
              Make A Donation
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OBJECT COLLECTIONS */}
      <section className="block" style={sectionStyle}>
        <div className="block__cap" style={capStyle}>
          <span className="cap__title">Object Collections</span>
        </div>

        <div className="block__content">
          <p className="p" style={pStyle}>
            The main assets of the museum are objects relating to the Bengali nation’s struggle for democracy and national rights and liberation war that led to the emergence of independent Bangladesh. If you have in your possession or have knowledge of where such objects could be available please inform our office at your convenience. Such objects will enrich the display and the archive of LWM.
          </p>
          <div style={{ marginTop: '8px' }}>
            <Link
              to="/support/donation/object-donors"
              className="btn btn--primary"
              style={btnStyle}
            >
              Donate an Object
            </Link>
          </div>
        </div>
      </section>

      {/* 3. OTHER SUPPORTS */}
      <section className="block" style={{ paddingBottom: '36px' }}>
        <div className="block__cap" style={capStyle}>
          <span className="cap__title">Other Supports</span>
        </div>

        <div className="block__content">
          <div className="ways-to-support-grid" style={{ marginTop: '0' }}>
            {/* Card 1: Professional Expertise */}
            <div className="bm-support-card">
              <div className="bm-support-card__image-wrap">
                <img
                  src="/assets/header logo.svg"
                  alt="Liberation War Museum Logo"
                  className="bm-support-card__logo"
                />
              </div>
              <div className="bm-support-card__body">
                <h3 className="bm-support-card__title">
                  <span>Professional Expertise</span>
                </h3>
                <p className="bm-support-card__text">
                  The Museum welcomes all professional support for improving museum displays and programs. For instance ‘International Consortium for Energy Development’ helped the museum with solar energy to cut down electricity costs.
                </p>
              </div>
            </div>

            {/* Card 2: Programme Support */}
            <div className="bm-support-card">
              <div className="bm-support-card__image-wrap">
                <img
                  src="/assets/header logo.svg"
                  alt="Liberation War Museum Logo"
                  className="bm-support-card__logo"
                />
              </div>
              <div className="bm-support-card__body">
                <h3 className="bm-support-card__title">
                  <span>Programme Support</span>
                </h3>
                <p className="bm-support-card__text">
                  This can be in the form of project financing e.g. Freedom Foundation in Student’s Outreach Program and Manusher Jonno (Care Bangladesh fund) in upholding liberation history and promoting Human Rights and Peace Education for Students. The museum also welcomes your suggestions and help for further improving its existing programs.
                </p>
              </div>
            </div>

            {/* Card 3: Exchange Program */}
            <div className="bm-support-card">
              <div className="bm-support-card__image-wrap">
                <img
                  src="/assets/header logo.svg"
                  alt="Liberation War Museum Logo"
                  className="bm-support-card__logo"
                />
              </div>
              <div className="bm-support-card__body">
                <h3 className="bm-support-card__title">
                  <span>Exchange Program</span>
                </h3>
                <p className="bm-support-card__text">
                  Liberation War Museum is interested in building partnerships with organizations, institutions and individuals with similar objectives through exchange of views and information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
