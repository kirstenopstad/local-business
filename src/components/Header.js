import React from "react";
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return(
    <React.Fragment>
      <div className="header">
        <h1>Stumptown <span className="sub-heading">Coffee Roasters</span></h1>
        <Nav className="navigation">
          <Nav.Item>
            <Nav.Link href="#">Coffee</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Coldbrew</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Gear</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
  </React.Fragment>
  );
};

export default Header;