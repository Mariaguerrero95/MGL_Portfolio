import React from 'react'

const items = [
  {
    quote:
      'Maria is an extremely attentive and passionate software developer. I contracted Maria near the end of 2025 to deliver several enhancements to our website, which at the time was lacking polish and clarity, with many elements feeling outdated. Maria was very quick to understand the ideas we wanted to express through our site. She was not only an excellent listener who took in every detail, but also highly proactive in suggesting her own ideas and concepts to improve the site while still aligning closely with our overall goals. The success of this project ultimately led us to offer Maria a role at Zano, where she continues to make a valuable impact. In the end, Maria delivered exceptional-quality work and even went above and beyond in several areas. I would highly recommend Maria to any workplace looking for a passionate, eager, and genuinely lovely professional to work with.',
    author: 'Jaafar Ali Jaafar',
    role: 'CTO at Zano'
  },
  {
    quote:
      'I had the pleasure of working with Maria on the complete redesign of Cíclicas’ website. She did far more than just develop the site: she analyzed, proposed solutions, solved challenges, and approached every aspect of the project with strategic thinking and great attention to detail. Her work is clean, scalable, and highly rigorous, and her collaborative approach is truly exemplary. She was able to translate our ideas—sometimes quite chaotic—into clear, functional, and effective solutions. Maria is the kind of professional who adds value from day one. I highly recommend her without hesitation.',
    author: 'Gema Rosado Jordán', 
    role: 'CEO at Cíclicas'
  },
  {
    quote:
      'Working with María was a fantastic experience from start to finish. She quickly understood our goals and translated them into a website that perfectly met our needs, while proactively suggesting improvements that made the final product even better. The result is a functional, intuitive, and well-crafted website. Her post-launch support has also been consistently fast and reliable. We would highly recommend María for any web development project or as a valuable external member of a development team.',
    author: 'Encarnación Giráldez', 
    role: 'Founder of Renhacer'
  }
]

export default function WhatPeopleValue() {
  return (
    <section className="section what-people" aria-labelledby="what-people-heading">
      <div className="container">
        <h2 id="what-people-heading" className="section-title">What people value working with me</h2>
        <div className="what-people__cards">
          {items.map((t, i) => (
            <blockquote key={i} className="what-people__card">
              <p className="what-people__quote">{t.quote}</p>
              <footer className="what-people__source">
                <span className="what-people__author">{t.author}</span>
                {t.role ? <span className="what-people__role"> — {t.role}</span> : null}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
