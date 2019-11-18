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
            { Header('inicio') }
            <div class="jumbotron">
                <h1 class="display-4">O futuro chegou!</h1>
                <p class="lead">Este é um texto motivador!</p>
                <hr class="my-4"/>
                <p>Nossa loja está....</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="/shop" role="button">Conheça nossa loja</a>
                </p>
            </div>
        </div>
    )
}