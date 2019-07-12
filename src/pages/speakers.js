import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash.get'

const byName = (a, b) => {
  if (a.name < b.name) return -1
  if (a.name > b.name) return 1
  return 0
}

export default class SpeakersPage extends React.Component {
  render() {
    const speakers = get(this.props, 'data.allSpeakersJson.edges', [])
    const siteMetadata = get(this.props, 'data.site.siteMetadata', {})

    return (
      <React.Fragment>
        <Helmet title={`${siteMetadata.title} | Speakers`} />
        <div className="container">
          <div className="row text-center">
            {speakers.sort(byName).map(({ speaker }) => (
              <Speaker speaker={speaker} />
            ))}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const Speaker = ({
  speaker: {
    id,
    name,
    about,
    bio,
    type,
    location,
    linkedInUrl,
    twitterUrl,
    githubUrl,
    imageUrl,
  },
}) => (
  <div className="col-lg-4 text-center" style={{ marginBottom: 40 }}>
    <div
      style={{
        display: 'inline-block',
        marginBottom: 20,
      }}
    >
      <img
        src={imageUrl}
        alt={`Headshot of ${name}`}
        width={160}
        height={160}
        style={{
          padding: 0,
          margin: 0,
          width: 160,
          height: 160,
          borderRadius: 80,
        }}
      />
    </div>
    <h2>{name}</h2>
    <p>{about}</p>
    <hr />
    <p>{location}</p>
    <ul className="list-unstyled">
      {!githubUrl ? null : (
        <li className="d-inline-block">
          <a href={githubUrl}>
            <img
              width={36}
              height={36}
              style={{ width: 36, height: 36 }}
              src="/github.svg"
            />
          </a>
        </li>
      )}
      {!twitterUrl ? null : (
        <li className="d-inline-block">
          <a href={twitterUrl}>
            <img
              width={36}
              height={36}
              style={{ width: 36, height: 36 }}
              src="/twitter.svg"
            />
          </a>
        </li>
      )}
      {!linkedInUrl ? null : (
        <li className="d-inline-block">
          <a href={linkedInUrl}>
            <img
              width={36}
              height={36}
              style={{ width: 36, height: 36 }}
              src="/linkedin.svg"
            />
          </a>
        </li>
      )}
    </ul>
  </div>
)

export const pageQuery = graphql`
  query SpeakersQuery {
    allSpeakersJson {
      edges {
        speaker: node {
          id
          name
          about
          bio
          type
          location
          linkedInUrl
          twitterUrl
          githubUrl
          imageUrl
        }
      }
    }
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
