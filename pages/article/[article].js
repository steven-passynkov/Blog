import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { supabase } from "../../utils/supabaseClient";

export default function Artical() {
  const router = useRouter();
  const { article } = router.query;
  const [articalData, setArticalData] = useState();

  const selectArtical = async () => {
    let { data, error } = await supabase.from("articals").select();
    setArticalData(data.find((el) => el.url === article));
  };

  useEffect(() => {
    if (article) {
      selectArtical();
    }
  }, [article]);

  console.log(articalData);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="../">Stevens Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="../#articals">Articals</Nav.Link>
              <Nav.Link href="../#me">About me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {articalData !== undefined ? (
        <div
          style={{ marginLeft: "10%", marginRight: "10%", paddingTop: "5%" }}
        >
          <Container>
            <Row>
              <Col>
                <h1>{articalData.title}</h1>
              </Col>
            </Row>
            <Row style={{ paddingTop: "3%" }}>
              <Col>Auther: {articalData.auther}</Col>
            </Row>
            <Row>
              <Col>Published: {articalData.date}</Col>
            </Row>
            <Row style={{ paddingTop: "3%" }}>
              <Col>
                <center>
                  <Image
                    src={articalData.images.images[0]}
                    width={795}
                    height={570}
                    lazy="true"
                  />
                </center>
              </Col>
            </Row>
            <Row>
              <Col>caption</Col>
            </Row>
            <hr />
            <div style={{ paddingTop: "2%", paddingBottom: "10%" }}>
              {articalData.text.text.map((text) => (
                <Row style={{paddingTop:"1%"}}>
                  <Col>{text}</Col>
                </Row>
              ))}
            </div>
          </Container>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
