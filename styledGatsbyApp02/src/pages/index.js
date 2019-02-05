import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
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
    padding: 100px 20px;
  }
`;

const HeroTitle = styled.h1`
  margin: 0;
  color: white;
  font-size: 60px;
  line-height: 1.2;
  @media ${devices.mobileL} {
    font-size: 40px;
  }
  @media ${devices.mobileS} {
    font-size: 36px;
  }
`;

const HeroText = styled.p`
  font-size: 28px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  @media ${devices.mobileL} {
    font-size: 22px;
  }
  @media ${devices.mobileS} {
    font-size: 18px;
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
