import React, { Component } from "react"
import {products} from "./database"

class SortBox extends Component{
    constructor(){
        super()
        this.state = ({sliderValue: 0, highestPrice: 0})
    }
    sliderChange = () => {
        this.setState({sliderValue: document.getElementById("price").value})
        document.querySelector("#inputValue").innerText = this.state.sliderValue
    }


    render(){
        let categories = []
        return (
            <div className="sortbox">
                <h2>sort:</h2>
                <h3>brand:</h3>
                {
                products.map((product, id) => {
                    if(!categories.includes(product.category)){
                    categories.push(product.category)
                    return(
                        <div className="flex-horizontal" key={id}>
                            <input type="checkbox" id={product.category} onChange={this.props.checked} /> <p>{product.category}</p>
                        </div>
                    )}else{
                        return false
                    }
                })}
                <hr />
            </div>

)
}
}

export default SortBox