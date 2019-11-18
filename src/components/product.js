import React from 'react'

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

    getPrice() {
        return this.price
    }

    render() {
        return (
            <div class="card p-3">
                <img class="card-img-top" src={ this.pictureURL } alt={ this.name }/>
                <div class="card-body">
                    <div class="float-left">
                        <h5 class="card-title h2">{ this.name }</h5>
                        <p class="card-text"><img src={starSVG} alt="star" width="20"/> { this.ratingsValue + " " } ({ this.ratingsQt })</p>
                    </div>

                    <div class="float-right">
                        <p class="card-text text-right h3">R$ { this.price.toFixed(2) }</p>
                        <a class="btn btn-primary btn-lg" href="/black-hole">
                            Comprar
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;