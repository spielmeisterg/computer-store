import React, {Component} from "react"

class Cart extends Component{
    render(){
        let result = this.props.cart.map(item => item.amount*item.price)

        let total = result.reduce((item, a) => a += item, 0)
        return(
            <div className="sortbox">
                <h2>shopping cart</h2>
                
                {
                    this.props.cart.map((item, i) => {
                        return (
                            <div className="item" key={i} id={item.id}>
                                <p>{item.amount}</p>
                                <p>{item.title} </p>
                                <p className="price">€{(item.price*item.amount).toFixed(2)}</p>
                                <div onClick={this.props.remove} style={{border: "1px solid black", width: "100%", height: "100%"}}><b>x</b></div>
                            </div>
                        )
                })
                }
                <h3>total: €{total.toFixed(2)}</h3>
                
            </div>
                
        )
    }
}

export default Cart