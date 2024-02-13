import { Container, Row, Col } from "react-bootstrap"
import "./about.css"
import { FaBaseballBall } from "react-icons/fa";

function About() {
    return (
        <Container>
            <Row>
                <Col lg={4} xs={12} sm={12} md={6}>
                    <div className="about_text">
                        <h2>Immediate Deployment</h2>
                        <p>Et vero eos et accusamus et
                            iusto odio dignissimos</p>
                        <FaBaseballBall className="icon" />
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className="about_text">
                        <h2>Immediate Deployment</h2>
                        <p>Et vero eos et accusamus et
                            iusto odio dignissimos</p>
                        <FaBaseballBall className="icon" />
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className="about_text">
                        <h2>Immediate Deployment</h2>
                        <p>Et vero eos et accusamus et
                            iusto odio dignissimos</p>
                        <FaBaseballBall className="icon" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default About