import * as React from 'react'
import './style.scss'

export default ({ title, imageUrl }) => (
  <div
    style={{
      backgroundSize: 'cover',
      backgroundImage: `url(https://res.cloudinary.com/chicagojs/image/fetch/w_1200,h_400,c_fill,g_center,f_auto,dpr_auto/${imageUrl})`,
    }}
    className="Hero mb-3 mb-md-5 position-relative overflow-hidden text-center text-white"
  >
    <h1 className="py-5 display-3 font-weight-bold">{title}</h1>
  </div>
)
