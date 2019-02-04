import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import heroImage from "../images/wallpaper3.jpg";
// import Image from "../components/image";
import SEO from "../components/seo";

const Hero = styled.div`
  height: 920px;
  background: url(${heroImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    {/* <div className="Hero"> */}
    <Hero>
      <div className="HeroGroup">
        <h1>Learn to design and code React apps</h1>
        <p>
          Complete courses about the best tools and design systems. Prototype
          and build apps with React and Swift.
        </p>
        {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
        </div> */}
        <Link to="/page-2/">Watch the video</Link>
      </div>
    </Hero>
    {/* </div> */}
  </Layout>
);

export default IndexPage;
