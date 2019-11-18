import React, { useEffect, useState } from 'react'
import Header from '../components/headerBar.js'

import './BlackHole.css'
import BlackHoleData from '../assets/productExample1.json'

import starSVG from '../assets/star.svg'
import qrCode from '../assets/qrcode.jfif'

export default function Main({ history }) {
    const [ showQrPopup, setShowQrPopup ] = useState(false)

    return (
        <div>
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
                            <img src={qrCode} alt="star" width="300"/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    </div>
                    </div>
                </div>
            </div>

            { Header() }
            {showQrPopup?
                            <div>
                            </div>
                            :
                            <div/>
                        }

            <div class="container mt-5" style={{'max-width':"50%"}}>
                <div class="text-center">
                    <img src={ BlackHoleData["imgURL"]  } style={{'width':"60%"}} alt="Buraco Negro"/>
                </div>
                <div class="card-body">
                    <div class="float-left">
                        <h5 class="card-title">{ BlackHoleData["name"] }</h5>
                        <p class="card-text">{ BlackHoleData["description"] }</p>
                        <p class="card-text">
                            <img src={starSVG} alt="star" width="20"/> { BlackHoleData["votesNumber"] + " " } ({ BlackHoleData["votesValue"] })
                        </p>
                    </div>
                    <div class="float-right">
                        <p class="h3">
                            R$ { BlackHoleData["price"].toFixed(2) }
                        </p>
                        <button className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}