import React from 'react';
import './css/main.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";
import Home from './components/routes/Home/Home';
import LandingPage from './components/routes/LandingPage/LandingPage';
import Profile from './components/routes/profile';
import Login from './components/routes/Login/Login';
import Register from './components/routes/Register/Register';
import Plans from './components/routes/plans';
import Recipes from './components/routes/Recipes/Recipes';
import Search from './components/routes/Search/Search';

function App() {

    const authAccount = true;

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {authAccount ? <Home /> : <LandingPage />}
                </Route>
                <Route path="/login">
                    {!authAccount ? <Login /> : <Redirect to="/" />}
                </Route>
                <Route path="/register">
                    {!authAccount ? <Register /> : <Redirect to="/" />}
                </Route>
                <Route path="/profile">
                    {authAccount ? <Profile /> : <Redirect to="/login" />}
                </Route>
                <Route path="/recipes">
                    {authAccount ? <Recipes /> : <Redirect to="/login" />}
                </Route>
                <Route path="/plans">
                    {authAccount ? <Plans /> : <Redirect to="/login" />}
                </Route>
                <Route path="/search">
                    {authAccount ? <Search /> : <Redirect to="/login" />}
                </Route>
                <Route>
                    {<h1>Error 404 Not Found</h1>}
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
