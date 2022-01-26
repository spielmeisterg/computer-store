import React, {Component} from "react"
import Product from "./Product"

class ProductList extends Component{
    render(){
        const filtered = this.props.products.filter(item => this.props.brands.includes(item.category))
        if (filtered.length === 0){
            console.log("filtered is empty, display all elements")
            return (
                <div className="productlist">
                    {this.props.products.map(item => <Product product={item} />)}
                </div>
            )
        }
        else{
            console.log("filtered is not empty, display the selected items")
            return (
                <div className="productlist">
                    {filtered.map(item => <Product product={item} />)}
                </div>
            )
        }
        
    }
}

export default ProductList