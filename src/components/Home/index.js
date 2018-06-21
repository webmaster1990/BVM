import React, {Component} from 'react';
import { Carousel } from 'react-bootstrap'

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: 0
        };
    }
    render() {
        return (
            <section id="home">
                <div className="tp-banner-container">
                    <div className="tp-banner">
                        <Carousel>
                            <Carousel.Item className="carousel-item">
                                <img className="imgs" alt="slider image" src="images/s3.jpg"/>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <img className="imgs" alt="slider image" src="images/s2.jpg" />
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <img className="imgs" alt="slider image" src="images/s4.jpg" />
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <img className="imgs" alt="slider image" src="images/s1.jpg" />
                            </Carousel.Item>
                        </Carousel>
                        <div className="tp-bannertimer"/>
                    </div>
                </div>
            </section>

        );
    }
}
export default Home;