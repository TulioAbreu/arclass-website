import React, { useEffect, useState } from 'react'
import Header from '../components/headerBar.js'

export default function Main({ history }) {
    /*
        meetOurShop
        ---
        Redireciona o usuario para a pagina "Shop"
    */
    function meetOurShop() {
        history.push('/shop')
    }

    return (
        <div className="main-container">
            <Header/>
            <div className="main-slide-container main-slide-background-1">
                Some motivacional text here
            </div>
            <div className="main-slide-container main-slide-background-2">
                Some motivacional text here 2
            </div>
            <div className="main-slide-container main-slide-background-3">
                <button className="main-meet-shop-button" onClick={ meetOurShop }>
                    Conheça nossa loja
                </button>
            </div>
        </div>
    )
}