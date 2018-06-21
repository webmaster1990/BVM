import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="text-center">
                {/* Footer Text */}
                <div className="container text-center item_top">
                    <div>
                        <img className="footer-logo" src="images/logo.png" width="6%" alt="footer logo" /><br />
                    </div>
                    <div>© Copyright 2018. All Rights Reserved.</div>
                </div>
                {/* End Footer Text */}
            </footer>
        );
    }
}
export default Footer;