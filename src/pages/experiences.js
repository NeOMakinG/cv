import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import {Layout} from "../components/"
import SEO from "../components/seo";

const cpName = "allExperiences";

const Experiences = () => (
  <Layout>
    <SEO title="Expériences" />

    <h1>Expériences</h1>
    <StaticQuery
        query={graphql`
            query {
                allExperiencesJson {
                    edges {
                        node {
                            title,
                            shortDescription,
                            content,
                            dateBegin,
                            dateEnd
                        }
                    }
                }
            }
        `}

        render={data => (
            <div className={cpName + "-container"}>
                <ul className={cpName}>
                    {data.allExperiencesJson.edges.map((e) => {
                        var options = {year: 'numeric', month: 'long', day: 'numeric'};
                        let dateBegin = new Date(e.node.dateBegin);
                        let dateEnd = e.node.dateEnd ? new Date(e.node.dateEnd) : false;

                        return (
                            <li className={cpName + "-item"}>
                                <h4 className={cpName + "-title"}>{e.node.title}</h4>
                                <div className={cpName + "-date"}>
                                    {e.node.dateEnd ? 
                                        <React.Fragment>
                                            <span className={cpName + "-dateBegin"}>Du {dateBegin.toLocaleDateString("fr-FR", options)}</span> au <span className={cpName + "-dateEnd"}>{dateEnd.toLocaleDateString("fr-FR", options)}</span>  
                                        </React.Fragment> 
                                    :
                                        <span className={cpName + "-dateBegin"}>Du {dateBegin.toLocaleDateString("fr-FR", options)} à Aujourd'hui</span>
                                    }
                                </div>
                                <div className={cpName + "-right"}>
                                    <p className={cpName + "-description"}>{e.node.shortDescription}</p> 
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

export default Experiences
