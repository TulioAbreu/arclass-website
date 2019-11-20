import React, { useEffect, useState } from 'react'
import Header from '../components/headerBar'

// To delete later
import Product from '../components/product'
import ProductList from '../components/productsList'

import productsList from '../assets/products.json'


export default function Shop({ history }) {
    console.log(productsList)


    return (
        <div className="shop-container"  style={{'background-color': 'rgb(230,230,230)'}}>
            { Header('loja') }
            <div className="products-container mt-5">
                { ProductList(productsList["list"], history) }
            </div>

            <div class="bg-primary p-3 text-white font-weight-bold text-center mt-5">
                ARClass - Esta página é apenas uma amostra, os conteúdos exibidos pertencem aos seus respectivos criadores
            </div>

        </div>
    )
}