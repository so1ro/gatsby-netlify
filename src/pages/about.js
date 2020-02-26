import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="About" />
      <div>
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          ullam laboriosam iste neque, eveniet, officia optio cupiditate beatae
          expedita hic dolore. Omnis laboriosam possimus quisquam, nihil
          doloribus molestias maiores corrupti?
        </p>
      </div>
    </Layout>
  )
}

export default About
