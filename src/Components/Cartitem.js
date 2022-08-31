/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import { MainData } from '../App'
import './style/cart.css';

export default function Cartitem() {
    const Data = useContext(MainData)
    let cartItem= Data.cart.map((cart_item) => {
        let [category,item] = cart_item.split('_')
        return Data.menuData[parseInt(category)].aitem[parseInt(item)]
    })
  return (
    <div className="row" id='cart_items'>
        <div className="card col-12 border-0 ">
            {/* <div class="header">
                    <h2 class="h_color">Table No. 001</h2>
                </div>  */}
            <div className="card-body p-0 m-0">
            <ul className='mt-3'>
                <li className=" veg">
                <div className="card-1">
                    <div className="card__inner_card p-3">
                    <div className="name h4 mb-0 text-center" id="table_no">
                        Table No. 01
                    </div>
                    {/* <div class=" d-flex justify-content-end align-items-center">
                                
                            </div> */}
                    </div>
                    <div className="card__innercard1"></div>
                    <div className="card__innercard2"></div>
                    <div className="pt-2">
                    <table className="table table-borderless ">
                        <tbody id="main_cart_items_list">
                            <ItemList cartItem={cartItem} />
                        </tbody>
                    </table>
                    </div>
                </div>
                </li>
            </ul>
                {/* <a
                    href="index.html?res=restaurant1&tab=table1"
                    className="float-end more_btn me-4"
                    id="add_item_button"
                >
                    Add Item{" "}
                </a> */}
            </div>
        </div>
        <div className="col-12  ms-auto my-3  my-md-0 ">
            <div className="card border-0">
            <div className="header">
                <h2 className="h_color" id="desc_header">
                Description
                </h2>
            </div>
            <div className="card-body p-0 m-0">
                <ul className="desc_container">
                <li className="border-bottom">
                    <div className="card-desc d-flex justify-content-between">
                    <div className="position-relative ">
                        <div className=" d-flex justify-content-between p-3">
                        <b>
                            <span id="desc_count">{cartItem.length}</span>
                            <span className="text"> Items</span>
                        </b>
                        </div>
                    </div>
                    <div className="card__details d-flex px-4 justify-content-end align-items-center">
                        <div className="text-dark font-weight-bold me-3">
                        <b>
                            <span id="desc_total">Rs.{Data.totalPrice}.00</span>{" "}
                        </b>
                        </div>
                    </div>
                    </div>
                </li>
                <li className="">
                    <div className="card-desc d-flex justify-content-between">
                    <div className="position-relative ">
                        <div className=" d-flex justify-content-between p-3 desc_cgst">
                        CGST(+{Data.taxRate.cgst}%)
                        </div>
                    </div>
                    <div className="card__details d-flex px-4 justify-content-end align-items-center">
                        <div className="text-dark total me-3" id="desc_cgst">
                            {(Data.totalPrice * Data.taxRate.cgst)/100}.00
                        </div>
                    </div>
                    </div>
                </li>
                <li className="">
                    <div className="card-desc d-flex justify-content-between">
                    <div className="position-relative ">
                        <div className=" d-flex justify-content-between p-3 desc_sgst">
                        SGST(+{Data.taxRate.sgst}%)
                        </div>
                    </div>
                    <div className="card__details d-flex px-4 justify-content-end align-items-center">
                        <div className="text-dark total me-3" id="desc_sgst">
                        {(Data.totalPrice * Data.taxRate.sgst)/100}.00
                        </div>
                    </div>
                    </div>
                </li>
                <li className=" non-veg">
                    <div className="card-desc d-flex justify-content-between">
                    <div className="position-relative ">
                        <div className=" d-flex justify-content-between p-3">
                        <span className="desc_text" id="g_total">
                            Grand Total
                        </span>
                        </div>
                    </div>
                    <div className="card__details d-flex px-4 justify-content-end align-items-center">
                        <div className=" d-flex justify-content-end align-items-center"></div>
                        <div className="total me-3 desc_text" id="grand_total_plus_gst">
                        Rs.{Data.totalPrice + ((Data.totalPrice * Data.taxRate.sgst)/100) + ((Data.totalPrice * Data.taxRate.cgst)/100)}.00
                        </div>
                    </div>
                    </div>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>

  )
}

function ItemList(props){
    const Data = useContext(MainData)
    return (
        props.cartItem.map((item,index) => 
        <tr className="border-bottom rounded-bottom" key={'cartno'+index}>
            <td>{item.name}</td>
            <td>
                <div className=" number-input d-flex justify-content-center align-items-center">
                    {item.price}X
                    <span className='quantity_span'>
                        {item.quantity}
                    </span>
                    :{item.price * item.quantity}
                </div>
            </td>
            <td>
                <button className="add_to_cart text-danger" onClick={() => {Data.deleteCartItem(index)}}>
                    <i className="fas fa-trash" style={{ fontSize: 15 }} />
                </button>
            </td>
        </tr>
        )
    )
}
