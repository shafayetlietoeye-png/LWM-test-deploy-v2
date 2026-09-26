import { useState, useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function BuyTickets() {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        document.body.classList.add('page-museum-story');
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && contact.trim()) {
            setIsSubmitted(true);
        }
    };

    const resetForm = () => {
        setName('');
        setContact('');
        setIsSubmitted(false);
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
                <Breadcrumb />
                <div className="block__cap" style={{ marginBottom: '25px' }}>
                    <span className="cap__title" style={{ fontSize: '1.35rem', letterSpacing: '0.04em' }}>
                        eTicket Booking Portal
                    </span>
                </div>
                
                <div className="block__content">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                        gap: '30px',
                        alignItems: 'start'
                    }}>
                        {/* LEFT COLUMN: Portal Login */}
                        <div style={{
                            border: '1px solid #d4cbb3',
                            borderTop: '4px solid #8d2024',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: '415px',
                            boxSizing: 'border-box',
                            boxShadow: '0 2px 8px rgba(26,21,18,0.06)'
                        }}>
                            <div style={{ padding: '20px 24px', borderBottom: '1px solid #e8e3d5' }}>
                                <h3 style={{
                                    fontFamily: "'Roboto Slab', serif",
                                    fontSize: '1.2rem',
                                    color: '#1a1512', // Changed header to black
                                    margin: 0,
                                    fontWeight: '700'
                                }}>
                                    ই-টিকিট পোর্টাল লগইন
                                </h3>
                                <span style={{
                                    fontFamily: "'Roboto Slab', 'Noto Sans Bengali', sans-serif",
                                    fontSize: '0.8rem',
                                    color: '#777',
                                    display: 'block',
                                    marginTop: '4px'
                                }}>
                                    Portal Access & Verification
                                </span>
                            </div>

                            <div style={{ padding: '24px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                {!isSubmitted ? (
                                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                        <p style={{
                                            fontFamily: "'Roboto Slab', 'Noto Sans Bengali', sans-serif",
                                            fontSize: '0.85rem',
                                            color: '#666',
                                            lineHeight: '1.5',
                                            margin: '0 0 2px 0'
                                        }}>
                                            আপনি যদি ই-টিকিট পোর্টালে লগইন করতে চান, তবে নিচের তথ্যগুলো প্রদান করুন:
                                        </p>

                                        <div>
                                            <label style={{
                                                display: 'block',
                                                fontSize: '0.8rem',
                                                fontWeight: '700',
                                                color: '#1a1512',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.04em',
                                                marginBottom: '4px',
                                                fontFamily: "'Roboto Slab', 'Noto Sans Bengali', sans-serif"
                                            }}>
                                                Name / নাম
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Md. Shahinur Islam"
                                                style={{
                                                    width: '100%',
                                                    padding: '10px 10px',
                                                    fontSize: '0.9rem',
                                                    border: '1px solid #d4cbb3',
                                                    borderRadius: '3px',
                                                    fontFamily: "'Roboto Slab', 'Noto Sans Bengali', sans-serif",
                                                    outline: 'none',
                                                    boxSizing: 'border-box',
                                                    backgroundColor: 'rgba(255,255,255,0.35)',
                                                    color: '#1a1512'
                                                }}
                                            />
                                            <span style={{ fontSize: '0.75rem', color: '#888', display: 'block', marginTop: '4px', lineHeight: '1.3' }}>
                                                (আপনার নাম লিখুন, যেমন: Md. Shahinur Islam)
                                            </span>
                                        </div>

                                        <div>
                                            <label style={{
                                                display: 'block',
                                                fontSize: '0.8rem',
                                                fontWeight: '700',
                                                color: '#1a1512',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.04em',
                                                marginBottom: '4px',
                                                fontFamily: "'Roboto Slab', 'Noto Sans Bengali', sans-serif"
                                            }}>
                                                Phone or E-mail / ফোন বা ই-মেইল
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={contact}
                                                onChange={(e) => setContact(e.target.value)}
                                                placeholder="015xxxxxxxx / yourname@mail.com"
                                                style={{
                                                    width: '100%',
                                                    padding: '10px 10px',
                                                    fontSize: '0.9rem',
                                                    border: '1px solid #d4cbb3',
                                                    borderRadius: '3px',
                                                    fontFamily: "'Roboto Slab', 'Noto Sans Bengali', sans-serif",
                                                    outline: 'none',
                                                    boxSizing: 'border-box',
                                                    backgroundColor: 'rgba(255,255,255,0.35)',
                                                    color: '#1a1512'
                                                }}
                                            />
                                            <span style={{ fontSize: '0.75rem', color: '#888', display: 'block', marginTop: '4px', lineHeight: '1.3' }}>
                                                (আপনার ফোন নম্বর বা ই-মেইল ঠিকানা লিখুন, যেমন: 015xxxxxxxx / yourname@mail.com)
                                            </span>
                                        </div>

                                        <button
                                            type="submit"
                                            style={{
                                                backgroundColor: '#8d2024',
                                                color: '#fff',
                                                border: 'none',
                                                padding: '12px',
                                                fontSize: '0.9rem',
                                                fontWeight: '700',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                fontFamily: "'Roboto Slab', 'Noto Sans Bengali', sans-serif",
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.06em',
                                                marginTop: '6px',
                                                boxShadow: '0 3px 6px rgba(141,32,36,0.15)',
                                                transition: 'background-color 0.2s'
                                            }}
                                        >
                                            Submit / সাবমিট করুন
                                        </button>
                                    </form>
                                ) : (
                                    <div style={{ textAlign: 'center', padding: '15px 0' }}>
                                        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🎟️</div>
                                        <h4 style={{ 
                                            fontFamily: "'Roboto Slab', serif", 
                                            color: '#1a1512', // Changed success text to black/charcoal
                                            margin: '0 0 10px 0', 
                                            fontSize: '1.2rem',
                                            fontWeight: '700'
                                        }}>
                                            Login Successful! / লগইন সফল হয়েছে!
                                        </h4>
                                        <p style={{ fontFamily: "'Roboto Slab', 'Noto Sans Bengali', sans-serif", fontSize: '0.9rem', color: '#555', marginBottom: '20px', lineHeight: '1.5' }}>
                                            Welcome, <strong>{name}</strong>. You can now select tickets and make payments.
                                        </p>
                                        <button
                                            onClick={resetForm}
                                            style={{
                                                backgroundColor: 'transparent',
                                                color: '#8d2024',
                                                border: '2px solid #8d2024',
                                                padding: '8px 20px',
                                                fontSize: '0.85rem',
                                                fontWeight: '700',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                fontFamily: "'Roboto Slab', 'Noto Sans Bengali', sans-serif",
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em'
                                            }}
                                        >
                                            Logout / লগআউট
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>


                        {/* RIGHT COLUMN: Ticket Info & Opening Times (Identical Spacing & Table Structure) */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', minHeight: '415px', justifyContent: 'space-between' }}>
                            
                            {/* Compact Pricing Panel */}
                            <div style={{
                                border: '1px solid #d4cbb3',
                                borderTop: '3px solid #8d2024',
                                padding: '14px 18px',
                                boxShadow: '0 2px 8px rgba(26,21,18,0.06)',
                                flex: '1 1 auto'
                            }}>
                                <h4 style={{
                                    fontFamily: "'Roboto Slab', serif",
                                    fontSize: '0.95rem',
                                    color: '#1a1512',
                                    margin: '0 0 8px 0',
                                    fontWeight: '700'
                                }}>
                                    Ticket Price (টিকিট মূল্য)
                                </h4>
                                <table style={{
                                    width: '100%',
                                    borderCollapse: 'collapse',
                                    fontFamily: "'Roboto Slab', 'Noto Sans Bengali', sans-serif",
                                    fontSize: '0.8rem',
                                    textAlign: 'left'
                                }}>
                                    <thead>
                                        <tr style={{ borderBottom: '1.5px solid #8d2024', color: '#1a1512' }}>
                                            <th style={{ padding: '5px 0', fontWeight: '700' }}>Ticket Type</th>
                                            <th style={{ padding: '5px', fontWeight: '700', textAlign: 'right' }}>Price (BDT)</th>
                                            <th style={{ padding: '5px 0', fontWeight: '700', textAlign: 'right' }}>Service Charge</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e8e3d5' }}>
                                            <td style={{ padding: '5px 0' }}>Bangladeshi (Adult)</td>
                                            <td style={{ padding: '5px', textAlign: 'right', fontWeight: '700', color: '#1a1512' }}>50.00</td>
                                            <td style={{ padding: '5px 0', textAlign: 'right', color: '#8d2024', fontWeight: '600' }}>4%</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e8e3d5' }}>
                                            <td style={{ padding: '5px 0' }}>Bangladeshi (Child)</td>
                                            <td style={{ padding: '5px', textAlign: 'right', fontWeight: '700', color: '#1a1512' }}>20.00</td>
                                            <td style={{ padding: '5px 0', textAlign: 'right', color: '#8d2024', fontWeight: '600' }}>4%</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e8e3d5' }}>
                                            <td style={{ padding: '5px 0' }}>Foreign Visitor</td>
                                            <td style={{ padding: '5px', textAlign: 'right', fontWeight: '700', color: '#1a1512' }}>500.00</td>
                                            <td style={{ padding: '5px 0', textAlign: 'right', color: '#8d2024', fontWeight: '600' }}>4%</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e8e3d5' }}>
                                            <td style={{ padding: '5px 0' }}>SAARC Visitor</td>
                                            <td style={{ padding: '5px', textAlign: 'right', fontWeight: '700', color: '#1a1512' }}>50.00</td>
                                            <td style={{ padding: '5px 0', textAlign: 'right', color: '#8d2024', fontWeight: '600' }}>4%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Compact Museum Opening Hours Table (Matches Pricing Structure Exactly) */}
                            <div style={{
                                border: '1px solid #d4cbb3',
                                borderTop: '3px solid #8d2024',
                                padding: '14px 18px',
                                boxShadow: '0 2px 8px rgba(26,21,18,0.06)',
                                flex: '1 1 auto'
                            }}>
                                <h4 style={{
                                    fontFamily: "'Roboto Slab', serif",
                                    fontSize: '0.95rem',
                                    color: '#1a1512',
                                    margin: '0 0 8px 0',
                                    fontWeight: '700'
                                }}>
                                    LWM Opening & Closing Time (জাদুঘরের সময়সূচী)
                                </h4>
                                <table style={{
                                    width: '100%',
                                    borderCollapse: 'collapse',
                                    fontFamily: "'Roboto Slab', 'Noto Sans Bengali', sans-serif",
                                    fontSize: '0.8rem',
                                    textAlign: 'left'
                                }}>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e8e3d5' }}>
                                            <td style={{ padding: '5px 0', fontWeight: '500' }}>March to September:</td>
                                            <td style={{ padding: '5px 0', textAlign: 'right', color: '#555' }}>10.00 am to 6.00 pm</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e8e3d5' }}>
                                            <td style={{ padding: '5px 0', fontWeight: '500' }}>October to February:</td>
                                            <td style={{ padding: '5px 0', textAlign: 'right', color: '#555' }}>10.00 am to 5.00 pm</td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '5px 0', fontWeight: '600', color: '#8d2024' }}>Weekly Holiday:</td>
                                            <td style={{ padding: '5px 0', textAlign: 'right', fontWeight: '600', color: '#8d2024' }}>Sunday</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
