import React, {Component} from "react"
import Product from "./Product"

class ProductList extends Component{
    render(){
        let filtered = this.props.products.filter(item => this.props.brands.includes(item.category))
        const min = this.props.price.lowest
        const max = this.props.price.highest
        if(filtered.length === 0){
            filtered = this.props.products.filter(item => item.price >= min && item.price <= max)
        }
        filtered = filtered.filter(item => item.price >= min && item.price <= max)
        
        console.log(filtered)
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