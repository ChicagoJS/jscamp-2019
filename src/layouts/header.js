import * as React from 'react'
import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Logo from '../components/Logo'

const LINKS = [
  {
    label: 'Attend',
    href: '/attend',
  },
  {
    label: 'Conduct',
    href: '/code-of-conduct',
  },
  {
    label: 'Schedule',
    href: '/schedule',
  },
  {
    label: 'Speakers',
    href: '/speakers',
  },
  {
    label: 'Sponsors',
    href: '/sponsors',
  },
]

const NavLink = ({ label, href }) => (
  <li className="nav-item">
    <OutboundLink to={href} className="nav-link">
      {label}
    </OutboundLink>
  </li>
)

const ButtonLink = ({ label, to }) => (
  <a href={to} className="ml-2 btn btn-primary text-white">
    {label}
  </a>
)

export default ({ title, ticketLink }) => (
  <nav className="p-3 navbar navbar-expand-md fixed-top bg-white border-box-shadow">
    <Link className="navbar-brand mb-0" to="/">
      <Logo width={160} height={42} />
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
        {LINKS.map(link => (
          <NavLink {...link} />
        ))}
        <ButtonLink label="BUY TICKETS" to={ticketLink} />
      </ul>
    </div>
  </nav>
)
