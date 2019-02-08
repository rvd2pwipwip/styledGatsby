import React, { Component } from "react";
import { Link } from "gatsby";
import styled, { keyframes } from "styled-components";
import Layout from "../components/layout";
// import heroImage from "../images/wallpaper3.jpg";
import devices from "../helpers/devices";
import { getCourses } from "../helpers/courses";
// import Image from "../components/image";
import SEO from "../components/seo";
import Card from "../components/Card";

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

const Logos = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 40px;
  margin: 100px 0;
  justify-items: center;
  @media ${devices.mobileS} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const HeroSVG = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Cards = styled.div``;

const CardsSummary = styled.h2`
  margin: 50px 20px;
  font-size: 48px;
  text-align: center;
  font-weight: 700;
  background: linear-gradient(104deg, #050a27 0%, #4a548c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media ${devices.tablet} {
    font-size: 32px;
  }
`;

const CardGroup = styled.div`
  display: grid;
  margin: 50px 40px 100px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  justify-items: center;
  @media ${devices.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devices.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

class IndexPage extends Component {
  state = { courses: [] };

  componentDidMount() {
    this.setState({ courses: getCourses() });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Hero>
          <HeroGroup>
            <HeroTitle>
              Learn to <br /> design and code React apps
            </HeroTitle>
            <HeroText>
              Complete courses about the best tools and design systems.
              Prototype and build apps with React and Swift.
            </HeroText>
            {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
          </div> */}
            <StyledLink to="/page-2/">Watch the video</StyledLink>
            <Logos>
              <img
                src={require("../images/logo-sketch.png")}
                width="50"
                alt="Sketch"
              />
              <img
                src={require("../images/logo-figma.png")}
                width="50"
                alt="Figma"
              />
              <img
                src={require("../images/logo-studio.png")}
                width="50"
                alt="Studio"
              />
              <img
                src={require("../images/logo-framer.png")}
                width="50"
                alt="Framer"
              />
              <img
                src={require("../images/logo-react.png")}
                width="50"
                alt="React"
              />
              <img
                src={require("../images/logo-swift.png")}
                width="50"
                alt="Swift"
              />
            </Logos>
            <HeroSVG
              width="100%"
              height="172"
              // viewBox="0 0 2560 172"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="white">
                <animate
                  repeatCount="indefinite"
                  fill="freeze"
                  attributeName="d"
                  dur="10s"
                  values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
              M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;
              M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
              M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"
                />
              </path>
            </HeroSVG>
          </HeroGroup>
        </Hero>
        <Cards>
          <CardsSummary>11 courses, more coming</CardsSummary>
          <CardGroup>
            {this.state.courses.map(c => (
              <Card
                key={c.title}
                title={c.title}
                text={c.text}
                image={require(`../images/${c.image}`)}
              />
            ))}
          </CardGroup>
        </Cards>
      </Layout>
    );
  }
}

export default IndexPage;
