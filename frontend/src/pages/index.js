import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import ArticlesComponent from "../components/articles"
import "../assets/css/main.css"
import {
  faTwitter,
  faGithubAlt,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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

            <h2 className="tagline">Writer & Front-End Developer</h2>

            <a className="socialIcons" href="https://instagram.com/anaveecodes">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="socialIcons" href="https://twitter.com/anaveecodes">
              <FontAwesomeIcon icon={faTwitter} />
            </a>

            <a className="socialIcons" href="https://github.com/ana-vela">
              <FontAwesomeIcon icon={faGithubAlt} />
            </a>

            <ArticlesComponent articles={data.allStrapiArticle.edges} />
          </div>
        </div>
      )}
    />
  </Layout>
)

export default IndexPage
