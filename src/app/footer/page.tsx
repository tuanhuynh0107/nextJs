'use client'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Link from 'next/link';
import fr from '@/app/styles/footer.module.css'

function Footer() {
    return (
        <footer className={fr['footer']}>
            <Row>
                <Col lg={1}></Col>
                <Col lg={10}>
                    <Row className={fr['fhead']}>
                        <Col lg={4}>
                            <h2 className={fr['fhead__title']}>Join our Course</h2>
                            <p className={fr['fhead__desc']}>For you to retrieve information to receive advice from us.</p>
                        </Col>
                        <Col lg={4}></Col>
                        <Col lg={4}>
                            <Form className="d-md-flex position-relative float-end">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your email"
                                    className="d-sm-block footer__search"
                                />
                                <Button type="button" className="btn__search--footer position-absolute">
                                    Subscribe
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Col>
                <Col lg={1}></Col>
            </Row>

            <Row>
                <Col lg={1}></Col>
                <Col lg={10}>
                    <Row className={fr['fbody']}>
                        <Col lg={3}>
                            <div className="fbody__logo">
                                <img src="http://localhost:3000/images/avatar-1712023438940-805202262-logo_tto.png" alt="Logo" />
                                <h2 className="fbody__title">tto.sh</h2>
                            </div>
                            <p className="fbody__desc">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
                            </p>
                        </Col>
                        <Col lg={9}>
                            <div className={fr['fbody__menu']}>
                                <ul className="menu__footer">
                                    <li><Link href="#!">MOS</Link></li>
                                    <li><Link href="#!">Word</Link></li>
                                    <li><Link href="#!">Excel</Link></li>
                                    <li><Link href="#!">PowerPoint</Link></li>
                                </ul>
                                <ul className="menu__footer">
                                    <li><Link href="#!">Skill development</Link></li>
                                    <li><Link href="#!">HTML CSS</Link></li>
                                    <li><Link href="#!">JavaScript</Link></li>
                                    <li><Link href="#!">Java</Link></li>
                                </ul>
                                <ul className="menu__footer">
                                    <li><Link href="#!">Blog</Link></li>
                                    <li><Link href="#!">New Blog</Link></li>
                                    <li><Link href="#!">Create</Link></li>
                                </ul>
                                <ul className="menu__footer">
                                    <li><Link href="#!">Help</Link></li>
                                    <li><Link href="#!">Hotline: 07798991480</Link></li>
                                    <li><Link href="#!">Address: HO CHI MINH VIET NAM</Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={1}></Col>
            </Row>

            <Row>
                <Col lg={1}></Col>
                <Col lg={10}>
                    <Row className="fbody">
                        <Col lg={6}></Col>
                        <Col lg={6} className="text-end">
                            <span className="coppyright">@copyright.tto.sh2023</span>
                        </Col>
                    </Row>
                </Col>
                <Col lg={1}></Col>
            </Row>
        </footer>
    );
}

export default Footer;