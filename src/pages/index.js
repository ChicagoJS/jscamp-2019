import React from 'react'
import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Helmet from 'react-helmet'
import get from 'lodash.get'

import Section from '../components/Section'
import ImageRow from '../components/ImageRow'

const CONFIG = {
  title: 'JSCamp 2019',
  date: 'September 14, 2019',
  city: 'Chicago, IL',
  images: {
    hero: 'https://source.unsplash.com/Nyvq2juw4_o/900x400',
    featured: {
      featured1: 'https://source.unsplash.com/QbD-LmFZ-uk/200x400',
      featured2: 'https://source.unsplash.com/1nashFHSKaU/200x400',
      featured3: 'https://source.unsplash.com/Ye60h3tJuU0/200x400',
    },
  },
  sponsor: {
    title: 'SPONSORSHIPS',
    description: `We're currently offering sponsorship packages for JSCamp. Contact us to learn more.`,
  },
  coc: {
    title: 'CODE OF CONDUCT',
    description:
      'We expect, and require, all organizers, sponsors, speakers, volunteers, delegates, and attendees of all levels to adhere to our Code of Conduct.',
  },
}

export default class HomePage extends React.Component {
  render() {
    const siteMetadata = get(this.props, 'data.site.siteMetadata', {})
    return (
      <React.Fragment>
        <Helmet
          title={siteMetadata.title}
          description={siteMetadata.description}
          keywords={siteMetadata.keywords}
        />
        <Section
          text="JSCamp is a one day single track conference for developers interested in JavaScript. Speakers are covering topics such as Node, React, Vue, Ember for both beginners and experts. Come check out Chicago and meet the developers you hear about online!"
          cta={() => (
            <div className="text-center">
              <a
                target="_blank"
                rel="noopener nofollow"
                href={siteMetadata.ticketLink}
                className="btn btn-primary"
              >
                BUY TICKETS
              </a>
            </div>
          )}
        />
        <ImageRow images={Object.values(CONFIG.images.featured)} />
        <Section
          title={CONFIG.sponsor.title}
          text={CONFIG.sponsor.description}
          cta={() => (
            <div className="text-center">
              <a
                target="_blank"
                rel="noopener nofollow"
                href={siteMetadata.sponsorForm}
                className="btn btn-primary mr-3"
                alt="Sponsor ChicagoJS Camp"
              >
                SPONSOR US
              </a>
            </div>
          )}
        />
        <Section
          title={CONFIG.coc.title}
          text={CONFIG.coc.description}
          cta={() => (
            <div className="text-center">
              <OutboundLink to="/code-of-conduct" className="btn btn-primary">
                CODE OF CONDUCT
              </OutboundLink>
            </div>
          )}
        />
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
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
        sponsorForm
      }
    }
  }
`
