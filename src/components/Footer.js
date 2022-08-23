import React from "react";
import styled from "styled-components";
import { Tooltip } from "@material-ui/core";

const Container = styled.div`
  max-width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.neutrals[100]};

  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
`;

const Sup = styled.sup`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.neutrals[500]};
`;

const Anchor = styled.a`
  color: ${props => props.color};
  font-weight: bold;
  &:focus {
    outline-color: ${props => props.color};
  }
`;

const Footer = ({ color }) => {
  return (
    <Container>
      <Sup>
      {" "}Get in touch:{" "}
        <Tooltip title="Conectar no Linkedin" placement="top">
          <Anchor href="https://www.linkedin.com/in/ojorgesilva" target="_blank" color={color}>
          Linkedin
          </Anchor>
        </Tooltip>
        {" "}|{" "}
        <Tooltip title="Ler artigos" placement="top">  
          <Anchor href="https://artigos.jorgesilva.design"  target="_blank" color={color}>
          Medium
          </Anchor>
        </Tooltip>
        {" "}|{" "}
        <Tooltip title="Ver Shots no Dribbble" placement="top">
          <Anchor href="https://dribbble.com/ojorgesilva"  target="_blank" color={color}>
          Dribbble
          </Anchor>                
        </Tooltip>
        {" "}|{" "}
        <Tooltip title="Ver Projetos no Behance" placement="top">
          <Anchor href="https://www.behance.net/ojorgesilva"  target="_blank" color={color}>
          Behance
          </Anchor>                
        </Tooltip>
      </Sup>
    </Container>
  );
};

export default Footer;
