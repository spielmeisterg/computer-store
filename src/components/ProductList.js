import React, {Component} from "react"
import Product from "./Product"

class ProductList extends Component{
    render(){
        const filtered = this.props.products.filter(item => this.props.brands.includes(item.category))
        if(this.props.price){
            console.log("price is set")
        }
        else{
            console.log("price is not set")
        }
        if (filtered.length === 0){
            return (
                <div className="productlist">
                    {this.props.products.map((item, key) => <Product product={item} key={key} addToCart={this.props.addToCart} />)}
                </div>
            )
        }
        else{
            return (
                <div className="productlist">
                    {filtered.map((item, key) => <Product product={item} key={key} addToCart={this.props.addToCart} />)}
                </div>
            )
        }
        
    }
}

export default ProductList