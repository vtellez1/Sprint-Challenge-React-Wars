import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
      <img src="http://loodibee.com/wp-content/uploads/Star-Wars-transparent-logo.png" width="6%" alt="StarWars Logo"/>
        <NavbarBrand href="/">Characters</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://www.starwars.com/">About StarWars</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.starwars.com/news">StarWars News</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Films
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                    <NavLink href="https://www.starwars.com/films/star-wars-episode-ix-the-rise-of-skywalker">THE RISE OF SKYWALKER</NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink href="https://www.starwars.com/films/solo">SOLO</NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink href="https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi">THE LAST JEDI</NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink href="https://www.starwars.com/films/star-wars-episode-vii-the-force-awakens">THE FORCE AWAKENS</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;