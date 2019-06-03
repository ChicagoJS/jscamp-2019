import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash.get'

import './gatstrap.scss'

import Footer from './footer'
import Header from './header'
import PageHeader from '../components/PageHeader'

const CONFIG = {
  title: 'JSCamp 2019',
  date: 'September 14, 2019',
  city: 'Chicago, IL',
  images: {
    hero: 'https://source.unsplash.com/uevmkfCH98Q/1200x600',
    featured: {
      featured1: 'https://source.unsplash.com/QbD-LmFZ-uk/300x500',
      featured2: 'https://source.unsplash.com/1nashFHSKaU/300x500',
      featured3: 'https://source.unsplash.com/Ye60h3tJuU0/300x500',
    },
  },
}

function getPageInfo(pathname) {
  switch (pathname) {
    case '/speakers':
      return {
        title: 'Speakers',
        imageUrl: 'https://source.unsplash.com/Inv8D-Ur3Nc/1200x400',
      }
    case '/schedule':
      return {
        title: 'Schedule',
        imageUrl: 'https://source.unsplash.com/Hq_K7X2NkGE/1200x400',
      }
    case '/code-of-conduct':
      return {
        title: 'Code of Conduct',
        imageUrl: 'https://source.unsplash.com/F-axbQfWoK0/1200x400',
      }
    case '/attend':
      return {
        title: 'Attend',
        imageUrl: 'https://source.unsplash.com/BwmOGbS2POw/1200x400',
      }
    case '/sponsors':
      return {
        title: 'Sponsors',
        imageUrl: 'https://source.unsplash.com/v-b_6-I1oLE/1200x400',
      }
    default:
      return null
  }
}

const HomePageHero = ({
  backgroundImage,
  title,
  date,
  city,
  ticketLink,
  cfpLink,
}) => (
  <div
    style={{
      backgroundSize: 'cover',
      backgroundImage: `url(https://res.cloudinary.com/chicagojs/image/fetch/w_1200,h_400,c_fill,g_center,f_auto,dpr_auto/${backgroundImage})`,
    }}
    className="position-relative overflow-hidden text-center"
  >
    <div className="bg-overlay p-3 p-md-5">
      <div className="bg-text-overlay p-lg-7 mx-auto my-5 text-white">
        <h1 className="display-1 font-weight-bold mb-0">{title}</h1>
        <p className="lead font-weight-normal">
          {date} • {city}
        </p>
        <a
          style={{ fontSize: 20 }}
          href={ticketLink}
          className="btn btn-primary mr-3"
        >
          TICKETS
        </a>
        <a style={{ fontSize: 20 }} href={cfpLink} className="btn btn-primary">
          SPEAK
        </a>
      </div>
    </div>
  </div>
)

export default class Layout extends React.Component {
  render() {
    const { location, children, data } = this.props
    const isHome = location.pathname === '/'
    const siteMetadata = get(this.props, 'data.site.siteMetadata', {})

    const mainStyles = {
      flex: 1,
    }
    // if (!isHome) {
    //   mainStyles.flex = 1
    // }

    return (
      <React.Fragment>
        <Header
          title={siteMetadata.title}
          ticketLink={siteMetadata.ticketLink}
        />
        <div
          style={{
            paddingTop: 84,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {isHome ? (
            <HomePageHero
              backgroundImage={CONFIG.images.hero}
              title={siteMetadata.title}
              city={siteMetadata.city}
              date={siteMetadata.date}
              ticketLink={siteMetadata.ticketLink}
              cfpLink={siteMetadata.cfpLink}
            />
          ) : (
            <PageHeader {...getPageInfo(location.pathname)} />
          )}
          <main style={mainStyles} class="container">
            {children()}
          </main>
          <Footer
            title={data.site.siteMetadata.title}
            cfpLink={data.site.siteMetadata.cfpLink}
          />
        </div>
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query LayoutQuery {
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
        cfpLink
      }
    }
  }
`
