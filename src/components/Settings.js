import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import {
  FiSettings,
  FiThermometer,
  FiGift,
  FiInfo,
  FiEdit,
  FiHeart,
  FiLinkedin,
  FiFacebook,
  FiMessageCircle,
  FiShare2
} from "react-icons/fi";
import Popper from "@material-ui/core/Popper";

import ThemeSwitch from "./ThemeSwitch";
import { Tooltip } from "@material-ui/core";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* position: fixed;
  padding: 2rem;
  top: 0;
  right: 0; */

  & > * {
    margin-left: 2rem;
  }
`;

const Dropdown = styled.div`
  padding: 1rem;
  margin: 1rem;
  border-radius: ${props => props.theme.radius};
  background-color: ${props => props.theme.colors.primary[500]};
  color: ${props => props.theme.colors.primary[100]};

  & > div {
    margin-bottom: 1rem;
  }
  & > div:last-child {
    margin-bottom: 0;
  }

  & > a {
    color: ${props => props.theme.colors.primary[100]};
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: ${props => props.color};
  }
  & > * {
    margin-right: 0.5rem;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: ${props => props.color};
  }
  & > * {
    margin-right: 0.5rem;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

const facebook = () => {
  const url =
    "https://www.facebook.com/sharer/sharer.php?u=https://pickerpalette.jorgesilva.design";
  const win = window.open(url, "_blank", "width=640, height=480, left=640, top=200");
  win.focus();
};

const twitter = () => {
  const url =
    "https://bit.ly/twitter-pickerpalette";
  const win = window.open(url, "_blank", "width=640, height=480, left=640, top=200");
  win.focus();
};

const whatsapp = () => {
  const url =
    "https://bit.ly/whatsapp-pickerpalette";
  const win = window.open(url, "_blank", "width=640, height=480, left=640, top=200");
  win.focus();
};

const telegram = () => {
  const url =
    "https://telegram.me/share/url?url=https://pickerpalette.jorgesilva.design";
  const win = window.open(url, "_blank", "width=640, height=480, left=640, top=200");
  win.focus();
};

const linkedin = () => {
  const url =
    "https://www.linkedin.com/shareArticle?mini=true&url=https://pickerpalette.jorgesilva.design";
  const win = window.open(url, "_blank", "width=640, height=480, left=640, top=200");
  win.focus();
};

const Settings = ({ history, handleTheme, handleType, color }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <Wrapper>
      <ThemeSwitch onChange={handleTheme} />


      <Item>
      <FiShare2 onClick={handleClick} size={20} />
      <p>Compartilhe</p>
      </Item>

      <Item fill={color} color={color} onClick={linkedin}>
        <FiLinkedin/>
      </Item>

      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Dropdown>

          <Item fill={color} color={color} onClick={linkedin}>
            <p>LinkedIn</p>
            <FiLinkedin/>
          </Item>

          <Item fill={color} color={color} onClick={facebook}>
            <p>Facebook</p>
            <FiFacebook/>
          </Item>

          <Item fill={color} color={color} onClick={whatsapp}>
            <p>WhatsApp</p>
            <FiMessageCircle/>
          </Item>

          <Item fill={color} olor={color} onClick={() => (window.location.href = "https://www.buymeacoffee.com/dmraptis")}>
            <FiGift />
            <p>Link 03</p>
          </Item>

        </Dropdown>
      </Popper>

      <Tooltip title="Conectar no Linkedin" placement="bottom">
        <Social>
          <FiLinkedin size={20} onClick={linkedin} fill={color} color={color} />
        </Social>
      </Tooltip>
    </Wrapper>
  );
};

export default withRouter(Settings);