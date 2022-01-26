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
    
    componentDidMount(){
        let highestPrice
        products.forEach(product => {
            if(highestPrice){
                if(product.price > highestPrice){
                    highestPrice = product.price
                }
            }
            else{
                highestPrice = product.price
            } 
        })
        this.setState({sliderValue: document.getElementById("price").value, highestPrice: highestPrice})
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
                    </div>)}
                })}
                <hr/>
                <h3>price:</h3>
                <input type="range" id="price" value={this.state.sliderValue} name="price" min="0" max={this.state.highestPrice} onChange={this.sliderChange} />
                <p id="inputValue"></p>
            </div>

)
}
}

export default SortBox