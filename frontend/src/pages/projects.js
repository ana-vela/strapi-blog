import React from "react"
import Layout from "../components/layout"
import Placeholder from "./images/project-placeholder.jpg"

const projects = () => {
  return (
    <Layout>
    <div className="projectsPage"
    style={{  padding: "40px" }}>
      <h1>My Projects</h1>
      <div className="cards">
        <div className="card">
          Project 1<h2 style={{color: "red;"}}>Blog</h2>
          <img alt="projects" src={Placeholder} />
        </div>
        <div className="card">
          Project 2<h2>Recipe Finder</h2>
          <img alt="projects" src={Placeholder} />

        </div>
        <div className="card">
          Project 3<h2>Translation App</h2>
          <img alt="projects" src={Placeholder} />

        </div>
      </div>
      </div>
    </Layout>
  )
}

export default projects
