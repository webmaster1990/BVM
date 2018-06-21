import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section id="about" className="section-content bg1">
                <div className="container">
                    <div className="row">
                        {/* Section Title */}
                        <div className="section-title item_bottom text-center">
                            <div>
                                <span className="fa fa-user fa-2x" />
                            </div>
                            <h1>About <span>Us</span></h1>
                        </div>
                        {/* End Section Title */}
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-center item_bottom">
                            <img src="images/photo.jpg" className="img-center img-responsive" alt="My photo" />
                            {/* YOUR PHOTO */}
                            <div className="name-title">
                                <h2>BVM</h2>
                                {/* Your Name */}
                                <h5>Infotech</h5>
                                {/* Your Designation */}
                            </div>
                        </div>
                        {/* some text about yourself */}
                        <div className="col-md-4 item_top">
                            <p className="quoteline">
                                With continuous Innovation and Excellence, build solutions that change the way people work and live.
                            </p>
                            <p>
                                We are software development company and complete IT solution provider that focuses on providing highly qualitative, timely delivered and cost-effective client solutions. Our Key clients are loyal to us because we have volume up their business and has also spread it to world globally.
                            </p>
                            <p>
                                We currently working on lots of technologies like react js, node js, mongo Db, Angular Js, Android Development, iOS Development, PHP, ASP, Game Development. Our main motto is satisfy our client.
                            </p>
                        </div>
                        {/* ./some text about yourself */}
                        <div className="col-md-4 item_bottom">
                            {/* ./some information list */}
                            {/* some number facts */}
                            <div className="number-counters text-center new-line">
                                <div className="counters-item">
                                    <i className="fa fa-group fa-2x" />
                                    <strong data-to={50}>0</strong>
                                    {/* Set Your Number here. i,e. data-to="56" */}
                                    <p>
                                        Happy Clients
                                    </p>
                                </div>
                                <div className="counters-item">
                                    <i className="fa fa-flag fa-2x" />
                                    <strong data-to={5}>0</strong>
                                    {/* Set Your Number here. i,e. data-to="56" */}
                                    <p>
                                        Year Experience
                                    </p>
                                </div>
                                <div className="counters-item">
                                    <i className="fa fa-trophy fa-2x" />
                                    <strong data-to={10}>0</strong>
                                    {/* Set Your Number here. i,e. data-to="56" */}
                                    <p>
                                        Awards Won
                                    </p>
                                </div>
                                <div className="counters-item">
                                    <i className="fa fa-thumbs-up fa-2x" />
                                    <strong data-to={120}>0</strong>
                                    {/* Set Your Number here. i,e. data-to="56" */}
                                    <p>
                                        Projects Done
                                    </p>
                                </div>
                            </div>
                            {/* ./some number facts */}
                        </div>
                    </div>
                    <div className="row services">

                        <div className="col-md-4">
                            {/* Service */}
                            <div className="services-box new-line item_bottom">
                                <h4>React Js</h4>
                                <div className="services-box-icon">
                                    <img src='images/about/react.png' alt="reactJs" style={{width : '100%',height : '100%',margin: 0,verticalAlign:'top'}}/>
                                </div>
                                <div className="service-box-info">
                                    <p>
                                        We use react js for develop responsive frontend of our client's Websites.
                                    </p>
                                </div>
                            </div>
                            {/* End Service */}
                        </div>
                        <div className="col-md-4 clearfix">
                            {/* Service */}
                            <div className="services-box new-line item_right">
                                <h4>node Js</h4>
                                <div className="services-box-icon">
                                    <img src='images/about/node.png' alt="nodeJs" style={{width : '100%',height : '100%',margin: 0,verticalAlign:'top'}}/>
                                </div>
                                <div className="service-box-info">
                                    <p>
                                        We use node Js for develop and maintain backend of website with mongoDb.
                                    </p>
                                </div>
                            </div>
                            {/* End Service */}
                        </div>
                        <div className="col-md-4 clearfix">
                            {/* Service */}
                            <div className="services-box new-line item_right">
                                <h4>mongo Db</h4>
                                <div className="services-box-icon">
                                    <img src='images/about/mongo.png' alt="mongoDb" style={{width : '100%',height : '100%',margin: 0,verticalAlign:'top'}}/>
                                </div>
                                <div className="service-box-info">
                                    <p>
                                        We use mongo Db for develop and maintain backend of website.
                                    </p>
                                </div>
                            </div>
                            {/* End Service */}
                        </div>

                        <div className="col-md-4 clearfix">
                            {/* Service */}
                            <div className="services-box new-line item_right">
                                <h4>Android</h4>
                                <div className="services-box-icon">
                                    <img src='images/about/android.png' alt="Android" style={{width : '100%',height : '100%',margin: 0,verticalAlign:'top'}}/>
                                </div>
                                <div className="service-box-info">
                                    <p>
                                        We Develop various Android Applications according to client's requirement.
                                    </p>
                                </div>
                            </div>
                            {/* End Service */}
                        </div>
                        <div className="col-md-4">
                            {/* Service */}
                            <div className="services-box new-line item_left">
                                <h4>iOS </h4>
                                <div className="services-box-icon">
                                    <img src='images/about/ios.png' alt="iOS" style={{width : '100%',height : '100%',margin: 0,verticalAlign:'top'}}/>
                                </div>
                                <div className="service-box-info">
                                    <p>
                                        We Develop various ios web and native applications for users.
                                    </p>
                                </div>
                            </div>
                            {/* End Service */}
                        </div>
                        <div className="col-md-4 clearfix">
                            {/* Service */}
                            <div className="services-box new-line item_right">
                                <h4>Angular Js</h4>
                                <div className="services-box-icon">
                                    <img src='images/about/angular.png' alt="angularJs" style={{width : '100%',height : '100%',margin: 0,verticalAlign:'top'}}/>
                                </div>
                                <div className="service-box-info">
                                    <p>
                                        We use angular js for develop responsive frontend of our client's Websites.
                                    </p>
                                </div>
                            </div>
                            {/* End Service */}
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}
export default About;
