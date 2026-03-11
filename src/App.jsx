import { useMemo, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const NICHES = [
  { id: "all", label: "All niches" },
  { id: "jewelry", label: "Jewelry" },
  { id: "cosmetics", label: "Cosmetics / Beauty" },
  { id: "clothing", label: "Clothing" },
  { id: "toys", label: "Toys / Hobby" },
  { id: "health", label: "Health / Food" },
];

const PROJECTS = [
  {
    id: "marcodalmaso",
    name: "MARCO DAL MASO",
    initials: "MD",
    niche: "jewelry",
    url: "https://marcodalmaso.com/",
    brandLine: "Handcrafted luxury jewelry · Made in Italy",
    summary:
      "High-end Shopify experience for a handcrafted Italian jewelry house, focused on premium storytelling and conversion.",
    bullets: [
      "Optimized product detail layouts for fine jewelry storytelling",
      "Improved navigation for collections, best sellers, and gifting",
    ],
  },
  {
    id: "kyliecosmetics",
    name: "Kylie Cosmetics",
    initials: "KC",
    niche: "cosmetics",
    url: "https://kyliecosmetics.com/",
    brandLine: "Global beauty brand by Kylie Jenner",
    summary:
      "Worked within a high-traffic cosmetics experience with rich merchandising and launch-focused pages.",
    bullets: [
      "Supported launch-ready layouts for new collections and campaigns",
      "Ensured mobile-first UX for complex product and category pages",
    ],
  },
  {
    id: "infiniment",
    name: "Infiniment Coty Paris",
    initials: "IC",
    niche: "cosmetics",
    url: "https://eu.infinimentcoty.com/",
    brandLine: "Luxury perfumery · Coty",
    summary:
      "Premium fragrance storytelling with emphasis on immersive visuals and editorial content.",
    bullets: [
      "Helped structure content for high-end fragrance discovery flows",
      "Balanced rich imagery with performance and accessibility needs",
    ],
  },
  {
    id: "epilynx",
    name: "EpiLynx",
    initials: "EL",
    niche: "cosmetics",
    url: "https://www.epilynx.com/",
    brandLine: "Doctor-formulated, gluten-free skincare",
    summary:
      "Ingredient-focused skincare eCommerce tailored for sensitive and allergen-aware customers.",
    bullets: [
      "Improved product information layouts for medical-grade details",
      "Clarified routines, bundles, and education for different skin concerns",
    ],
  },
  {
    id: "hobbysports",
    name: "Hobby Sports",
    initials: "HS",
    niche: "toys",
    url: "https://hobby-sports.com/",
    brandLine: "R/C cars, planes, and hobby store",
    summary:
      "Category-heavy hobby storefront with a focus on discoverability and clear spec browsing.",
    bullets: [
      "Worked on category and filter UX for complex product catalogs",
      "Supported content for promotions, bundles, and gift guides",
    ],
  },
  {
    id: "mamanourish",
    name: "Mama Nourish",
    initials: "MN",
    niche: "health",
    url: "https://mamanourish.in/",
    brandLine: "Grandma-inspired healthy snacks",
    summary:
      "Clean food brand with laddubars and chivda, positioned around trust, ingredients, and nostalgia.",
    bullets: [
      "Shaped product storytelling around ingredients and grandma recipes",
      "Clarified packs, variants, and use-cases (munchies, on-the-go, new moms)",
    ],
  },
  {
    id: "labelswish",
    name: "LabelSwish",
    initials: "LS",
    niche: "clothing",
    url: "https://labelswish.com/",
    brandLine: "Indian fashion label · Occasionwear & coords",
    summary:
      "Fashion-forward storefront for womenswear collections, coordinates, and occasion outfits.",
    bullets: [
      "Helped present collections (drops, edits) in a structured way",
      "Focused on look-based navigation (co-ords, dresses, celebrity looks)",
    ],
  },
  {
    id: "tommyequestrian",
    name: "Tommy Equestrian EU",
    initials: "TE",
    niche: "clothing",
    url: "https://tommy-equestrian.com/",
    brandLine: "Tommy Hilfiger Equestrian · EU",
    summary:
      "Performance fashion eCommerce for equestrian apparel and horsewear across EU markets.",
    bullets: [
      "Supported category UX for riders and horses across regions",
      "Worked with brand-driven layouts that match Tommy Hilfiger standards",
    ],
  },
];

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeNiche, setActiveNiche] = useState("all");
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="#top" aria-label="Go to top">
            <span className="mark" aria-hidden="true">
             <img src="https://media.licdn.com/dms/image/v2/D4D03AQE0lk45zXCccg/profile-displayphoto-scale_400_400/B4DZy5lGBPJUAg-/0/1772640041464?e=1775088000&v=beta&t=SpqzjGc3HIvVjdDoUwJSZIpSJL5PKX0erS-OJP0V_48" alt="Vishal Rathore" />
            </span>
            <span className="brand-text">
              <strong>Vishal Rathore</strong>
              <span>Shopify Developer · Frontend Developer</span>
            </span>
          </a>

          <nav className="nav" aria-label="Primary">
            <button
              className="nav-toggle"
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={navOpen}
              onClick={() => setNavOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
            <ul className={`nav-links ${navOpen ? "open" : ""}`}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setNavOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="content" className="shell">
        <div className="container grid">
          <aside className="sidebar">
            <div className="card pad">
              <div className="hero">
                <div className="avatar" aria-hidden="true">
                  <img src="https://media.licdn.com/dms/image/v2/D4D03AQE0lk45zXCccg/profile-displayphoto-scale_400_400/B4DZy5lGBPJUAg-/0/1772640041464?e=1775088000&v=beta&t=SpqzjGc3HIvVjdDoUwJSZIpSJL5PKX0erS-OJP0V_48" alt="Vishal Rathore" />
                </div>
                <div className="headline">
                  <h1>Frontend Developer | Shopify </h1>
                  <p>
                    I build fast, conversion-focused Shopify storefronts and
                    modern UI with React. Strong focus on performance,
                    accessibility, and clean engineering.
                  </p>
                </div>
                <div className="badge-row" aria-label="Core strengths">
                  <span className="badge">Liquid + Sections</span>
                  <span className="badge">Shopify Plus / POS</span>
                  <span className="badge">React UI</span>
                  <span className="badge">Core Web Vitals</span>
                </div>
                <div className="cta-row">
                  <a className="btn primary" href="#contact">
                    Contact
                  </a>
                  <a className="btn ghost" href="#projects">
                    View projects
                  </a>
                </div>
                <div className="meta" aria-label="Profile details">
                  <div className="meta-item">
                    <span>Experience</span>
                    <span>3+ years</span>
                  </div>
                  <div className="meta-item">
                    <span>Location</span>
                    <span>Bengaluru, India</span>
                  </div>
                  <div className="meta-item">
                    <span>Open to</span>
                    <span>Product teams</span>
                  </div>
                </div>
              </div>

              <div className="quicklinks" aria-label="Quick links">
                <a className="q" href="mailto:vishalrathore.wedev@outlook.com">
                  <div>
                    <strong>Email</strong>
                    <span>&nbsp;vishalrathore.wedev@outlook.com</span>
                  </div>
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="q" href="tel:+919926606484">
                  <div>
                    <strong>Phone</strong>
                    <span>&nbsp;+91 99266 06484</span>
                  </div>
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="q" href="#contact">
                  <div>
                    <a class="linku" href="https://1drv.ms/b/c/E1C59D799778FBEB/IQB5dRRY4vCNR4tNJZXCcmaeAQrGjvakLwri_3d4hnSLcus?e=h6QGbD"><strong>View Resume</strong></a>
                  </div>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </aside>

          <section className="content">
            <section id="about" className="card section">
              <h2>About</h2>
              <p className="sub">
                I specialize in Shopify theme development (Liquid, sections,
                JSON templates) and modern frontend engineering (React,
                JavaScript). I care about shipping features that look great,
                perform well, and stay maintainable for teams.
              </p>
              <div className="cols">
                <div className="mini">
                  <h3>What I do</h3>
                  <ul>
                    <li>Custom Shopify themes + section architecture</li>
                    <li>Shopify Plus & POS implementations</li>
                    <li>UI engineering with React + modern JS</li>
                    <li>Performance + SEO fundamentals</li>
                  </ul>
                </div>
                <div className="mini">
                  <h3>How I work</h3>
                  <ul>
                    <li>Figma → pixel-perfect UI, responsive + accessible</li>
                    <li>Clean code, reusable patterns, strong reviews</li>
                    <li>Performance mindset (CWV, assets, JS budget)</li>
                    <li>Agile collaboration (Jira) + ownership</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="stack" className="card section">
              <h2>Stack</h2>
              <p className="sub">
                A quick overview of the tools I use day-to-day.
              </p>
              <div className="chips" aria-label="Tech stack chips">
                <span className="chip">Shopify</span>
                <span className="chip">Liquid</span>
                <span className="chip">JSON templates</span>
                <span className="chip">Metafields</span>
                <span className="chip">Shopify Plus</span>
                <span className="chip">Shopify POS</span>
                <span className="chip">React</span>
                <span className="chip">JavaScript</span>
                <span className="chip">HTML</span>
                <span className="chip">CSS / SCSS</span>
                <span className="chip">Tailwind</span>
                <span className="chip">Core Web Vitals</span>
                <span className="chip">SEO</span>
                <span className="chip">Git</span>
                <span className="chip">CI/CD</span>
              </div>
            </section>

            <section id="experience" className="card section">
              <h2>Experience</h2>
              <div className="timeline">
                <article className="role">
                  <div className="role-top">
                    <strong>SDE 1 · Photon Interactive</strong>
                    <span>Apr 2024 – Present · Bengaluru</span>
                  </div>
                  <p>
                    Building and improving Shopify storefront experiences with a
                    focus on quality, performance, and usability.
                  </p>
                  <ul>
                    <li>Implemented Shopify theme features using Liquid + JSON templates.</li>
                    <li>Converted Figma designs into pixel-perfect, responsive UI.</li>
                    <li>Worked on performance improvements and SEO best practices.</li>
                    <li>Integrated apps/extensions to support business workflows.</li>
                  </ul>
                </article>
                <article className="role">
                  <div className="role-top">
                    <strong>Shopify / Frontend Developer · IT Geeks</strong>
                    <span>Apr 2022 – Sep 2023 · Remote</span>
                  </div>
                  <p>
                    Delivered theme customization and frontend improvements for
                    Shopify stores across devices and browsers.
                  </p>
                  <ul>
                    <li>Built responsive templates, sections, and UI enhancements.</li>
                    <li>Improved UX flows (navigation, PDP, cart) and visual polish.</li>
                    <li>Collaborated with designers for clean Figma-to-UI delivery.</li>
                    <li>Focused on maintainability and performance.</li>
                  </ul>
                </article>
              </div>
            </section>

            <section id="projects" className="card section">
              <h2>Projects</h2>
              <p className="sub">
                Selected Shopify + frontend work across different niches. More details
                on request.
              </p>

              <div className="project-tabs" aria-label="Filter projects by niche">
                {NICHES.map((niche) => (
                  <button
                    key={niche.id}
                    type="button"
                    className={`project-tab ${
                      activeNiche === niche.id ? "active" : ""
                    }`}
                    onClick={() => setActiveNiche(niche.id)}
                  >
                    {niche.label}
                  </button>
                ))}
              </div>

              <div className="projects">
                {PROJECTS.filter(
                  (project) =>
                    activeNiche === "all" || project.niche === activeNiche
                ).map((project) => (
                  <article key={project.id} className="project">
                    <div className="project-top">
                      <div className="project-brand">
                        <div className="project-logo" aria-hidden="true">
                          {project.initials}
                        </div>
                        <div>
                          <span className="tag">
                            {project.niche === "jewelry" && "Jewelry"}
                            {project.niche === "cosmetics" && "Cosmetics / Beauty"}
                            {project.niche === "clothing" && "Clothing"}
                            {project.niche === "toys" && "Toys / Hobby"}
                            {project.niche === "health" && "Health / Food"}
                            {project.niche === "all" && "Multi-niche"}
                          </span>
                          <h3>{project.name}</h3>
                          <p className="project-line">{project.brandLine}</p>
                        </div>
                      </div>
                    </div>
                    <p>{project.summary}</p>
                    <ul>
                      {project.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="actions">
                      <a
                        className="btn primary"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View live site
                      </a>
                      <a className="btn ghost" href="#contact">
                        Request project details
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="contact" className="card section">
              <h2>Contact</h2>
              <p className="sub">
                Hiring for Shopify Developer / Frontend Developer? Let’s talk.
              </p>
              <div className="contact">
                <ul className="contact-list">
                  <li>
                    <span className="label">Email</span>
                    <a href="mailto:vishalrathore.wedev@outlook.com">
                      vishalrathore.wedev@outlook.com
                    </a>
                  </li>
                  <li>
                    <span className="label">Phone</span>
                    <a href="tel:+919926606484">+91 99266 06484</a>
                  </li>
                  <li>
                    <span className="label">Location</span>
                    <span>Bengaluru, India</span>
                  </li>
                  <li>
                    <span className="label">LinkedIn</span>
                    <span>Add your profile URL here</span>
                  </li>
                </ul>

                <form
                  className="form"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="row2">
                    <div>
                      <label htmlFor="name">Name</label>
                      <input id="name" name="name" type="text" required />
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="reason">Reason</label>
                    <select id="reason" name="reason">
                      <option>Job opportunity</option>
                      <option>Interview / screening</option>
                      <option>Shopify project discussion</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Share the role, timeline, and what you’re looking for."
                    />
                  </div>
                  <button type="submit" className="btn primary">
                    Send message
                  </button>
                </form>
              </div>
            </section>

            <footer className="footer">
              <div className="container" style={{ padding: 0 }}>
                © {year} Vishal Rathore · Shopify Developer · Frontend Developer
              </div>
            </footer>
          </section>
        </div>
      </main>
    </>
  );
}

