import "./menu.css"
import { Navbar, Container, Nav, } from "react-bootstrap"
import logo from "../../assets/logo.png"
import { FaCloudDownloadAlt } from "react-icons/fa";

function Menu() {
    return (
        <Navbar expand="lg" className="menu-bg">
            <Container>
                <Navbar.Brand className="nav_img" href="#home">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Service</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                    </Nav>
                    <div className="btn">
                        <a href="#"><FaCloudDownloadAlt className="icon_one" /> Download</a>
                    </div>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default Menu