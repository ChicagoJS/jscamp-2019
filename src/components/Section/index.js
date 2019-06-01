import * as React from 'react'
import './style.scss'

export default ({ title, text, cta }) => (
  <section className="container px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    {!!title && <h1 className="title">{title}</h1>}
    {!!text && <p className="subtitle">{text}</p>}
    {typeof cta === 'function' && cta()}
  </section>
)
