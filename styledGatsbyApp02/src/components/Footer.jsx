import React from "react";
import styled from "styled-components";

const Footer = ({ data }) => {
  return (
    <div>
      {data.allContentfulLink.edges.map(e => (
        <a href={e.node.url}>{e.node.title}</a>
      ))}
    </div>
  );
};

export default Footer;
