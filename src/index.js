import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Admin from './components/Admin'
import './index.css';
import App from './App';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid : false
        }
    }
    componentWillMount () {
        /*debugger*/
        const pathname = window.location.pathname;
        console.log(pathname)
        if (pathname === '/login' || pathname === '/home' || pathname === '/attendance') {
            this.setState({
                isValid: true
            })
        }
    }
    render() {
        const { isValid } = this.state;
        return (
            <div>
                <Router>
                    {
                        isValid ? <Admin /> :
                            <Switch>
                                <Route path="/" component={App}/>
                            </Switch>
                    }
                </Router>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();