import React, { Component } from 'react';

class Skill extends Component {
    render() {
        return (
            <section id="skill" className="section-content bg2">
                <div className="container">
                    <div className="row">
                        {/* Section Title */}
                        <div className="section-title item_bottom text-center">
                            <div>
                                <span className="fa fa-bar-chart-o fa-2x" />
                            </div>
                            <h1>Our <span>Skills</span></h1>
                        </div>
                        {/* End Section Title */}
                    </div>
                    <div className="row text-center item_bottom">

                        <div className="col-md-2">
                            <div className="chart" data-percent={98}>
                                <span className="percent">98</span>
                                <h4>reactJs</h4>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="chart" data-percent={93}>
                                <span className="percent">93</span>
                                <h4>nodeJs</h4>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="chart" data-percent={90}>
                                <span className="percent">90</span>
                                <h4>mongoDb</h4>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="chart" data-percent={95}>
                                <span className="percent">95</span>
                                <h4>Angular Js</h4>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="chart" data-percent={94}>
                                <span className="percent">94</span>
                                <h4>javaScript</h4>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="chart" data-percent={95}>
                                <span className="percent">95</span>
                                <h4>jQuery</h4>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="chart" data-percent={99}>
                                <span className="percent">99</span>
                                <h4>HTML5</h4>
                            </div>
                        </div>
                        <div className="col-md-2 ">
                            <div className="chart" data-percent={99}>
                                <span className="percent">99</span>
                                <h4>CSS3 & SAAS</h4>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="chart" data-percent={97}>
                                <span className="percent">97</span>
                                <h4>Bootstrap</h4>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="chart" data-percent={91}>
                                <span className="percent">91</span>
                                <h4>unity3D</h4>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="chart" data-percent={95}>
                                <span className="percent">95</span>
                                <h4>PHP</h4>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="chart" data-percent={94}>
                                <span className="percent">94</span>
                                <h4>Photoshop</h4>
                            </div>
                        </div>
                    </div>
                    {/* skills end */}
                </div>
            </section>
        );
    }
}
export default Skill;