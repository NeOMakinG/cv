import React from "react";
import { StaticQuery, graphql } from "gatsby";
import './competences.scss';

const cpName = "competences";

const Competences = ({ data }) => (
    <React.Fragment>
        <h2>
            Compétences
        </h2>

        <ul className={cpName + "-list"}>
            <li className={cpName + "-item"}>
                <p className={cpName + "-title"}>
                    Langages et technologies préférés
                </p>

                <p className={cpName + "-value"}>
                    JavaScript, React, Node, HTML, CSS, GraphQL, CI/CD, Git
                </p>
            </li>

            <li className={cpName + "-item"}>
                <p className={cpName + "-title"}>
                    Connaissances
                </p>

                <p className={cpName + "-value"}>
                    Gatsby, Strapi, Prisma, Apollo, Styled-components, SASS, Bonnes pratiques, design patterns...
                </p>
            </li>

            <li className={cpName + "-item"}>
                <p className={cpName + "-title"}>
                    Anglais
                </p>

                <p className={cpName + "-value"}>
                    725 au TOEIC. Capable de comprendre et d’échanger facilement.
                </p>
            </li>
        </ul>
    </React.Fragment>
)

export default Competences