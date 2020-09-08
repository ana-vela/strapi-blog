import React from "react"

import Layout from "../components/layout"

import ContactPhoto from "./images/contact-me-photo.jpg"

const Contact = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>

      <img src={ContactPhoto} alt="contact me" style={{ height: "400px" }} />
      <form action={`${process.env.GATSBY_GETFORM_API}`} method="POST">
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" name="email" required />
        <br />
        <br />
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" name="name" required />

        <br />
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <input type="text" name="message" required />

        <br />
        <br />
        <button type="submit">Send</button>
      </form>
    </Layout>
  )
}

export default Contact
