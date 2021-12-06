import React from "react";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown,
} from "reactstrap";
import "./header.css";
import { Link } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-header">
      <Navbar className="" expand="md" dark>
        <Link className="navbar-brand logo" to="/" />
        <NavbarToggler className="nv-header me-2" onClick={() => setIsOpen(!isOpen)} />
        <Collapse navbar isOpen={isOpen}>
          <Nav className="me-auto align-items-md-center custom-nav" navbar>
            <NavItem>
              <Link className={"nav-link"} to="/trainersRegistration">
                Trainers
              </Link>
            </NavItem>
            <NavItem>
              <Link className={"nav-link"} to="/studentsRegistrations">
                Students
              </Link>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Resources
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <Link
                    className={"nav-link"}
                    style={{ color: "#1d1010" }}
                    to={"/trainers"}
                  >
                    Trainers
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className={"nav-link"} style={{ color: "#1d1010" }} to={"/"}>
                    Students
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className={"nav-link"} style={{ color: "#1d1010" }} to={"/"}>
                    Courses
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className={"nav-link"} style={{ color: "#1d1010" }} to={"/"}>
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
        </Collapse>
      </Navbar>
    </div>
  );
}
