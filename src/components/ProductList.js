import React, {Component} from "react"
import Product from "./Product"

class ProductList extends Component{

    render(){
        console.log(this.props.products)
        return (
            <div className="productlist">
                {this.props.products.map(item => <Product product={item} />)}
            </div>
        )
    }
}

export default ProductList