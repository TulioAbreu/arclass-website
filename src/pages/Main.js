import React, { useEffect, useState } from 'react'
import Header from '../components/headerBar.js'

import "./Main.css"

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
        <div className="main-container" style={{'background-color': 'rgb(230,230,230)'}}>
            { Header('inicio') }

            <div class="m-3 border-black">
                <div class="container">
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100"
                                    src="https://am02bpbsu4-flywheel.netdna-ssl.com/wp-content/uploads/2018/10/iStock-900075792-880x440.jpg"
                                    alt="Primeiro Slide" />
                                <div class="carousel-caption d-none d-md-block alert alert-dark" role="alert">
                                    <h5>"How Can Virtual Reality Bring Equity to Education?" </h5>
                                    <p>Artigo do site edtechtimes realiza uma breve discussão sobre os benefícios da
                                        realidade virtual nos estudos.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100"
                                    src="http://200.239.128.208/xr4goodlab/wp-content/uploads/2019/11/arclass_evaluation_-_running_1.png"
                                    alt="Segundo Slide" />
                                <div class="carousel-caption d-none d-md-block alert alert-dark" role="alert">
                                    <h5>"Aluno da UFOP desenvolve aplicativo para aprimorar metodologias de ensino"
                                    </h5>
                                    <p>A ideia da realidade aumentada consiste em colocar objetos virtuais no mundo real
                                        por meio de ferramentas computacionais, atualmente muito difundidas em ambientes
                                        de entretenimento, como os jogos...</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100"
                                    src="https://portalsbn.com.br/tim.php?src=uploads/images/2019/08/realidade-aumentada-facilita-aprendizagem-durante-aulas-de-geografia-em-cariacica-8.jpg&w=960&h=490"
                                    alt="Terceiro Slide" />
                                <div class="carousel-caption d-none d-md-block alert alert-dark" role="alert">
                                    <h5>ARClass, a sua metodologia de ensino </h5>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Anterior</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Próximo</span>
                        </a>
                    </div>

                </div>
            </div>

            <div class="w-75 container">
                <div class="bg-white rounded m-3 p-5">
                    <h1 class="display-4">O futuro chegou!</h1>
                    <p class="lead">Este é um texto motivador!</p>
                    <hr class="my-4"/>
                    <p>Nossa loja está....</p>
                    <p class="lead">
                        <a class="btn btn-primary btn-lg" href="/shop" role="button">Conheça nossa loja</a>
                    </p>
                </div>
            </div>

            <div class="bg-primary p-3 text-white font-weight-bold text-center mt-5">
                ARClass - Esta página é apenas uma amostra, os conteúdos exibidos pertencem aos seus respectivos criadores
            </div>
        </div>

    )
}