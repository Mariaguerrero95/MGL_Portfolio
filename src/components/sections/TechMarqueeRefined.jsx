import React from 'react'

export default function TechMarqueeRefined({ items = [] }) {
  // items: array of {name, logo}
  const sample = items.length ? items : [
    { name: 'React' }, { name: 'Node.js' }, { name: 'Postgres' }, { name: 'TensorFlow' }, { name: 'GraphQL' }
  ]

  return (
    <section className="section tech-marquee" aria-label="Technologies">
      <div className="container">
        <div className="kicker">Capabilities</div>
        <h3 className="section-title">Technologies & tooling</h3>
        <div className="marquee marquee--rows">
          <div className="marquee__row" aria-hidden="true">
            {sample.map((t, i) => (
              <div className="tech-chip" key={`a-${i}`}>{t.name}</div>
            ))}
          </div>
          <div className="marquee__row marquee__row--reverse" aria-hidden="true">
            {sample.map((t, i) => (
              <div className="tech-chip" key={`b-${i}`}>{t.name}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
