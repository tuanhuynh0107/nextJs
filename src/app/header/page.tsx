'use client'
import { Container, Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';

function Header() {
    return (
        <Navbar expand="sm" className="shadow fixed-top nav__header">
            <Container>
                <Navbar.Brand href="#">
                    <img src="http://localhost:3000/images/avatar-1712023438940-805202262-logo_tto.png" alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="mynavbar" />
                <Navbar.Collapse id="mynavbar">
                    <Nav className="me-auto gap-2-5">
                        <NavDropdown title="Mos" id="mos-dropdown">
                            <NavDropdown.Item href="#">Microsoft Office Word</NavDropdown.Item>
                            <NavDropdown.Item href="#">Microsoft Office Excel</NavDropdown.Item>
                            <NavDropdown.Item href="#">Microsoft Office PowerPoint</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Skill development" id="skill-development-dropdown">
                            <NavDropdown.Item href="#">HTML CSS</NavDropdown.Item>
                            <NavDropdown.Item href="#">Java</NavDropdown.Item>
                            <NavDropdown.Item href="#">React JS</NavDropdown.Item>
                            <NavDropdown.Item href="#">UI/UX Design Web Basic</NavDropdown.Item>
                            <NavDropdown.Item href="#">JavaScript</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">Blog</Nav.Link>
                    </Nav>
                    <Form className="d-md-flex form-search">
                        <Form.Control
                            type="text"
                            placeholder="Search here"
                            className="me-2 k d-sm-block input__search z-1"
                        />
                        <Button variant="primary" className="form__btn--main btn__login">
                            Login
                        </Button>
                        <Button variant="primary" className="form__btn--main d-sm-block">
                            Register
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
