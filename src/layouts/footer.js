import * as React from 'react'
import Link from 'gatsby-link'
import Logo from '../components/Logo'

export default ({ title, cfpLink }) => (
  <footer className="border-top border-light pt-4 mt-4">
    <ul className="container list-unstyled list-inline text-center">
      <li className="list-inline-item mr-4">
        <Logo width={240} />
      </li>
      <li className="list-inline-item p-2">
        <Link to="/sponsors">Sponsor</Link>
      </li>
      <li className="list-inline-item p-2">
        <a target="_blank" rel="nofollow noopener" href={cfpLink}>
          Speak
        </a>
      </li>
      <li className="list-inline-item p-2">
        <Link to="/attend">Attend</Link>
      </li>
      <li className="list-inline-item p-2">
        <a target="_blank" rel="nofollow noopener" href="https://chicagojs.org">
          ChicagoJS
        </a>
      </li>
    </ul>
  </footer>
)
