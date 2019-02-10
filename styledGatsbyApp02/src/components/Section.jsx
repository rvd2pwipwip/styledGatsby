import React from "react";
import styled from "styled-components";
import Wave from "./Wave";
import devices from "./../helpers/devices";

const SectionGroup = styled.div`
  background: url(${props => props.image});
  height: 720px;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;
  @media ${devices.tablet} {
    height: 820px;
  }
`;

const SectionLogo = styled.img`
  align-self: end;
  width: 128px;
  margin: 0 auto;
`;

const SectionTitleGroup = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  max-width: 1024px;
  margin: 0 auto;
  grid-gap: 20px;
  grid-template-rows: auto 100%;
  @media ${devices.laptop} {
    margin: 0 50px;
  }
  @media ${devices.tablet} {
    grid-template-columns: 1fr;
  }
`;

const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;
  @media ${devices.tablet} {
    font-size: 40px;
  }
`;

const SectionText = styled.p`
  color: white;
`;

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
`;

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`;

const Section = props => {
  return (
    <SectionGroup image={props.image}>
      <WaveTop>
        <Wave />
      </WaveTop>
      <WaveBottom>
        <Wave />
      </WaveBottom>
      <SectionLogo src={props.logo} />
      <SectionTitleGroup>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionText>{props.text}</SectionText>
      </SectionTitleGroup>
    </SectionGroup>
  );
};

export default Section;
