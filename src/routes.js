import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Main from './pages/Main'
import Shop from './pages/Shop'
import Product from './pages/Product'


export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/shop" component={Shop} />
            <Route path="/product/:product_id" component={Product} />
        </BrowserRouter>
    );
}