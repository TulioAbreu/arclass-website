import React, { useEffect, useState } from 'react'
import Header from '../components/headerBar'

// To delete later
import Product from '../components/product'
import ProductList from '../components/productsList'

export default function Shop({ history }) {
    let product = new Product(
        "Black Hole Classroom",
        455.0,
        'https://image.sciencenordic.com/1460077.jpg?imageId=1460077&width=480&height=274',
        10,
        3.5
    )

    let products = [];
    for (let i = 0; i < 13; ++i) {
        products.push(product);
    }

    return (
        <div className="shop-container">
            <Header/>
            <div className="products-container">
                { ProductList(products) }
            </div>
        </div>
    )
}