import React from 'react'
import cloudinaryUrl from 'cloudinary-microurl'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash.get'
import PageHeader from './'

export default class SponsorshipPage extends React.Component {
  render() {
    const siteMetadata = get(this.props, 'data.site.siteMetadata', {})
    return (
      <React.Fragment>
        <Helmet title={`${siteMetadata.title} | Workshops`} />
        <h1 className="text-primary text-center">
          {siteMetadata.title} Workshops
        </h1>
        <br />
        <p>
          We are excited to add two workshops to our program this year.
          Attendees will have the opportunity to attend a workshops on Friday,
          September 13th, the day prior to the main event.
        </p>

        <h2>Learn to use Docker with Node.js, with Karl Hughes</h2>

        <h3>Friday, September 13, 2019</h3>
        <h5>HALF DAY - 1pm to 5pm</h5>

        <p>
          Want to learn to deploy Node.js applications with Docker? This
          workshop will walk you through the steps of getting Docker installed
          and deploying a simple Node.js application to the public Internet. You
          don't need to know anything about Docker to attend this event.
        </p>

        <h3>Course Outline</h3>

        <ul>
          <li>
            Introduction to Docker
            <ul>
              <li>Running your first container</li>
              <li>Using volumes</li>
              <li>Building a custom Docker image</li>
            </ul>
          </li>

          <li>
            Docker Compose
            <ul>
              <li>Orchestrating a local application</li>
              <li>Running tests</li>
              <li>Using Docker for continuous integration</li>
            </ul>
          </li>

          <li>
            Docker in Production
            <ul>
              <li>Hardening your Docker images </li>
              <li>Deployment options</li>
            </ul>
          </li>
        </ul>

        <p>
          Throughout the course, all topics will be reinforced with hands-on lab
          activities.
        </p>

        <p>
          Attendees should have Docker installed on their laptop. Versions can
          be found at the links below:
          <ul>
            <li>
              <a
                href="https://hub.docker.com/editions/community/docker-ce-desktop-mac"
                target="_new"
              >
                Docker for Mac: 
                https://hub.docker.com/editions/community/docker-ce-desktop-mac
              </a>
            </li>
            <li>
              <a
                href="https://hub.docker.com/editions/community/docker-ce-desktop-windows"
                target="_new"
              >
                Docker for Windows: 
                https://hub.docker.com/editions/community/docker-ce-desktop-windows
              </a>
            </li>
            <li>
              <a
                href="https://docs.docker.com/install/linux/docker-ce/ubuntu/"
                target="_new"
              >
                Docker for Linux: 
                https://docs.docker.com/install/linux/docker-ce/ubuntu/
              </a>
            </li>
          </ul>
          <p>
            You should also have access to a terminal (bash preferred) and text
            editor. While not necessarily required, some familiarity with
            Javascript and Node will be helpful.
          </p>
          <p>
            Optionally, you can sign up for a DigitalOcean account to deploy
            your application. If you don't already have an account, you can get
            $50 in free credit, by [signing up with this
            link](https://m.do.co/c/888fefc32a01).
          </p>
          <ul>
            <li>
              <strong>Prerequisites</strong>: Basic JavaScript, familiarity with
              Node.js/installing with npm.
            </li>
            <li>
              <strong>What to Bring</strong>: A computer with Node v10+ and
              charging cable
            </li>
          </ul>
        </p>

        <p>
          <h4>Instructor Bio </h4>
          Karl Hughes is a technology team builder, software engineer, and
          startup enthusiast. He is the CTO at The Graide Network and is
          passionate about helping technology speakers succeed at CFP Land.
        </p>
        <div className="text-center mt-3">
          <a href={siteMetadata.ticketLink} className="btn btn-primary mr-3">
            Buy Workshop Tickets
          </a>
        </div>
        <br />
        <h2>GraphQL Workshop with Eve Porcello</h2>

        <h3>Friday, September 13, 2019</h3>
        <h5>9am to 5pm</h5>

        <p>
          Want to learn GraphQL but you’re not sure where to get started? Get a
          solid foundation in this hands-on, one-day workshop.
        </p>

        <p>
          In GraphQL, the "Q" stands for Query, which means to question. In this
          course, we're going to learn GraphQL, a special way to ask internet
          servers questions. We are going to learn how to ask these servers all
          sorts of questions at once and allow them to provide all of the
          answers in a single response. Then we'll build our own GraphQL servers
          with Node.js that can answer questions that originate with any client.
        </p>

        <h3>Course Outline</h3>

        <ul>
          <li>
            GraphQL Query Language
            <ul>
              <li>Building Queries</li>
              <li>Changing Data with Mutations</li>
              <li>Using Arguments and Variables</li>
              <li>Listening for Changes with Subscriptions</li>
            </ul>
          </li>

          <li>
            GraphQL Schema Language
            <ul>
              <li>Creating Types</li>
              <li>Connecting Types</li>
              <li>Designing Queries, Mutations, and Subscriptions</li>
              <li>Schema Documentation</li>
            </ul>
          </li>

          <li>
            Working with Apollo Server
            <ul>
              <li>Building a Server</li>
              <li>Writing Resolvers</li>
              <li>Creating Custom Scalars</li>
              <li>Utilizing Mocks</li>
            </ul>
          </li>
        </ul>

        <p>
          Throughout the course, all topics will be reinforced with hands-on lab
          activities.
        </p>

        <p>
          <ul>
            <li>
              <strong>Prerequisites</strong>: Basic JavaScript, familiarity with
              Node.js/installing with npm.
            </li>
            <li>
              <strong>What to Bring</strong>: A computer with Node v10+ and
              charging cable
            </li>
          </ul>
        </p>

        <p>
          <h4>Instructor Bio </h4>
          Eve Porcello is the co-founder of Moon Highway, a curriculum
          development and classroom training company based in Northern
          California. She has created courses for LinkedIn Learning and
          egghead.io and is the co-author of Learning GraphQL and Learning React
          from O’Reilly.
        </p>
        <div className="text-center mt-3">
          <a href={siteMetadata.ticketLink} className="btn btn-primary mr-3">
            Buy Workshop Tickets
          </a>
        </div>
      </React.Fragment>
    )
  }
}

export const query = graphql`
  query WorkshopQuery {
    site {
      siteMetadata {
        title
        sponsorForm
        sponsorPdf
        ticketLink
      }
    }
  }
`
