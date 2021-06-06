import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import { render } from 'react-dom'
import Colors from './Colors'
import '../css/Details.css'
import '../css/Cart.css'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {
        //const alert = useAlert()
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
        }else{
            return (
                <>
                    {
                        cart.map(item =>(
                            <div className="details cart" key={item.id}>
                                <img src={item.image} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>${item.price * item.count}</span>
                                    </div>
            
                                    <p>{item.description}</p>
                                    <p>{item.content}</p>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item.id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item.id)}> + </button>
                                        <h3>${item.price * item.count}</h3>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item.id)}>X</div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <Link to="/payment">Payment</Link>
                        <h3>Total: ${total}</h3>
                    </div>
                </>
                )
            }
        }
}

export default Cart
