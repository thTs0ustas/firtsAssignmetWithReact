import React from "react";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarText,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown,
} from "reactstrap";
import "./header.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Header.propTypes = {
  logImg: PropTypes.string.isRequired,
};
export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-header">
      <Navbar expand="md" light>
        <Link className="navbar-brand" to="/">
          <img className="logo img-fluid" src="../../assets/stumbleupon.png" alt="" />
        </Link>
        <NavbarToggler className="nv-header me-2" onClick={() => setIsOpen(!isOpen)} />
        <Collapse navbar isOpen={isOpen}>
          <Nav className="me-auto align-items-md-center custom-nav" navbar>
            <NavItem>
              <Link className={"nav-link"} to="/trainersRegistration">
                Trainers
              </Link>
            </NavItem>
            <NavItem>
              <Link className={"nav-link"} to="/">
                Students
              </Link>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Resources
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <Link className={"nav-link"} to={"/"}>
                    Trainers
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className={"nav-link"} to={"/"}>
                    Students
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className={"nav-link"} to={"/"}>
                    Courses
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className={"nav-link"} to={"/"}>
                    Assignments
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link className={"nav-link"} to={"/"}>
                Contact
              </Link>
            </NavItem>
          </Nav>

          <NavbarText>
            <span className="nv-header">Private School</span>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
