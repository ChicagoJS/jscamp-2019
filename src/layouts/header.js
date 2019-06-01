import * as React from 'react'
import Link from 'gatsby-link'

const LINKS = [
  {
    label: 'ATTEND',
    href: '/attend',
  },
  {
    label: 'CONDUCT',
    href: '/code-of-conduct',
  },
  {
    label: 'SCHEDULE',
    href: '/schedule',
  },
  {
    label: 'SPEAKERS',
    href: '/speakers',
  },
  {
    label: 'SPONSORS',
    href: '/sponsors',
  },
]

const NavLink = ({ label, href }) => (
  <li className="nav-item">
    <Link
      to={href}
      style={{ color: 'white' }}
      className="nav-link font-weight-bold"
    >
      {label}
    </Link>
  </li>
)

const ButtonLink = ({ label, to }) => (
  <a
    href={to}
    className="ml-2 btn btn-light btn-primary text-primary font-weight-bold"
  >
    {label}
  </a>
)

export default ({ title, ticketLink }) => (
  <nav className="p-4 navbar navbar-expand-md navbar-dark fixed-top bg-primary">
    <Link className="navbar-brand mb-0 h1 font-weight-bold" to="/">
      JSCAMP CHICAGO
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav ml-auto">
        {LINKS.map(link => <NavLink {...link} />)}
        <ButtonLink label="BUY TICKETS" to={ticketLink} />
      </ul>
    </div>
  </nav>
)
