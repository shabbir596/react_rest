import React, { useContext } from 'react'
import { MainData } from '../App'
export default function Item(props) {
    const Data = useContext(MainData)
  return (
      props.items.map((item,index) => 
        <li className={`my-2 reveal ${item.type} item ${item.classlist === undefined ? '':item.classlist}`} key={props.categoryId+index}>
            <div className="card-1">
                <div className="card__inner_card d-flex justify-content-between ">
                    <div className="name">
                        {item.name} <br />
                        <div className="pric me-2 small">Rs.{item.price}.00</div>
                    </div>
                    <div className=" qty_group justify-content-end align-items-center">
                        <div className=" number-input d-flex justify-content-center align-items-center">
                            <button
                                // onclick="qty_dec(this.parentNode.querySelector('input[type=number]'), 'ab')"
                                onClick={() => {Data.decQuantity(props.mainId,index)}}
                                className="minus button-inc-dec text-center"
                            >
                                <i className="fas fa-minus" />
                            </button>
                            <span className='quantity_span'>
                                {item.quantity}
                            </span>
                            <button
                                // onclick="qty_inc(this.parentNode.querySelector('input[type=number]'), 'ab')"
                                onClick={() => {Data.incQuantity(props.mainId,index)}}
                                className="plus button-inc-dec text-center"
                            >
                                <i className="fas fa-plus" />
                            </button>
                        </div>
                    </div>
                    <div className="but">
                        <button
                            className="add_to_cart"
                            // onclick="add_to_cart(this,this.parentNode.parentNode.parentNode.querySelector('input[type=number]'), 'ab','a')"
                            onClick={() => {Data.addToCart(props.mainId,index)}}
                        >
                            <i className="fas fa-cart-plus" style={{ fontSize: 20 }} />
                        </button>
                    </div>
                </div>
                <div className="card__details p-2 d-flex justify-content-end position-relative align-items-center">
                    <div className="card__innercard1"></div>
                    <div className="card__innercard2"></div>
                    <div className="text-dark total me-3 small">
                        Total(<span id="ab_getprice">{item.price}</span> x <span id="ab">{item.quantity === undefined ? 1 : item.quantity}</span>):
                        <span id="ab_price">{item.price * (item.quantity === undefined ? 1 : item.quantity)}</span>
                    </div>
                </div>
            </div>
        </li>
    )
  )
}
