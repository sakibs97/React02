import { Col, Container, Row } from "react-bootstrap"
import { FaBell } from "react-icons/fa";
import "./banner.css"
import hero from "../../assets/hero.png"

function Banner() {
    return (
        <Container>
            <Row className="banner">
                <Col lg={5}>
                    {/* xs={{ order: 'last' }} */}
                    <div className="banner_text">
                        <div className="ban_bell">
                            <a href="#"><FaBell className="bell_icon" /> Startup Business</a>
                        </div>
                        <h1>Empowering startups to fuel
                            their business growth</h1>
                        <p>Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,
                            velit
                            nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
                        <button className="ban_btn">Get started now </button>
                    </div>
                </Col>
                <Col lg={6} >
                    <img className="hero" src={hero} alt="hero" />
                </Col>
            </Row>
        </Container>
    )
}

export default Banner