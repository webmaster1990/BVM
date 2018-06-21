import React  from 'react';

class Portfolio extends React.Component {
    render() {
        return (
        <section id="portfolio" className="section-content bg3">
            <div className="container">
                <div className="row">
                    {/* Section title */}
                    <div className="section-title item_bottom text-center">
                        <div>
                            <span className="fa fa-briefcase fa-2x" />
                        </div>
                        <h1 className="white">My <span>Works</span></h1>
                    </div>
                    {/* End Section title */}
                </div>
                <div className="portfolio-top">
                </div>
                <div id="portfolio-wrap" tabIndex={1}>
                    <div id="portfolio-page">
                        <div id="portfolio-content">
                            <div className="container">
                                <div className="row">
                                    <div id="protfolio-control">
                                        <div className="row">
                                            <div className="col-md-4 col-sm-4 col-xs-4">
                                                <a id="prev-project" title="Previous Project"><i className="fa fa-arrow-left" /></a>
                                            </div>
                                            <div className="col-md-4 col-sm-4 col-xs-4 text-center">
                                                <a id="close-project" title="Close Project"><i className="fa fa-times" /></a>
                                            </div>
                                            <div className="col-md-4 col-sm-4 col-xs-4 text-right">
                                                <a id="next-project" title="Next Project"><i className="fa fa-arrow-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End #protfolio-control */}
                                    {/* Ajax will load into here */}
                                    <div id="portfolio-ajax">
                                    </div>
                                    {/* End #portfolio-ajax */}
                                    {/* End Ajax */}
                                </div>
                            </div>
                        </div>
                        {/* End #portfolio-content */}
                    </div>
                    {/* End #portfolio-page */}
                </div>
                {/* End #portfolio-wrap */}
            </div>
            {/* End .container */}
            {/* End #portfolio-filter */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="portfolio-items" className="portfolio-items item_fade_in">
                            <article className="design photo">
                                <div>
                                    <img src="images/portfolio/p3.jpg" alt="image" />
                                    <div className="overlay">
                                        <div className="item-info">
                                            <i className="fa fa-laptop" />
                                            <h3>Projet of Website</h3>
                                            <span>web</span>
                                        </div>
                                    </div>
                                    {/* End .overlay */}
                                </div>
                            </article>
                            <article className="photo web video">
                                <div>
                                    <img src="images/portfolio/p1.jpg" alt="image" />
                                    <div className="overlay">
                                        <div className="item-info">
                                            <i className="fa fa-laptop" />
                                            <h3>Projet of Website</h3>
                                            <span>web</span>
                                        </div>
                                    </div>
                                    {/* End .overlay */}
                                </div>
                            </article>
                            <article className="video design mobile" target="_blank">
                                <div>
                                    <img src="images/portfolio/p2.jpg" alt="image" />
                                    <div className="overlay">
                                        <div className="item-info">
                                            <i className="fa fa-laptop" />
                                            <h3>Project of E-Commerce Website</h3>
                                            <span>web</span>
                                        </div>
                                    </div>
                                    {/* End .overlay */}
                                </div>
                            </article>
                            <article className="web photo">
                                <div>
                                    <img src="images/portfolio/p4.jpg" alt="image" />
                                    <div className="overlay">
                                        <div className="item-info">
                                            <i className="fa fa-laptop" />
                                            <h3>Project of Website</h3>
                                            <span>web</span>
                                        </div>
                                    </div>
                                    {/* End .overlay */}
                                </div>
                            </article>
                            <article className="mobile video">
                                <div>
                                    <img src="images/portfolio/p5.jpg" alt="image" />
                                    <div className="overlay">
                                        <div className="item-info">
                                            <i className="fa fa-laptop" />
                                            <h3>Project of Website</h3>
                                            <span>web</span>
                                        </div>
                                    </div>
                                    {/* End .overlay */}
                                </div>
                            </article>
                            <article className="photo video">
                                <div>
                                    <img src="images/portfolio/p6.jpg" alt="image" />
                                    <div className="overlay">
                                        <div className="item-info">
                                            <i className="fa fa-laptop" />
                                            <h3>Project of Website</h3>
                                            <span>web</span>
                                        </div>
                                    </div>
                                    {/* End .overlay */}
                                </div>
                            </article>
                            <article className="web mobile video">
                                <div>
                                    <img src="images/portfolio/p7.jpg" alt="image" />
                                    <div className="overlay">
                                        <div className="item-info">
                                            <i className="fa fa-laptop" />
                                            <h3>Website Blog</h3>
                                            <span>web</span>
                                        </div>
                                    </div>
                                    {/* End .overlay */}
                                </div>
                            </article>
                            <article className="video photo web design">
                                <div>
                                    <img src="images/portfolio/p8.jpg" alt="image" />
                                    <div className="overlay">
                                        <div className="item-info">
                                            <i className="fa fa-laptop" />
                                            <h3>Project of E-commerce Website</h3>
                                            <span>web</span>
                                        </div>
                                    </div>
                                    {/* End .overlay */}
                                </div>
                            </article>
                            <article className="design photo">
                                <div>
                                    <img src="images/portfolio/p9.jpg" alt="image" />
                                    <div className="overlay">
                                        <div className="item-info">
                                            <i className="fa fa-laptop" />
                                            <h3>Project of Website</h3>
                                            <span>web</span>
                                        </div>
                                    </div>
                                    {/* End .overlay */}
                                </div>
                            </article>

                        </div>
                        {/* End #portfolio-items.portfolio-items */}
                    </div>
                </div>
            </div>
        </section>
        );
    }
}
export default Portfolio;