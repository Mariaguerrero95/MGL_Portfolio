import React from 'react'

const sample = [
  { quote: 'Working with them transformed our product thinking.', name: 'A. Researcher', role: 'Head of Product, BioCorp' },
  { quote: 'Clear engineering leadership and pragmatic delivery.', name: 'B. Organizer', role: 'Event Director' }
]

export default function TestimonialsGrid({ items = sample }) {
  return (
    <section className="section testimonials" aria-label="Testimonials">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonials__grid">
          {items.map((t, i) => (
            <blockquote key={i} className="testimonial-card">
              <p className="testimonial__quote">“{t.quote}”</p>
              <footer className="testimonial__source">— {t.name}, <span className="testimonial__role">{t.role}</span></footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
