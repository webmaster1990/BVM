import React, { Component } from 'react';

class Process extends Component {
    render() {
        return (
            <section id="process" className="section-content bg3">
                <div className="container">
                    <div className="row">
                        {/* Section title */}
                        <div className="section-title item_bottom text-center">
                            <div>
                                <span className="fa fa-cogs fa-2x" />
                            </div>
                            <h1 className="white">Development <span>Process</span></h1>
                        </div>
                        {/* End Section title */}
                        <ol className="process-flow list-unstyled">
                            <li className="active">
                                <div className="process-node active">
                                    <i className="fa fa-comments" />
                                </div>
                                <h4>Discussion</h4>
                                {/*<p>Lorem Ipsum lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>*/}
                                <div className="line">
                                    <div className="progress" />
                                </div>
                            </li>
                            <li className="active">
                                <div className="process-node active">
                                    <i className="fa fa-lightbulb-o" />
                                </div>
                                <h4>Idea</h4>
                                {/*<p>Lorem Ipsum lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>*/}
                                <div className="line">
                                    <div className="progress" />
                                </div>
                            </li>
                            <li className="active">
                                <div className="process-node active">
                                    <i className="fa fa-desktop" />
                                </div>
                                <h4>Implementation</h4>
                                {/*<p>Lorem Ipsum lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>*/}
                                <div className="line">
                                    <div className="progress" />
                                </div>
                            </li>
                            <li className="active">
                                <div className="process-node active">
                                    <i className="fa fa-flash" />
                                </div>
                                <h4>Review</h4>
                                {/*<p>Lorem Ipsum lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>*/}
                                <div className="line">
                                    <div className="progress" />
                                </div>
                            </li>
                            <li className="active">
                                <div className="process-node active">
                                    <i className="fa fa-rocket" />
                                </div>
                                <h4>Deliver</h4>
                                {/*<p>Lorem Ipsum lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>*/}
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        );
    }
}
export default Process;