import React, {Component} from "react"

class Cart extends Component{
    render(){
        let result = this.props.cart.map(item => item.amount*item.price)

        let total = result.reduce((item, a) => a += item, 0)
        console.log(total)
        return(
            <div className="sortbox">
                <h2>shopping cart</h2>
                
                {
                    this.props.cart.map(item => {
                            // total += Number(total + (item.price*item.amount).toFixed(2))
                        return (<div className="item">
                            <p>{item.amount}</p>
                            <p>{item.title} </p>
                            <p className="price">€{(item.price*item.amount).toFixed(2)}</p>
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