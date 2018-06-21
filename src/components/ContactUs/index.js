import React, { Component } from 'react';
import Footer from "../Footer/index";

class ContactUs extends Component {
    render() {
        return (
            <section id="contact" className="section-content bg2">
                <div className="container">
                    <div className="row">
                        {/* Section title */}
                        <div className="section-title item_bottom text-center">
                            <div>
                                <span className="fa fa-envelope fa-2x" />
                            </div>
                            <h1>Get in <span>touch</span></h1>
                        </div>
                        {/* End Section title */}
                    </div>
                    <div className="row item_fade_in">
                        <div className="col-md-6 col-md-offset-3 text-center contact-block">
                            {/* Contact Details */}
                            <i className="fa fa-map-marker fa-3x" />
                            <p>
                                314 Amora Arcade, nr Shangrila Heights, <br />
                                Utran, Surat, Gujrat.
                            </p>
                            {/* End Contact Details */}
                            {/* Social Icon */}
                            {/*<div className="social-icon">
                                <a><i className="fa fa-facebook-square fa-3x" /></a>
                                <a><i className="fa fa-twitter-square fa-3x" /></a>
                                <a><i className="fa fa-google-plus-square fa-3x" /></a>
                                <a><i className="fa fa-linkedin-square fa-3x" /></a>
                                <a><i className="fa fa-pinterest-square fa-3x" /></a>
                                <a><i className="fa fa-vimeo-square fa-3x" /></a>
                            </div>*/}
                            {/* End Social Icon */}
                        </div>
                    </div>
                    <div className="row item_fade_in">
                        <h4 className="text-center">Drop me a Line</h4>
                        <div className="col-md-6 col-md-offset-3">
                            <div className="form-respond text-center">
                            </div>
                            <form method="post" name="contactform" id="contactform" className="form validate item_bottom" role="form">
                                <div className="form-group">
                                    <input type="text" name="name" id="name" className="form-control required" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" id="email" className="form-control required email" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <textarea name="message" id="message" className="form-control input-lg required" rows={9} placeholder="Enter Message" defaultValue={""} />
                                </div>
                                <div className="form-group text-center">
                                    <input type="submit" id="contactForm_submit" className="btn btn-trans btn-border btn-full" defaultValue="Submit" />
                                </div>
                                {/* antispam code */}
                                <div className="antispam"><input type="text" defaultValue name="url" /></div>
                            </form>
                        </div>
                    </div>
                    {/* End form contact */}
                </div>
            </section>
        );
    }
}
export default ContactUs;