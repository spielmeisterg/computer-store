import React, { Component } from "react"

class Product extends Component{
    render(){
        const {title, description, price, image, rating, id} = this.props.product
        return (
            <div className="product" id={id}>
                <img src={image} alt={title} />
                <div className="flex-vertical description">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="flex-vertical">
                    <p>€{price}</p>
                    <p>rating: {rating.rate}</p>
                    <input type="number" defaultValue="1" />
                    <button onClick={this.props.addToCart}>add to cart</button>
                </div>
            </div>
        )
    }
}

export default Product