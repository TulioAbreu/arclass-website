import React, { useEffect, useState } from 'react'
import Header from '../components/headerBar.js'

import './BlackHole.css'
import BlackHoleData from '../assets/productExample1.json'

import starSVG from '../assets/star.svg'

export default function Main({ history }) {
    const [ showQrPopup, setShowQrPopup ] = useState(false)

    function qrCodePopup() {
        return (
            <div className="">

            </div>
        )
    }

    return (
        <div>
            { Header() }



            <div class="card mb-3 h-75" style={{'max-width':"80%"}}>
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src={ BlackHoleData["imgURL"]  } class="card-img" alt="Buraco Negro"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{ BlackHoleData["name"] }</h5>
                            <p class="card-text">{ BlackHoleData["description"] }</p>
                            <p class="card-text">
                                <img src={starSVG} alt="star" width="20"/> { BlackHoleData["votesNumber"] + " " } ({ BlackHoleData["votesValue"] })
                            </p>
                            <p class="h3">
                                R$ { BlackHoleData["price"].toFixed(2) }
                            </p>
                            {showQrPopup?
                            <div>
                            { qrCodePopup() }
                            </div>
                            :
                            <div/>
                            }
                            <button className="btn btn-primary btn-lg" onClick={ () => setShowQrPopup(true) }>
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}