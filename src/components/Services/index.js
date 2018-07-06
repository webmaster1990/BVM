import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Services</h2>
                            <h3 className="section-subheading text-muted">Currently we provide below Services.</h3>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                             <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"/>
                                <i className="fa fa-laptop fa-stack-1x fa-inverse"/>
                             </span>
                             <h4 className="service-heading">Web Development</h4>
                             <p className="text-muted">It is our motto that lets our services speak for us.
                                 We offer great web development solutions using the most advanced tools and technologies.</p>
                        </div>
                        <div className="col-md-4">
                              <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"/>
                                <i className="fa fa-android fa-stack-1x fa-inverse"/>
                              </span>
                                <h4 className="service-heading">Android Development</h4>
                                <p className="text-muted">We have developed several apps for Android phones.
                                    Whether you need an Android app for personal purpose or professional, we can create a feature-rich app with satisfying user experience.</p>
                        </div>
                        <div className="col-md-4">
                              <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"/>
                                <i className="fa fa-apple fa-stack-1x fa-inverse"/>
                              </span>
                            <h4 className="service-heading">iOS Development</h4>
                            <p className="text-muted">We design & develop user-friendly and feature-rich iPhone apps according to the client's requirements.
                                Our developer develop apps for the latest version of iPhone and app will also compatible with the previous versions.</p>
                        </div>
                    </div>
                </div>
        );
    }
}
export default Services;