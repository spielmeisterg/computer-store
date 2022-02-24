import React, { Component } from "react"
import {products} from "./database"

class SortBox extends Component{
    constructor(){
        super()
        this.state = ({sliderValue: 0, highestPrice: 0})
        
        
    }

    render(){
        let categories = []
        let highest = 0
        let lowest = 999
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
                <h3>price:</h3>
                {
                    
                    products.forEach(item => {
                        if(item.price > highest){
                            highest = item.price
                        }
                        if(item.price < lowest){
                            lowest = item.price
                        }
                    })
                }
                <div className="grid">
                    <label htmlFor="low">lowest price: </label><input onChange={this.props.price} type="number" id="low" defaultValue={Number(lowest)}/><br/>
                    <label htmlFor="high"></label>highest price: <input onChange={this.props.price} type="number" id="high" defaultValue={Number(highest)}/>
                </div>
            </div>

)
}
}

export default SortBox