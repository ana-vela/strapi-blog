import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import ArticlesComponent from "../components/articles"
import "../assets/css/main.css"
//import fontawesome from "@fortawesome/react-fontawesome"
// import { config } from '@fortawesome/free-brands-svg-icons'

import {
  faTwitter,
  faGithubAlt,
  faInstagram,
  faDev,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css"
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false /* eslint-disable import/first */

// config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          strapiHomepage {
            Hero {
              HeroText
            }
          }
          allStrapiArticle(filter: { status: { eq: "published" } }) {
            edges {
              node {
                strapiId
                slug
                title
                publishedAt(formatString: "MMMM Do, YYYY")
                category {
                  name
                }
                image {
                  childImageSharp {
                    fixed(width: 800, height: 500) {
                      src
                    }
                  }
                }
                user {
                  username
                  image {
                    childImageSharp {
                      fixed(width: 30, height: 30) {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>{data.strapiHomepage.Hero.HeroText}</h1>

            <h2 className="tagline">Front-End Developer</h2>
            <div className="social">
              <a
                className="socialIcons"
                href="https://instagram.com/anaveecodes"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                className="socialIcons"
                href="https://twitter.com/anaveecodes"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>

              <a
                className="socialIcons"
                href="https://github.com/ana-vela"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithubAlt} />
              </a>
              <a
                className="socialIcons"
                href="https://dev.to/anaveecodes"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faDev} />
              </a>
            </div>
            <ArticlesComponent articles={data.allStrapiArticle.edges} />
          </div>
        </div>
      )}
    />
  </Layout>
)

export default IndexPage
