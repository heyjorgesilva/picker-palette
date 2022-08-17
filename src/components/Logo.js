import React from "react";
import styled from "styled-components";

import Link from "./Link";
import LogoIcon from "./LogoIcon";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* position: fixed;
  padding: 2rem;
  top: 0;
  left: 0; */

  & > *:first-child {
    margin-right: 1rem;
  }

  & > p {
    font-weight: bold;
  }
`;

const Logo = () => (
  <Link to="/">
    <Container>

    </Container>
  </Link>
);

export default Logo;
