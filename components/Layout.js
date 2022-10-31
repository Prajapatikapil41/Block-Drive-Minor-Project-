import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap'


const layoutStyle = {};
const headerStyle = {};

const contentStyle = {
};

const Layout = props => (
  <div className="Layout" style={layoutStyle}>
    <header>
    <Navbar className="Header" >
        <Container className="d-flex justify-content-between px-3">
            <a href="#" className="navbar-brand d-flex align-items-center py-2">Login UI</a>
        </Container>
    </Navbar>
    </header>
    <Container className="Content container" style={contentStyle}>
      {props.children}
    </Container>
   
  </div>
);

export default Layout;