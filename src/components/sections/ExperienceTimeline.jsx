import React from 'react'
import projectsData from '../../lib/projects.json'

export default function ExperienceTimeline() {
  return (
    <section className="section experience-timeline" aria-label="Experience timeline">
      <div className="container">
        <div className="timeline__inner">
          <div className="timeline__header">
            <h2 className="section-title">Experience</h2>
            <p className="lead">Company-focused timeline — Zano highlighted as primary employer.</p>
          </div>

          <div className="timeline__company">
            <div className="company-card">
              <div className="company-card__media" aria-hidden>
                <img src="/previews/zano-cover.jpg" alt="Zano cover" loading="lazy" />
              </div>
              <div className="company-card__content">
                <h3>Zano — Product & Frontend Engineering</h3>
                <p>Led product and frontend engineering across multiple products; focus on AI-assisted features and client collaboration.</p>
                <ul className="company-card__highlights">
                  <li>Product ownership across frontend and backend</li>
                  <li>Built AI-assisted workflows and review systems</li>
                  <li>Collaborated directly with clients to ship product features</li>
                </ul>
                <div className="company-card__links">
                  {projectsData.projects.map(p => (
                    <a key={p.id} href={`/cases/${p.slug}`} className="company-card__project">{p.title}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="timeline__others">
            <div className="timeline__item muted">Freelance & personal projects (compact overview)</div>
          </div>

        </div>
      </div>
    </section>
  )
}
