import React, {useState, setState} from 'react'
import Product from './product'


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
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-2" id="sticky-sidebar">
                    <div class="container sticky-top">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Valor Mínimo R$</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Quantia" value={lowerPrice} onChange={e => setLowerPrice(e.target.value)}   />
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Valor Máximo R$</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Quantia" value={higherPrice} onChange={e => setHigherPrice(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div class="col-xl-9" id="main">
                    <div class="card-columns">
                        {
                            filteredProducts.map((product, index) => (
                                <React.Fragment key={ index }>
                                    { product.render() }
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
