import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash.get'

import ImageRow from '../components/ImageRow'

const images = ['tXmc2mVDxJc', 'WhayBiwx8Ng', 'ewtdGmhY1vI']

const template = 'https://source.unsplash.com/$0/900x600'

export default class AttendPage extends React.Component {
  render() {
    const siteMetadata = get(this.props, 'data.site.siteMetadata', {})
    return (
      <React.Fragment>
        <Helmet
          title={`${siteMetadata.title} | Attendee Info`}
          description="Attend Chicago JSCamp at 300 S. Riverside Plaza, Suite 1000 on September 14, 2019"
        />
        <h1 className="text-primary">Attendee Information</h1>
        <h3 className="text-primary">Venue Location</h3>
        <p>
          The venue for Chicago JSCamp 2019 is Cars.com, located at{' '}
          <a href="http://bit.ly/cjs18-map">
            300 S Riverside, 10th Floor, Chicago IL 60606
          </a>
        </p>
        <p>
          The North entrance of the building will be closed due to construction.
          There will be signs directing visitors to the West Walkway, through
          which you can enter the building.
        </p>
        <p>
          <a href="http://bit.ly/cjs18Building-Map">
            MAP - ChicagoJS Venue West Walkway
          </a>
        </p>
        <h3 className="text-primary">Arrival</h3>
        <p>
          Upon arrival, please check in with security. You will be asked for
          picture ID.
        </p>
        <p>
          Breakfast will start at 8am. You can view more about the{' '}
          <Link to="/schedule/">daily schedule here.</Link>
        </p>
        <h2 className="text-primary">Lunch</h2>
        <p>
          Lunch for attendees will be on your own. We have created a map with
          links to many options for lunch within a short walk from the venue.
        </p>
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1-FKP36FEICwZwxPJPXkvhuzLNhlcVFIt"
          width="480"
          height="480"
        />
        <ImageRow images={images.map(i => template.replace('$0', i))} />
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query AttendQuery {
    site {
      siteMetadata {
        title
        description
        keywords
        siteUrl
        author
        twitter
        city
        date
        ticketLink
      }
    }
  }
`
