import React, {Component} from "react"
import Header from "./Header"
import SortBox from "./SortBox"
import ProductList from "./ProductList"
import {products} from "./database"
import "./app.css"

class App extends Component{
  constructor(){
    super()
    this.state = {brands: []}
  }
  checked = (e) => {
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
  render(){
    return(
        <React.Fragment>
          <Header/>
          <div className="contentContainer">
            <SortBox checked={this.checked}/>
            <ProductList products={products} brands={this.state.brands} />
          </div>
        </React.Fragment>
      )
  }
}

export default App;