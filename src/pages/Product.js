import React, { useEffect, useState } from 'react'
import Header from '../components/headerBar.js'

import './Product.css'
import starSVG from '../assets/star.svg'
import qrCode from '../assets/qrcode.jfif'

import productList from '../assets/products.json'
var images = require.context('../assets/pictures', true);

export default function Main({ match, history }) {
    const [ showQrPopup, setShowQrPopup ] = useState(false)

    let pageId = match.params.product_id
    let id = (isNaN(pageId) || pageId < 0 || pageId >= productList["list"].length)? 0:pageId
    
    let product = productList["list"][id]
    return (
        <div style={{'background-color': 'rgb(230,230,230)'}}>
            { Header() }

            <div id="myModal" class="modal" tabIndex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Compra realizada com sucesso!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Este é o seu QRCode para utilização do modelo adquirido:</p>
                        <div class="text-center">
                            <img src={images(product["qrCodeURL"])} alt="star" width="300"/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-info">Copiar</button>
                        <button type="button" class="btn btn-success">Baixar</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
                    </div>
                    </div>
                </div>
            </div>

            <div class="container bg-white p-5 w-75">
                <div class="mt-5 text-center">
                    <h1> { product["name"] } </h1>
                </div>
                <div class="text-center mb-5">
                    <img src={ images(product["imgURL"])  } style={{'width':"60%"}} alt="Buraco Negro"/>
                </div>
                <div class="container ">
                    <p class="card-text">{ product["description"] }</p>
                    <p class="card-text">
                        <img src={starSVG} alt="star" width="20"/> { product["votesValue"] + " " } ({ product["votesNumber"] })
                    </p>
                </div>
                <div class="container mt-5 text-right">
                    <p class="h3">
                        {product["price"] === 0?
                            "FREE"
                            :
                            `R$ ${product["price"].toFixed(2)}`

                        }
                    </p>
                    <button className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                        Comprar
                    </button>
                </div>
            </div>

            <div class="bg-primary p-3 text-white font-weight-bold text-center mt-5">
                ARClass - Esta página é apenas uma amostra, os conteúdos exibidos pertencem aos seus respectivos criadores
            </div>

        </div>
    )
}