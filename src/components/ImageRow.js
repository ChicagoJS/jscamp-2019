import React from 'react'

const ImageRow = ({ images }) => (
  <div className="text-center">
    {images.map(img => (
      <img
        src={img}
        style={{ border: 'none', boxShadow: 'none' }}
        className="img-fluid img-thumbnail"
      />
    ))}
  </div>
)

export default ImageRow
