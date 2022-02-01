import React, {Component} from "react"
import Header from "./Header"
import SortBox from "./SortBox"
import Cart from "./Cart"
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
  const input = Number(e.target.previousSibling.value)
  let result = products.filter(item => item.id === productId)
  const {id, title, price} = result[0]
  let updatedCart = this.state.cart 
  let i
  let duplicate = updatedCart.filter((item, index) => {
    if(item.id === id){
      i = index
    }
    return item.id === id
  })
  
  
  if(duplicate.length === 1){
    // input ? updatedCart[i].amount + input : updatedCart[i].amount++
    updatedCart[i].amount += input ? input : 1
  }
  else{

    updatedCart.push({amount: input, title: title, price: price, id: id})
  }

  i = undefined
  this.setState(updatedCart)


























  // let updatedCart = this.state.cart
  // let {id, price, title} = result[0]
  
  
  // console.log("state:  ",this.state.cart)
  // let checkdouble = this.state.cart.filter(item => item.id === productId)
  // console.log("pid", productId)
  // if(checkdouble){
  //   if(checkdouble.length){
  //     let items = this.state.cart
  //     let i
  //     let item = items.filter((item, index) => {
  //       i = index
  //       return item.id === productId
  //   })
  //     item[0].amount++
  //     items[i] = item[0]
  //     // updatedCart = items
  //   }
  //   else{
  //     updatedCart.push({amount: 1,id: id, title: title, price: price})
  //     this.setState({cart: updatedCart})
  //   }
  // }
  
  
  
  
  
  

}
  render(){
    return(
        <React.Fragment>
          <Header/>
          <div className="contentContainer">
            <div className="sidebar">
              <SortBox checked={this.checkedBrand}/>
              <Cart cart={this.state.cart}/>
            </div>
            <ProductList products={products} brands={this.state.brands} addToCart={this.addToCart} />
          </div>
        </React.Fragment>
      )
  }
}

export default App;