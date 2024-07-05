'use client'

import { Container, Row, Col, Nav } from 'react-bootstrap';
import h from '@/app/styles/hero.module.css';

const Hero = () => {
    return (
        <section style={{ width: '100%' }}>
            <Container fluid>
                <Row>
                    <Col lg={2} md={12} className={h['sidebar']}>
                        <Nav className="flex-column gap-1-0625rem">
                            <p className={h['sidebar_title']}>Catalog</p>
                            <Nav.Item className="w-100">
                                <Nav.Link className={h['nav-item__link']}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none" className="icon-side_bar">
                                        <path d="M5.77788 6L1.6001 4.5V18.443L13.089 23L24.5779 18.443V4L20.4001 6M13.0368 5V19M5.77788 16V2L13.089 5L20.4001 2V16L13.089 19L5.77788 16Z" stroke="#545454" strokeWidth="2" />
                                    </svg>
                                    Course
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="w-100">
                                <Nav.Link className={h['nav-item__link']}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="25" viewBox="0 0 27 25" fill="none" className="icon-side_bar">
                                        <mask id="mask0_354_1237" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="27" height="25">
                                            <path d="M22.9329 2H4.28953C3.85325 2 3.43484 2.16594 3.12634 2.46131C2.81784 2.75668 2.64453 3.15728 2.64453 3.575V21.425C2.64453 21.8427 2.81784 22.2433 3.12634 22.5387C3.43484 22.8341 3.85325 23 4.28953 23H22.9329C23.3691 23 23.7876 22.8341 24.0961 22.5387C24.4046 22.2433 24.5779 21.8427 24.5779 21.425V3.575C24.5779 3.15728 24.4046 2.75668 24.0961 2.46131C23.7876 2.16594 23.3691 2 22.9329 2Z" fill="white" stroke="white" strokeWidth="4" strokeLinejoin="round" />
                                            <path d="M18.5463 6.19995L20.7396 18.8M9.22458 6.19995L7.03125 18.8M13.6113 6.19995V8.29995M13.6113 11.45V13.55M13.6113 16.7V18.8" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                        </mask>
                                        <g mask="url(#mask0_354_1237)">
                                            <path d="M0.451172 -0.0999756H26.7712V25.1H0.451172V-0.0999756Z" fill="#545454" />
                                        </g>
                                    </svg>
                                    Route
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="w-100">
                                <Nav.Link className={h['nav-item__link']}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none" className="icon-side_bar">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.6111 6.125C11.6111 3.70869 13.6569 1.75 16.1806 1.75C18.7043 1.75 20.75 3.70869 20.75 6.125C20.75 8.54131 18.7043 10.5 16.1806 10.5H12.0681C11.9469 10.5 11.8307 10.4539 11.745 10.3719C11.6593 10.2898 11.6111 10.1785 11.6111 10.0625V6.125ZM4.19859 3.9375C3.86211 3.93808 3.53959 4.06631 3.30166 4.29411C3.06374 4.52192 2.9298 4.83072 2.9292 5.15287C2.9292 12.6976 9.31591 18.8125 17.1959 18.8125C17.5324 18.8119 17.8549 18.6837 18.0928 18.4559C18.3308 18.2281 18.4647 17.9193 18.4653 17.5971V14.8829C18.4647 14.5607 18.3308 14.2519 18.0928 14.0241C17.8549 13.7963 17.5324 13.6681 17.1959 13.6675C16.2603 13.6683 15.3305 13.5264 14.4415 13.2471C14.2183 13.1753 13.9786 13.1646 13.7494 13.2161C13.5202 13.2677 13.3106 13.3795 13.1442 13.5389L11.5956 15.0216C9.6091 13.9808 7.97553 12.4171 6.88817 10.5153L8.43721 9.03219C8.6033 8.87426 8.72065 8.67552 8.77636 8.45784C8.83207 8.24017 8.82397 8.01199 8.75296 7.79844L8.75204 7.79538L8.75113 7.79231C8.45824 6.94063 8.30968 6.04954 8.31109 5.15287C8.31049 4.83072 8.17655 4.52192 7.93863 4.29411C7.7007 4.06631 7.37818 3.93808 7.0417 3.9375H4.19859ZM15.7236 8.3125V6.5625H13.8959V5.6875H15.7236V3.9375H16.6375V5.6875H18.4653V6.5625H16.6375V8.3125H15.7236Z" fill="black" />
                                    </svg>
                                    Advise
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav className="flex-column gap-0-6rem" style={{ marginTop: '35px' }}>
                            <p className={h['sidebar_title']}>Studying</p>
                            <Nav.Item className={`w-100 ${h['nav-item__study']}`}>
                                <Nav.Link className="nav-item__link d-flex justify-content-between align-items-center">
                                    <p className="html-css">HTML CSS</p>
                                    <p className="sidebar__progress">60%</p>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className={`w-100 ${h['nav-item__study']}`}>
                                <Nav.Link className="nav-item__link d-flex justify-content-between align-items-center">
                                    <p className="html-css">JavaScript</p>
                                    <p className="sidebar__progress">20%</p>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className={`w-100 ${h['nav-item__study']}`}>
                                <Nav.Link className="nav-item__link d-flex justify-content-between align-items-center">
                                    <p className="html-css">React JS</p>
                                    <p className="sidebar__progress">60%</p>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav className="flex-column" style={{ marginTop: '35px' }}>
                            <p className="sidebar_title">Studying</p>
                            <Nav.Item className={`w-100 ${h['nav-item__study']}`}>
                                <Nav.Link className="nav-item__link d-inline-block course-box bg-dark-subtle" href="#">
                                    HTML CSS
                                </Nav.Link>
                                <Nav.Link className="nav-item__link d-inline-block course-box bg-dark-subtle" href="#">
                                    JavaScript
                                </Nav.Link>
                                <Nav.Link className="nav-item__link d-inline-block course-box bg-dark-subtle" href="#">
                                    React
                                </Nav.Link>
                                <Nav.Link className="nav-item__link d-inline-block course-box bg-success-subtle" href="#">
                                    Word
                                </Nav.Link>
                                <Nav.Link className="nav-item__link d-inline-block course-box bg-success-subtle" href="#">
                                    Excel
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col lg={10} md={12} className="hero">
                        <Row>
                            <Col md={12} className="newItem">
                                <div>
                                    <img src="../asset/img/icon/hero_main.png" alt="" style={{ width: '100%', objectFit: 'cover' }} />
                                </div>
                                <a href="#" className="btn__change">Browse courses</a>
                            </Col>
                        </Row>
                        <Row className="hero__bottom--img">
                            <Col md={6} className="banner__course">
                                <img src="../asset/img/icon/banner__course1.png" alt="" style={{ width: '100%', objectFit: 'cover' }} />
                                <a href="#" className="btn__change">Browse courses</a>
                            </Col>
                            <Col md={6} className="banner__course">
                                <img src="../asset/img/icon/banner__course2.png" alt="" style={{ width: '100%', objectFit: 'cover' }} />
                                <a href="#" className="btn__change">Browse courses</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Hero;
