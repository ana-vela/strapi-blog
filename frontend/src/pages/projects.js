import React from "react"
import Layout from "../components/layout"
import RecipeApp from "./images/my-recipe-finder.jpg"
import Translr from "./images/translate-app.jpg"
import Blog from "./images/blog.jpg"

const projects = () => {
  return (
    <Layout>
      <div className="projectsPage" style={{ padding: "40px" }}>
        <h1>My Projects</h1>
        <div className="cards">
          <div className="card">
            <h2>Blog</h2>
            <img alt="projects" src={Blog} />
          </div>
          <div className="card">
            <h2>Recipe Finder</h2>
            <img
              alt="projects"
              src={RecipeApp}
              style={{ height: "320px;", width: "300px" }}
            />
          </div>
          <div className="card">
            <h2>Translation App</h2>
            <img alt="projects" src={Translr} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default projects
