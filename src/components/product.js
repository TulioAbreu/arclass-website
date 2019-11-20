import React from 'react'
import starSVG from '../assets/star.svg'
import productsList from '../assets/products.json'

var images = require.context('../assets/pictures', true);

class Product extends React.Component {
    constructor(id, name, price, pictureURL, ratingsQt, ratingsValue) {
        super()
        this.id = id
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
        const img = images(this.pictureURL)
        return (
            <div class="card p-3">
                <img class="card-img-top" src={ img } alt={ this.name } />
                <div class="card-body0">
                    <div class="float-left">
                        <h5 class="card-title h2">{ this.name }</h5>
                        <p class="card-text"><img src={starSVG} alt="star" width="20"/> { this.ratingsValue + " " } ({ this.ratingsQt })</p>
                    </div>

                    <div class="float-right">
                        <p class="card-text text-right h3">
                            { this.price === 0?
                                "FREE"
                                :
                                `R$ ${this.price.toFixed(2)}`
                            }
                        </p>
                        <a class="btn btn-primary btn-lg" href={`/product/${this.id}`}>
                            Comprar
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;