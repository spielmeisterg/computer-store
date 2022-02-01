import React, {Component} from "react"

class Cart extends Component{
    render(){
        let total = 0
        return(
            <div className="sortbox">
                <h2>shopping cart</h2>
                
                {
                    this.props.cart.map(item => {
                            total = Number(total + (item.price*item.amount).toFixed(2))
                        return (<div className="item">
                            <p>{item.amount}</p>
                            <p>{item.title} </p>
                            <p className="price">€{(item.price*item.amount).toFixed(2)}</p>
                        </div>
                        )
                })
                }
                <h3>total: €{total}</h3>
                
                
            </div>
        )
    }
}

export default Cart