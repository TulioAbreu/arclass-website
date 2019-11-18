import React, { useEffect, useState } from 'react'
import Header from '../components/headerBar'

// To delete later
import Product from '../components/product'
import ProductList from '../components/productsList'

import productExample from '../assets/productExample1.json'

export default function Shop({ history }) {
    let product = new Product(
        productExample["name"],
        productExample["price"],
        productExample["imgURL"],
        productExample["votesNumber"],
        productExample["votesValue"]
    )

    let products = [];
    for (let i = 0; i < 21; ++i) {
        products.push(product);
    }

    return (
        <div className="shop-container">
            { Header('loja') }
            <div className="products-container mt-5">
                { ProductList(products) }
            </div>
        </div>
    )
}