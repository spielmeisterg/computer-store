import React, {Component} from "react"
import Header from "./Header"
import SortBox from "./SortBox"
import ProductList from "./ProductList"
import {products} from "./database"
import "./app.css"

class App extends Component{
  constructor(){
    super()
    this.state = {brands: [], cart: []}
  }
  checkedBrand = (e) => {
    let updatedBrands = this.state.brands
    if(e.target.checked){
        updatedBrands.push(e.target.id)
        this.setState({brands: updatedBrands})
    }
    else{
        updatedBrands = updatedBrands.filter(item => item !== e.target.id)
        this.setState({brands: updatedBrands})
    }
}
addToCart = (e) => {
  const productId = Number(e.target.parentElement.parentElement.id)

  let result = products.filter(item => item.id === productId)
  if(result.length === 1){
    let updatedCart = this.state.cart
    let {id, price, title} = result[0]
    let valueble = {id: id, title: title, price: price}
    updatedCart.push(valueble)
    console.log("state:  ",this.state.cart)
    this.setState({cart: updatedCart})
  }
}
  render(){
    return(
        <React.Fragment>
          <Header/>
          <div className="contentContainer">
            <SortBox checked={this.checkedBrand}/>
            <ProductList products={products} brands={this.state.brands} addToCart={this.addToCart} />
          </div>
        </React.Fragment>
      )
  }
}

export default App;