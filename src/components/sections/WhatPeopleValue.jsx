import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TbQuote } from 'react-icons/tb';

const items = [
  {
    quote: 'Maria is an extremely attentive and passionate software developer. I contracted Maria near the end of 2025 to deliver several enhancements to our website, which at the time was lacking polish and clarity, with many elements feeling outdated. Maria was very quick to understand the ideas we wanted to express through our site. She was not only an excellent listener who took in every detail, but also highly proactive in suggesting her own ideas and concepts to improve the site while still aligning closely with our overall goals. The success of this project ultimately led us to offer Maria a role at Zano, where she continues to make a valuable impact. In the end, Maria delivered exceptional-quality work and even went above and beyond in several areas. I would highly recommend Maria to any workplace looking for a passionate, eager, and genuinely lovely professional to work with.',
    author: 'Jaafar Ali Jaafar',
    role: 'CTO at Zano'
  },
  {
    quote: 'I had the pleasure of working with Maria on the complete redesign of Cíclicas’ website. She did far more than just develop the site: she analyzed, proposed solutions, solved challenges, and approached every aspect of the project with strategic thinking and great attention to detail. Her work is clean, scalable, and highly rigorous, and her collaborative approach is truly exemplary. She was able to translate our ideas—sometimes quite chaotic—into clear, functional, and effective solutions. Maria is the kind of professional who adds value from day one. I highly recommend her without hesitation.',
    author: 'Gema Rosado Jordán', 
    role: 'CEO at Cíclicas'
  },
  {
    quote: 'Working with María was a fantastic experience from start to finish. She quickly understood our goals and translated them into a website that perfectly met our needs, while proactively suggesting improvements that made the final product even better. The result is a functional, intuitive, and well-crafted website. Her post-launch support has also been consistently fast and reliable. We would highly recommend María for any web development project or as a valuable external member of a development team.',
    author: 'Encarnación Giráldez', 
    role: 'Founder of Renhacer'
  }
];

export default function WhatPeopleValue() {
  const [activeModal, setActiveModal] = useState(null);

  const truncate = (text, maxLength = 200) => {
    return text.length > maxLength ? text.substring(0, maxLength) : text;
  };

  return (
    <section className="section what-people" aria-labelledby="what-people-heading">
      <div className="container">
        <h2 id="what-people-heading" className="section-title" style={{ marginBottom: '40px' }}>
          What people value working with me
        </h2>
        
        <div className="what-people__cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {items.map((t, i) => {
            const isLong = t.quote.length > 200;
            return (
              <blockquote 
                key={i} 
                className="what-people__card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '32px',
                  borderRadius: '16px',
                  backgroundColor: 'var(--surface-card, #faf8f5)',
                  position: 'relative',
                  height: '100%',
                  boxSizing: 'border-box'
                }}
              >
                <div>
                  <TbQuote style={{ fontSize: '28px', color: 'var(--accent, #6366f1)', opacity: 0.3, marginBottom: '12px' }} />
                  
                  <p 
                    className="what-people__quote" 
                    style={{ 
                      fontFamily: 'var(--font-sans, sans-serif)', 
                      fontSize: '1rem', 
                      lineHeight: '1.6', 
                      color: 'var(--surface-card-text, #2d2738)',
                      margin: '0 0 24px 0',
                      fontStyle: 'normal'
                    }}
                  >
                    “{truncate(t.quote, 200)}{isLong ? '...”' : '”'}
                    
                    {isLong && (
                      <button 
                        onClick={() => setActiveModal(t)}
                        style={{ 
                          background: 'none', 
                          border: 'none', 
                          color: '#3b2fb3', 
                          fontWeight: '600', 
                          cursor: 'pointer', 
                          padding: '0',
                          textDecoration: 'underline',
                          fontSize: '0.95rem',
                          display: 'inline',
                          marginLeft: '6px'
                        }}
                      >
                        Read more
                      </button>
                    )}
                  </p>
                </div>

                <div>
                  <footer className="what-people__source" style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '12px', width: '100%' }}>
                    <strong className="what-people__author" style={{ display: 'block', fontSize: '0.95rem', color: 'var(--surface-card-text, #100d16)' }}>
                      {t.author}
                    </strong>
                    {t.role ? (
                      <span className="what-people__role" style={{ fontSize: '0.85rem', color: 'var(--surface-card-muted, #6b647c)' }}>
                        {t.role}
                      </span>
                    ) : null}
                  </footer>
                </div>
              </blockquote>
            );
          })}
        </div>
      </div>

      {/* Pop-up Modal con Tipografía Sincronizada */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, background: 'rgba(16, 13, 22, 0.5)', 
              backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', 
              justifyContent: 'center', zIndex: 1000, padding: '20px'
            }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div 
              initial={{ scale: 0.96, y: 15 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.96, y: 15 }}
              transition={{ duration: 0.2 }}
              className="what-people__card"
              style={{ 
                maxWidth: '640px', 
                width: '100%', 
                position: 'relative', 
                padding: '40px',
                borderRadius: '24px',
                backgroundColor: 'var(--surface-card, #ffffff)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.12)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveModal(null)}
                style={{ 
                  position: 'absolute', top: '20px', right: '20px', 
                  background: 'rgba(0,0,0,0.04)', border: 'none', fontSize: '20px', 
                  cursor: 'pointer', width: '32px', height: '32px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#100d16'
                }}
              >
                &times;
              </button>

              <TbQuote style={{ fontSize: '36px', color: '#3b2fb3', marginBottom: '16px' }} />
              
              {/* Ahora usa exactamente los mismos estilos y fuente limpia que el componente externo */}
              <p 
                style={{ 
                  fontFamily: 'var(--font-sans, sans-serif)',
                  fontSize: '1.05rem', 
                  fontStyle: 'normal', 
                  lineHeight: '1.6', 
                  marginBottom: '24px', 
                  color: 'var(--surface-card-text, #100d16)' 
                }}
              >
                “{activeModal.quote}”
              </p>
              
              <footer className="what-people__source" style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '16px' }}>
                <strong style={{ fontSize: '1rem', color: 'var(--surface-card-text, #100d16)' }}>{activeModal.author}</strong>
                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--surface-card-muted, #6b647c)' }}>{activeModal.role}</span>
              </footer>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}