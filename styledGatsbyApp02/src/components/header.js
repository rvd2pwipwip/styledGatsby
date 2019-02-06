import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import devices from "../helpers/devices";

//https://www.styled-components.com/docs/advanced#referring-to-other-components
const NavBar = styled.div`
  position: fixed;
  width: 100%;
  padding: 50px 0;
  z-index: 100;
  @media ${devices.mobileL} {
    padding: 15px 0;
    & a:nth-child(4) {
      display: none;
    }
  }
`;

const NavBarGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;
  justify-items: center;

  @media ${devices.mobileL} {
    grid-template-columns: repeat(4, auto);
    }
  }
`;

const NavBarLink = styled(Link)`
  color: white;
  font-weight: 700;
  @media ${devices.mobileS} {
    font-size: 14px;
    }
  }
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
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  & :hover {
    background: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
  }
  @media ${devices.mobileL} {
    font-size: 16px;
  }
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
