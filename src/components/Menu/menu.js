import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";
import "./menu.scss";

const Menu = () => (
    <nav>
        <ul>
            <li>
                <Link to="/experiences/">Expériences</Link>
            </li>

            <li>
                <Link to="/etudes/">Études</Link>
            </li>

            <li>
                <a href="http://szczupak.fr/vcard/" target="_blank">Ancien CV</a>
            </li>

            <li>
                <a href="http://book.szczupak.fr/" target="_blank">TPE BTS</a>
            </li>
        </ul>
    </nav>
)

export default Menu