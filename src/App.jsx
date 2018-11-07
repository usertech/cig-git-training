import { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import GeneralInformation from './screens/GeneralInformation';
import GlobalStyle from './styles/GlobalStyle';

export default class App extends Component {
    state = {
        name: 'demo-app-tony'
    };

    render() {
        return (
            <div className="App">
                <GlobalStyle />
                <BrowserRouter>
                    <Switch>
                        <Route
                            path="/generalInformation"
                            component={GeneralInformation}
                        />
                        <Redirect from="/" to="/generalInformation" />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
