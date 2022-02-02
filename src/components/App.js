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
  this.itemAdded()
}
itemAdded(){
  const hamburger = document.querySelector(".show")
  hamburger.classList.add("effect")
  setTimeout(e =>{
    hamburger.classList.remove("effect")
  }, 200)
}

sidebarToggle = (e) =>{
  const header = document.querySelector("header")
  const sidebar = document.querySelector(".sidebar")
  
  header.classList.toggle("right")
  sidebar.classList.toggle("sidebarhidden")
  console.log(sidebar)
}
  render(){
    return(
        <React.Fragment>
          <Header/>
          <div className="contentContainer">
            <div onClick={this.sidebarToggle} className="show">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
                alt="hamburger menu button" 
                // width="35px" 
                // height="35px" 
              />
            </div>
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