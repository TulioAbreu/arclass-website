import React from 'react'
import './product.css'

import starSVG from '../assets/star.svg'

class Product extends React.Component {
    constructor(name, price, pictureURL, ratingsQt, ratingsValue) {
        super()
        this.name = name
        this.price = price
        this.pictureURL = pictureURL
        this.ratingsQt = ratingsQt
        this.ratingsValue = ratingsValue
    }

    render() {
        return (
            <div className="product-container">
                <img className="product-picture" src={ this.pictureURL } alt={ this.name } />
                <div className="right-box">
                    <div className="product-price">
                        R$ { this.price.toFixed(2) }
                    </div>
                    <button className="produto-comprar">
                        Comprar
                    </button>
                </div>

                <div className="product-name">
                    { this.name }
                </div>
                <div className="product-ratings">
                    <p className>
                        <img src={starSVG} alt="star" width="20"/> { this.ratingsValue + " " } ({ this.ratingsQt })
                    </p>
                </div>
            </div>
        )
    }
}

export default Product;