import React from "react";
import styled from "styled-components";

const FooterGroup = styled.div`
  background: #f1f3f5;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
`;
const Text = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`;
const Button = styled.button`
  background: linear-gradient(102.24deg, #9b51e0 0%, #3436e7 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  color: white;
  border: none;
  padding: 16px 60px;
  font-size: 24px;
  font-weight: 600;
  justify-self: center;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
  }
`;
const LinkGroup = styled.div`
  width: 500px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  a {
    transition: 0.8s;
  }
  a:hover {
    color: black;
  }
`;
const Copyright = styled.div`
  color: #486791;
  font-size: 14px;
  margin: 0 auto;
  max-width: 500px;
  padding: 0 20px;
  text-align: center;
`;

const Footer = ({ data, children }) => {
  return (
    <FooterGroup>
      <Text>
        Tweet "Prototype and build apps with React and Swift. New courses by
        @MengTo"
      </Text>
      <Button>Tweet</Button>
      <LinkGroup>
        {data.allContentfulLink.edges.map(e => (
          <a href={e.node.url}>{e.node.title}</a>
        ))}
      </LinkGroup>
      <Copyright>{children}</Copyright>
    </FooterGroup>
  );
};

export default Footer;
