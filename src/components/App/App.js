import React, {Component} from 'react';

import Nav from 'components/Nav/Nav';
import getRouter from 'router/router';
import "./app.less";

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Nav/>
                {getRouter()}
            </div>
        )
    }
}
