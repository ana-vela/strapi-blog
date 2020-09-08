import React from "react"

import Layout from "../components/layout"

import ContactPhoto from "./images/contact-me-photo.jpg"

import { Helmet } from "react-helmet"

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <script src="https://www.google.com/recaptcha/api.js"></script>
      </Helmet>
      <div className="contactPage">
        <h1>Contact Me</h1>

        <img className="contactPhoto" src={ContactPhoto} alt="contact me" />
        <form>
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
          <div
            className="g-recaptcha"
            data-sitekey={`${process.env.GATSBY_RECAPTCHA_API}`}
          ></div>
          <br />
          <br />
          <button
            className="bg-transparent hover:bg-black text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
            type="submit"
          >
            Send
          </button>
          <br />
        </form>
      </div>
    </Layout>
  )
}

export default Contact
