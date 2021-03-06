import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
    return (
        <Container className="home">
            <Row>
                <Col md={4}>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-s/02/87/ba/09/14-draught-beer-taps.jpg" alt="New beer" />
                    <Link to={'/beers'} className="home-links">
                        <h3>All Beers</h3>
                    </Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Col>
                <Col md={4}>
                        <img src="https://lh3.googleusercontent.com/proxy/fEtcmWgKwqMUjxE9Jtx1txkKZ5yPK46YyuwXxEyKj5ucpD2diwTj2G_UkaCwMUlm1UKVueo4AURwdVMKaXHMBLa_j79rPbKqeQQO8aT-a8fVJjuzGk8S-XAEyVQ" alt="Random beer" />
                    <Link to={'/random-beer'} className="home-links">
                        <h3>Random Beer</h3>
                    </Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Col>
                <Col md={4}>
                        <img src="https://static.vinepair.com/wp-content/uploads/2020/08/beerstyles_infographic_social.jpg" alt="All beers" />
                    <Link to={'/new-beer'} className="home-links">
                        <h3>New Beer</h3>
                    </Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Home 