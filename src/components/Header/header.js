import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";
import "./header.scss";
import { SocialIcon } from 'react-social-icons';

import {Menu, Image} from "../";

let birthday = new Date('August 17, 1995 12:00:00');
let ageDifMs = Date.now() - birthday.getTime();
let ageDate = new Date(ageDifMs); 
let age = Math.abs(ageDate.getUTCFullYear() - 1970);

const Header = (props) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1000,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div className="header-left">
        <Image />
      </div>

      <div className="header-right">
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {props.siteTitle}
          </Link>
        </h1>

        <p>Développeur Javascript</p>
        <p>{age} ans</p>
        <p><a href="mailto:valentin.szczupak@gmail.com">valentin.szczupak@gmail.com</a></p>
        <p>Permis B/A2</p>
        {props.hideMenu ? 
        <p><a href="http://szczupak.fr/" target="_blank">szczupak.fr</a></p>
        : 
            <React.Fragment>
              <div className="socialIcons">
                <SocialIcon url="https://github.com/NeOMakinG" fgColor="white" target="_blank" bgColor="transparent" style={{ height: 45, width: 45 }}/>
                <SocialIcon url="https://www.linkedin.com/in/valentin-szczupak-0280aba1/" target="_blank" fgColor="white" bgColor="transparent" style={{ height: 45, width: 45 }}/>
                <SocialIcon url="https://twitter.com/ValentinSZK" fgColor="white" target="_blank" bgColor="transparent" style={{ height: 45, width: 45 }}/>
                <SocialIcon url="https://www.facebook.com/NeomakingVSK/" fgColor="white" target="_blank" bgColor="transparent" style={{ height: 45, width: 45 }}/>
              </div>
            </React.Fragment>
        }
      </div>
    </div>

    {props.hideMenu ? null
    : 
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <a href="http://szczupak.fr/cv" target="_blank">Télécharger en PDF</a>

      <Menu />
    </div>
    }
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header