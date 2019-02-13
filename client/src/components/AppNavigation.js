import React from "react";
import { withRR4, Nav as BaseNav } from "react-sidenav";
import styled from "styled-components";
import '../App.css';
import { Icon as BaseIcon } from "react-icons-kit";
import { dashboard } from "react-icons-kit/fa/dashboard";
import Asic from "@material-ui/icons/Memory";
import { cubes } from "react-icons-kit/fa/cubes";

const IconCnt = styled.div`
  color: #FFF;
  display: flex;
  justify-content: center;
  aligh-items: center;
`;

const styles = {

  largeIcon: {
    width: 200,
    height: 200,
  },

};

const Nav = styled(BaseNav)`
  flex-direction: column;
`;

const theme = {
  selectionColor: "#FFF",
  hoverBgColor: "#181b20",
  selectionBgColor: "#00BCD4"
};

const Text = styled.div`
  font-size: 0.72em;
  text-transform: uppercase;
`;
const SideNav = withRR4();

const Icon = props => <BaseIcon size={32} icon={props.icon} />;


export class AppNavigation extends React.Component {
  render() {
    return (
      <SideNav theme={theme} defaultSelectedPath={"dashboard"}>
        <Nav id="dashboard">
        <IconCnt>
          <Icon icon={dashboard} />
        </IconCnt>
        <Text>Dashboard</Text>
        </Nav>
        <Nav id="nodes">
              <IconCnt>
                <Icon icon={cubes} />
              </IconCnt>
              <Text>Nodes</Text>
            </Nav>
        <Nav id="miners">
              <IconCnt>
                <Asic fontSize='large' />
              </IconCnt>
              <Text>Miners</Text>
            </Nav>
      </SideNav>
    );
  }
}
