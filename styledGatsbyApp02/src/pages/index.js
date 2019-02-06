import React from "react";
import { Link } from "gatsby";
import styled, { keyframes } from "styled-components";
import Layout from "../components/layout";
// import heroImage from "../images/wallpaper3.jpg";
import devices from "../helpers/devices";
// import Image from "../components/image";
import SEO from "../components/seo";

//https://github.com/facebook/create-react-app/issues/3238
//require instead of import
const Hero = styled.div`
  height: 920px;
  background: url(${require("../images/wallpaper3.jpg")});
  background-size: cover;
  background-position: center;
  position: relative;
`;

//https://jsramblings.com/2018/02/04/styled-components-media-queries.html
const HeroGroup = styled.div`
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  padding: 150px 50px;
  @media ${devices.mobileL} {
    padding: 80px 20px;
  }
`;

//https://www.styled-components.com/docs/basics#animations
const HeroAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroTitle = styled.h1`
  margin: 0;
  color: white;
  font-size: 60px;
  line-height: 1.2;
  opacity: 0;
  animation: ${HeroAnimation};
  animation-duration: 3s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  @media ${devices.mobileL} {
    font-size: 36px;
  }
  @media ${devices.mobileS} {
    font-size: 28px;
  }
`;

const HeroText = styled.p`
  font-size: 28px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  opacity: 0;
  animation: ${HeroAnimation} 3s 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  @media ${devices.mobileL} {
    font-size: 18px;
  }
  @media ${devices.mobileS} {
    font-size: 14px;
    margin: 10px 0 40px 0;
  }
`;

//https://stackoverflow.com/questions/49639031/styled-components-with-gatsby-link-anchor-tag-css-coloring
const StyledLink = styled(Link)`
  font-size: 17px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.7);
  padding: 9px 20px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  & :hover {
    background: white;
    color: black;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero>
      <HeroGroup>
        <HeroTitle>
          Learn to <br /> design and code React apps
        </HeroTitle>
        <HeroText>
          Complete courses about the best tools and design systems. Prototype
          and build apps with React and Swift.
        </HeroText>
        {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
        </div> */}
        <StyledLink to="/page-2/">Watch the video</StyledLink>
      </HeroGroup>
    </Hero>
  </Layout>
);

export default IndexPage;
