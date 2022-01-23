import React, {Component} from "react"
import Header from "./Header"
import SortBox from "./SortBox"
import ProductList from "./ProductList"
import {products} from "./database"
import "./app.css"

class App extends Component{
  render(){
    return(
        <React.Fragment >
          <Header/>
          <div className="contentContainer">
            <SortBox />
            <ProductList products={products} />
          </div>
        </React.Fragment>
      )
  }
}

export default App;
