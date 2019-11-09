import React, {useState, setState} from 'react'
import Product from './product'
import './productsList.css'


export default function ProductList(products) {
    const [lowerPrice, setLowerPrice] = useState(0)
    const [higherPrice, setHigherPrice] = useState(9999)

    
    function filterProducts(productsList, lowerPrice, higherPrice) {
        let newList = []
    
        for (let i = 0; i < productsList.length; ++i) {
            let product = productsList[i]
    
            if (product.getPrice() >= lowerPrice && product.getPrice() <= higherPrice) {
                newList.push(product)
            }
        }
    
        return newList
    }

    let filteredProducts = filterProducts(products, lowerPrice, higherPrice)

    return (
        <div className="products-list-container">
            <div className="filter-container">
                De: R$ <input className="inputFilter" type="text" name="minValue" value={lowerPrice} onChange={e => setLowerPrice(e.target.value)}/>
                Até: R$ <input className="inputFilter" type="text" name="minValue" value={higherPrice} onChange={e => setHigherPrice(e.target.value)}/>
            </div>

            <div className="productlist-container">
                <ul>
                    {
                        filteredProducts.map((product, index) => (
                            <li>
                                <React.Fragment key={ index }>
                                    { product.render() }
                                </React.Fragment>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
