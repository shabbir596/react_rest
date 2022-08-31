import React from 'react'
import Item from './Item.js'
// import noteContext from '../context/noteContext';

export default function Menu(props) {
  return (
    <div className="card grid-item menu_card col-12 col-md-6 col-lg-4 text-light px-1 p-0 border-0"  >
        <div className="card-header w-100 ">
            <h3 className="text-start m-0">
                <span className="text-decoration-underline"> {props.menu.category} </span>
            </h3>
            <small className="text-dark">Main course</small>
        </div>
        <div className="card-body p-0 p-md-3">
            <ul className="" key={props.menu.mid}>
                <Item items={props.menu.aitem} mainId={props.mainId} categoryId={props.menu.mid} addToCart={props.addToCart} />
            </ul>
        </div>
    </div>

  )
}
