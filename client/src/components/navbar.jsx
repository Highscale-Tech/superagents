import {
  ChartDonut,
  CrosshairSimple,
  Gauge,
  UsersFour,
} from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <img src="/logo.png" alt="" />
      <Menu>
        <MenuItem to="/explore">
          <UsersFour weight="duotone" size={28} />
          Build your Team
        </MenuItem>
        <MenuItem to="/init">
          <CrosshairSimple weight="duotone" size={28} />
          Initialize The Project
        </MenuItem>
        <MenuItem to="/dashboard">
          <Gauge weight="duotone" size={28} />
          Dashboard
        </MenuItem>
        <MenuItem to="/log">
          <ChartDonut weight="duotone" size={28} />
          Log
        </MenuItem>
      </Menu>
    </Container>
  );
};

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  font-size: larger;
  gap: 16px;
`;
const MenuItem = styled(NavLink)`
  display: flex;
  gap: 5px;
  align-items: center;
  color: #d4d4d4;
  padding: 6px 4px;
  border-radius: 6px;
  text-decoration: none;
  transition-property: color, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:hover {
    color: #f0f9ff;
    background-color: #262626;
  }
`;
const Container = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 20px;
  min-height: 80vh;
  font-weight: 700;
  gap: 20px;
  min-width: 15rem;
`;
export default Navbar;
