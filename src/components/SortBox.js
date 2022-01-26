import React, { Component } from "react"
import {products} from "./database"

class SortBox extends Component{

    checked = (e) => {
        if(e.target.checked){
            console.log(e.target.id + " is checked")
        }
        else{
            console.log(e.target.id + " is not checked")
        }
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
                
            </div>

        )
    }
}

export default SortBox