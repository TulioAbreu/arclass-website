import React from 'react'
import Product from './product'
import './productsList.css'

class ProductList extends React.Component {
    constructor(products) {
        super()
        this.products = products
    }

    render() {
        return (
            <div className="productlist-container">
                <ul>
                    {
                        this.products.map((product, index) => (
                            <li>
                                <React.Fragment key={ index }>
                                    { product.render() }
                                </React.Fragment>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default ProductList;