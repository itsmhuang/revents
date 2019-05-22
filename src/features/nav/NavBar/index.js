import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import logoPath from 'public/assets/logo.png';

function NavBar(props) {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src={logoPath} alt="logo" />
          Re-vents
        </Menu.Item>
        <Menu.Item name="Events" />
        <Menu.Item>
          <Button floated="right" positive inverted content="create Event" />
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic inverted content="Login" />
          <Button
            basic
            inverted
            content="Sign Out"
            style={{ marginLeft: "0.5em" }}
          />
        </Menu.Item>
        <Menu.Item />
      </Container>
    </Menu>
  );
}

export default NavBar;
