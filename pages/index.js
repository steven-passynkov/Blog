import Head from "next/head";
import Image from "next/image";
import {
  Navbar,
  Nav,
  InputGroup,
  Form,
  Button,
  Card,
  Carousel,
  Figure,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Home() {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
  };

  const [articalData, setArticalData] = useState();

  const selectArtical = async () => {
    let { data, error } = await supabase.from("articals").select();
    setArticalData(data);
  };

  useEffect(() => {
    selectArtical();
  }, []);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">Stevens Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#articals">Articals</Nav.Link>
              <Nav.Link href="#me">About me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Desktop>
        <div style={{ paddingTop: "15%", height: "calc(100vh)" }}>
          <Container>
            <Row>
              <Col>
                <h1>Subscibe to my blog</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>
                  The subscibe is still in development 
                </h4>
              </Col>
              <Col></Col>
            </Row>
            <Row style={{ paddingTop: "1%" }}>
              <Col>
                <InputGroup>
                  <Form.Control
                    placeholder="Your email adress"
                    aria-label="Your email adress"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    Subscibe
                  </Button>
                </InputGroup>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
      </Desktop>

      <Mobile>
        <div style={{ paddingTop: "15%", height: "calc(100vh)" }}>
          <Container>
            <Row>
              <Col>
                <h1>Subscibe to my blog</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>
                  The subscibe is still in development 
                </h4>
              </Col>
            </Row>
            <Row style={{ paddingTop: "1%" }}>
              <Col>
                <InputGroup>
                  <Form.Control
                    placeholder="Your email adress"
                    aria-label="Your email adress"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    Subscibe
                  </Button>
                </InputGroup>
              </Col>
            </Row>
          </Container>
        </div>
      </Mobile>
      {articalData !== undefined ? (
        <>
          <Desktop>
            <div id="articals">
              <Row>
                <Col>
                  <center>
                    <u>
                      <h2>My Articals</h2>
                    </u>
                  </center>
                </Col>
              </Row>
              <Carousel variant="dark" style={{ paddingTop: "1%" }}>
                <Carousel.Item>
                  <Container>
                    <Row>
                      <Col>
                      <Card>
                          <Card.Img variant="top"></Card.Img>
                          <Card.Body>
                            <Card.Title>{articalData[0].title}</Card.Title>
                            <Card.Text>An artical about my school</Card.Text>
                            <Button
                              variant="primary"
                              href={"/article/" + `${articalData[0].url}`}
                            >
                              Go to the artical
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                      <Card>
                          <Card.Img variant="top"></Card.Img>
                          <Card.Body>
                            <Card.Title>{articalData[0].title}</Card.Title>
                            <Card.Text>An artical about my school</Card.Text>
                            <Button
                              variant="primary"
                              href={"/article/" + `${articalData[0].url}`}
                            >
                              Go to the artical
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Card.Img variant="top"></Card.Img>
                          <Card.Body>
                            <Card.Title>{articalData[0].title}</Card.Title>
                            <Card.Text>An artical about my school</Card.Text>
                            <Button
                              variant="primary"
                              href={"/article/" + `${articalData[0].url}`}
                            >
                              Go to the artical
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </Carousel.Item>
                <Carousel.Item>
                  <Container>
                    <Row>
                      <Col>
                      <Card>
                          <Card.Img variant="top"></Card.Img>
                          <Card.Body>
                            <Card.Title>{articalData[0].title}</Card.Title>
                            <Card.Text>An artical about my school</Card.Text>
                            <Button
                              variant="primary"
                              href={"/article/" + `${articalData[0].url}`}
                            >
                              Go to the artical
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                      <Card>
                          <Card.Img variant="top"></Card.Img>
                          <Card.Body>
                            <Card.Title>{articalData[0].title}</Card.Title>
                            <Card.Text>An artical about my school</Card.Text>
                            <Button
                              variant="primary"
                              href={"/article/" + `${articalData[0].url}`}
                            >
                              Go to the artical
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                      <Card>
                          <Card.Img variant="top"></Card.Img>
                          <Card.Body>
                            <Card.Title>{articalData[0].title}</Card.Title>
                            <Card.Text>An artical about my school</Card.Text>
                            <Button
                              variant="primary"
                              href={"/article/" + `${articalData[0].url}`}
                            >
                              Go to the artical
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </Carousel.Item>
              </Carousel>
            </div>
          </Desktop>

          <Mobile>
            <div style={{ marginTop: "10%" }}>
              <Row>
                <Col>
                  <center>
                    <u>
                      <h2>My Articals</h2>
                    </u>
                  </center>
                </Col>
              </Row>
              <Carousel variant="dark" style={{ paddingTop: "1%" }}>
                <Carousel.Item>
                  <Container>
                    <Row>
                      <Col>
                      <Card>
                          <Card.Img variant="top"></Card.Img>
                          <Card.Body>
                            <Card.Title>{articalData[0].title}</Card.Title>
                            <Card.Text>An artical about my school</Card.Text>
                            <Button
                              variant="primary"
                              href={"/article/" + `${articalData[0].url}`}
                            >
                              Go to the artical
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </Carousel.Item>
                <Carousel.Item>
                  <Container>
                    <Row>
                      <Col>
                      <Card>
                          <Card.Img variant="top"></Card.Img>
                          <Card.Body>
                            <Card.Title>{articalData[0].title}</Card.Title>
                            <Card.Text>An artical about my school</Card.Text>
                            <Button
                              variant="primary"
                              href={"/article/" + `${articalData[0].url}`}
                            >
                              Go to the artical
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </Carousel.Item>
              </Carousel>
            </div>
          </Mobile>

          <div id="me" style={{ marginTop: "10%", marginBottom: "10%" }}>
            <Container>
              <Row>
                <Col>
                  <center>
                    <u>
                      <h2>About me</h2>
                    </u>
                  </center>
                </Col>
              </Row>
              <Row style={{ paddingTop: "1%" }}>
                <Col>image of me</Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>Hi, my name is Steven.</Card.Title>
                      <Card.Text>
                        I am 15 year old.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
