import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const Nav = () => (
  <StaticQuery
    query={graphql`
      query {
        strapiHomepage {
          Nav {
            navText
          }
        }
        allStrapiCategory {
          edges {
            node {
              slug
              name
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <div>
          <nav className="uk-navbar-container" data-uk-navbar>
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li>
                  <Link id="navHome" to="/">
                    {data.strapiHomepage.Nav.navText}
                  </Link>
                </li>
              </ul>
              <div className="nav-menu">
                <ul>
                  <li>
                    <Link to={`/contact`}>Contact </Link>
                  </li>
                  <li>
                    <Link to={`/article/about-me`}>About Me </Link>
                  </li>
                  <li>
                  <Link to={`/projects`}>Projects </Link>
                </li>
                  <li>
                    <Link to={`/category/posts`}>Blog Posts </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="uk-navbar-right">
              <button
                className="uk-button uk-button-default uk-margin-right"
                type="button"
              >
                &#9776;
              </button>
              <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
                <ul className="uk-nav uk-dropdown-nav">
                  {data.allStrapiCategory.edges.map((category, i) => {
                    return (
                      <li key={`category__${category.node.slug}`}>
                        <Link to={`/category/${category.node.slug}`}>
                          {category.node.name}
                        </Link>
                      </li>
                    )
                  })}
                  <li>
                    <Link to={`/article/about-me`}>About Me</Link>

                    <Link to={`/contact`}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )}
  />
)

export default Nav
