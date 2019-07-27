import React from "react"
import { Layout, Experiences, Etudes, Hobbies, Competences } from "../components/"
import SEO from "../components/seo"
import './home.scss';

const IndexPage = () => (
  <Layout hideMenu={true}>
    <SEO title="Accueil" keywords={[`gatsby`, `application`, `react`]} />

    <h2>
      Parcours
    </h2>
    <div className="home-content">
      <Etudes />
      <Experiences />

    </div>
    <Competences />
  </Layout>
)

export default IndexPage