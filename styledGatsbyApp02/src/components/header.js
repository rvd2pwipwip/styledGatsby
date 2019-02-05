import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import devices from "../helpers/devices";

const NavBar = styled.div`
  position: fixed;
  width: 100%;
  padding: 50px 0;
  z-index: 100;
  @media ${devices.mobileS} {
    padding: 15px 0;
  }
`;

// .NavBar a:nth-child(4) {
//   display: none;
// }

const NavBarGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;
  justify-items: center;
  @media ${devices.mobileS} {
    grid-template-columns: repeat(4, auto);
  }
`;

const NavBarLink = styled(Link)`
  color: white;
  font-weight: 700;
`;

const NavBarButton = styled.button`
  padding: 8px 20px;
  font-size: 20px;
  background: #56ccf2;
  border: none;
  font-weight: 700;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`;

const Header = ({ siteTitle }) => (
  <NavBar>
    <NavBarGroup>
      <NavBarLink to="/">
        <img
          src={require("../images/logo-designcode.svg")}
          alt="Home"
          width="30"
        />
      </NavBarLink>
      <NavBarLink to="/courses">Courses</NavBarLink>
      <NavBarLink to="/downloads">Downloads</NavBarLink>
      <NavBarLink to="/workshops">Workshops</NavBarLink>
      <NavBarLink to="/buy">
        <NavBarButton>Buy</NavBarButton>
      </NavBarLink>
    </NavBarGroup>
  </NavBar>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
