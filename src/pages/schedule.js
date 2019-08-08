import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash.get'

const AVATAR_SIZE = 60

export default class SchedulePage extends React.Component {
  render() {
    const talks = get(this.props, 'data.allTalksJson.edges', [])
    const siteMetadata = get(this.props, 'data.site.siteMetadata', {})
    return (
      <React.Fragment>
        <Helmet title={`${siteMetadata.title} | Schedule`} />
        {talks.map(talk => (
          <ScheduleRow {...talk} />
        ))}
      </React.Fragment>
    )
  }
}

const ScheduleRow = ({
  talk: {
    time,
    title,
    talkTitle,
    talkDescription,
    fullName,
    photoUrl,
    lastRow,
  },
}) => (
  <div
    className={`row ${!lastRow && 'border-bottom border-bottom-1'} pt-4 pb-4`}
  >
    <div className="col-md-2">
      <p style={{ margin: 0 }} className="font-weight-bold text-primary">
        {time}
      </p>
    </div>
    <div className="col-md-2">
      {photoUrl && (
        <img
          src={`https://res.cloudinary.com/chicagojs/image/fetch/w_${AVATAR_SIZE *
            2},h_${AVATAR_SIZE * 2},c_fill,g_face,f_auto,dpr_auto/${photoUrl}`}
          alt={fullName}
          width={AVATAR_SIZE}
          height={AVATAR_SIZE}
          style={{
            marginBottom: 0,
            paddingBottom: 0,
            width: AVATAR_SIZE,
            height: AVATAR_SIZE,
            borderRadius: AVATAR_SIZE / 2,
          }}
        />
      )}
    </div>
    <div className="col-md-7">
      {fullName && (
        <span
          style={{ display: 'block' }}
          className="text-secondary font-weight-normal mb-2"
        >
          {fullName}
        </span>
      )}
      {title && <p className="m-0 font-weight-normal text-primary">{title}</p>}
      {talkTitle && (
        <p className="m-0 text-primary font-weight-medium">{talkTitle}</p>
      )}
    </div>
  </div>
)

export const pageQuery = graphql`
  query ScheduleQuery {
    allTalksJson {
      edges {
        talk: node {
          time
          talkTitle
          photoUrl
          fullName
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
