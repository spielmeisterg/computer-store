import React, { Component } from "react"

class Product extends Component{
    render(){
        const {title, description, price, image, rating} = this.props.product
        return (
            <div className="product">
                <img src={image} alt={title} />
                <div className="flex-vertical description">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="flex-vertical">
                    <p>€{price}</p>
                    <p>rating: {rating.rate}</p>
                    <input type="text" pattern="[0-9]*" />
                    <button>add to cart</button>
                </div>
            </div>
        )
    }
}

export default Product