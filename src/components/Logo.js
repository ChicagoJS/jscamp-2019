import React from 'react'
import logo from '../img/logo.svg'

export default function Logo({ width = 300, height, className }) {
  return (
    <img
      style={{ display: 'block', margin: 0, padding: 0 }}
      className={className}
      src={logo}
      width={width}
      height={height}
      alt="Logo"
    />
  )
}
