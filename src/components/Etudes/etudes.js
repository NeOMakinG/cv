import React from "react";
import { StaticQuery, graphql } from "gatsby";
import './etudes.scss';
import { Link } from "gatsby"

const cpName = "etudes"

const EtudesComponent = ({data}) => (
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
)

export default EtudesComponent