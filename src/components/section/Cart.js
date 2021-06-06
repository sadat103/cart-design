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
            return <h2 style={{textAlign:"center"}}>No Product</h2>
        }else{
            return (
                <>
                    {
                        
                        cart.map(item =>(
                            <div className="details cart" key={item.id}>
                    
                                <img src={item.image}  alt="" width="10" height="10"/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
    
                                    </div>
            
                                    
                                    <p>{item.content}</p>
                                    <span></span>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item.id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item.id)}> + </button>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span1>৳{item.price}</span1>
                                        <button className="count1" > × </button>
                                        <span2>{item.count}</span2>
                                        <button className="count1" > = </button>
                                        <span1>৳{(item.price * item.count).toFixed(2)}</span1>

                        
                                    </div>
                            
                                </div>
                                <div className="delete" onClick={() => removeProduct(item.id)}>X</div>
                            </div>
                        ))
                    }
                     <div className="new1"></div>
                    <div className="total1">
            
                        
                        <h5>Sub-Total  =  ৳ {(total).toFixed(2)}</h5>
                    </div>
                    <div className="total1">
            
                        
                        <h5>Delivery-Charge  =   ৳ 30 </h5>
                    </div>
                    <div className="new1"> </div>
                    <div className="total">
                        <Link to="/payment">Payment</Link>
                        <h3>Grand-Total  =  ৳ {(total+30).toFixed(2)}</h3>
                    </div>
                </>
                )
            }
        }
}

export default Cart
