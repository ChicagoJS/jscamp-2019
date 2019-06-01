import * as React from 'react'

export default () => (
  <footer className="container">
    <div className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <div className="col-12 col-md text-center">
          <h1>JSCamp Chicago</h1>
          <small className="d-block mb-3 text-muted">
            © {new Date().getFullYear()}
          </small>
        </div>
      </div>
    </div>
  </footer>
)
