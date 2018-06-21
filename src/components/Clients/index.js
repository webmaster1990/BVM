import React, { Component } from 'react';

class Clients extends Component {
    render() {
        return (
            <section id="clients" className="clients parallax" style={{backgroundImage: 'url(images/clients.png)'}}>
                <div className="parallax-overlay">
                    <div className="container">
                        <div className="row">
                            {/* Section title */}
                            <div className="section-title item_bottom text-center">
                                <div>
                                    <span className="fa fa-users fa-2x" />
                                </div>
                                <h1 className="white">My <span>Clients</span></h1>
                            </div>
                            {/* End Section title */}
                        </div>
                        <div className="row new-line item_fade_in">
                            <h4 className="white">Some of <strong>my clients</strong></h4>
                            <div className="carrousel-container">
                                <div id="left_scroll"><a/></div>
                                <div id="carousel_inner">
                                    <ul className="clearfix" id="carousel_ul">
                                        <li><span><img src="images/c1.png" alt="message in bottle" /></span></li>
                                        <li><span><img src="images/c2.png" alt="cvdoo" /></span></li>
                                        <li><span><img src="images/c3.png" alt="politiq" /></span></li>
                                        <li><span><img src="images/c4.png" alt="skuchain" /></span></li>
                                        <li><span><img src="images/c5.png" alt="i love intently" /></span></li>
                                        <li><span><img src="images/c6.png" alt="munivisior" /></span></li>
                                    </ul>
                                </div>
                                <div id="right_scroll"><a /></div>
                                <input type="hidden" id="hidden_auto_slide_seconds" defaultValue={0} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Clients;
