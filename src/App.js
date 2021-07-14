import './App.scss';
import {Home} from "./views/Home";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Login} from "./views/Login";

import {Header} from "./components/Header";
import {CartItem} from "./views/CartItem";
import {ProductManager} from "./views/ProductManager";
import {Footer} from "./components/Footer";
import {ProductDetail} from "./views/ProductDetail";

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Header/>

                    <Switch>
                        <Route exact={true} path="/">
                            <Home/>
                        </Route>
                        <Route exact={true} path="/log-in">
                            <Login/>
                        </Route>
                        <Route exact={true} path="/cart-item">
                            <CartItem/>
                        </Route>
                        <Route exact={true} path="/product-manager">
                            <ProductManager/>
                        </Route>
                        <Route exact={true} path="/product-detail/:product">
                            <ProductDetail/>
                        </Route>
                    </Switch>
                </div>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
