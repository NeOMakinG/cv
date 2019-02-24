import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import {Layout} from "../components/"
import SEO from "../components/seo";

const cpName = "allEtudes";

const Etudes = () => (
  <Layout>
    <SEO title="Etudes" />
    
    <h1>Études</h1>

    <StaticQuery
        query={graphql`
            query {
                allEtudesJson {
                    edges {
                        node {
                            title,
                            date
                        }
                    }
                }
            }
        `}

        render={data => (
            <div className="etudeContainer">
                <ul className={cpName}>
                    {data.allEtudesJson.edges.map((e, key) => {
                        var options = {year: 'numeric'};
                        let date = new Date(e.node.date);

                        return (
                            <li key={'etude' + key} className={cpName + "-item"}>
                                <div className={cpName + "-right"}>
                                    <h4 className={cpName + "-title"}>{e.node.title}</h4>
                                </div>

                                <div className={cpName + "-date"}>
                                    {e.node.date ? 
                                        <span className={cpName + "-date"}>{date.toLocaleDateString("fr-FR", options)}</span>
                                    :
                                    ''}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )}
    />

    
    <Link to="/">Retour</Link>
  </Layout>
)

export default Etudes
