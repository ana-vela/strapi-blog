import React from "react"
import Layout from "../components/layout"
import RecipeApp from "./images/my-recipe-finder.jpg"
import Translr from "./images/translate-app.jpg"
import Blog from "./images/blog.jpg"

const Projects = () => {
  return (
    <Layout>
      <div className="projectsPage">
        <h1>My Projects</h1>
        <div className="cards">
          <div className="card">
            <h2>Blog</h2>
            <img alt="projects" src={Blog} />
            <h3>A React app built with Gatsby and Strapi CMS</h3>
            <div className="cardButtons">
              <a href="https://github.com/ana-vela/strapi-blog">Source Code</a>
              <a href="/">Visit Site</a>
            </div>
          </div>
          <div className="card">
            <h2>Recipe Finder</h2>
            <img alt="projects" src={RecipeApp} />
            <h3>A React app using the Edamam recipe search API</h3>
            <div className="cardButtons">
              <a href="https://github.com/ana-vela/recipe-app">Source Code</a>
              <a href="https://my-recipe-finder.netlify.app/">Visit Site</a>
            </div>
          </div>
          <div className="card">
            <h2>Translation App</h2>
            <img alt="projects" src={Translr} />
            <h3>A React app built with React Bootstrap, the Collins Dictionary API, and the Context API</h3>
            <div className="cardButtons">
              <a href="https://github.com/ana-vela/translator-app">
                Source Code
              </a>
              <a href="https://translr.netlify.app/">Visit Site</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Projects
