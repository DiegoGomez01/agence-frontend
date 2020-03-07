import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import App from './App';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
