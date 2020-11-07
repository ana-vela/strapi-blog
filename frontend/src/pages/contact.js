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
      <div className="contactPage" style={{justifyContent: 'left', paddingBottom: '40px'}}>
        <h1>Contact Me</h1>

        <img className="contactPhoto" src={ContactPhoto} alt="contact me" />
        <br />
        <p style={{ fontSize: "20px" }}>
          Want to get in touch? Fill out this form and I will reply as
          soon as possible. Thanks!{" "}
        </p>
        <form 
        
          className="contactForm"
          action={`${process.env.GATSBY_GETFORM_API}`}
          method="POST"
          
        >
          <label htmlFor="email">Email</label>
          <br />
          <input
            placeholder="Email Address"
            style={{
              color: "black",
              height: "40px",
              width: "330px",
              paddingLeft: "20px",
            }}
            type="email"
            name="email"
            required
          />
          <br />
          <br />
          <label htmlFor="name">Name</label>
          <br />
          <input
            placeholder="Name"
            style={{
              color: "black",
              height: "40px",
              width: "330px",
              paddingLeft: "20px",
            }}
            type="text"
            name="name"
            required
          />

          <br />
          <br />
          <label htmlFor="message">Message</label>
          <br />
          <input
            style={{
              color: "black",
              height: "200px",
              width: "330px",
              paddingBottom: "100px",
              // paddingTop: "20px",
              paddingLeft: "20px"
            }}
            type="text"
            name="message"
            placeholder="Type your message here"
            required
          />

          <br />
          <br />
          <div
            className="g-recaptcha"
            data-sitekey={`${process.env.GATSBY_RECAPTCHA_API}`}></div>
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
