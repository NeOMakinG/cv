import React from "react";
import { StaticQuery, graphql } from "gatsby";
import './experiences.scss';
import { Link } from "gatsby"

const cpName = "experiences"

const ExperiencesComponent = ({data}) => (

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
                    {data.allExperiencesJson.edges.map((e, key) => {
                        var options = {year: 'numeric', month: 'long', day: 'numeric'};
                        let dateBegin = new Date(e.node.dateBegin);
                        let dateEnd = e.node.dateEnd ? new Date(e.node.dateEnd) : false;

                        return (
                            <li key={"experience" + key} className={cpName + "-item"}>
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
)

export default ExperiencesComponent