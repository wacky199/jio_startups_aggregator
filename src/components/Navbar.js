import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'

export default function NavBarComponent() {
  return (
    <Navbar expand="md" style={{ backgroundColor: "#F6D2FA", marginBottom: 4, paddingLeft: 25, fontWeight: "bold" }}>
      <Container fluid>
        <Navbar.Brand >Startups-Aggregator</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav.Link aria-current="page" role="button" href="/startup_news" style = {{color:"#414a4c"}}>StartupInfo</Nav.Link>
            <Nav.Link aria-current="page" role="button" href="/innovation" style = {{color:"#414a4c"}} >Innovation</Nav.Link>
            <Nav.Link aria-current="page" role="button" href="/news" style = {{color:"#414a4c"}}>News</Nav.Link>     
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
