import React, { useContext } from 'react'
import Menu from './Menu.js'
import {MainData} from '../App.js'

export default function MenuListMain(props) {

    const Data = useContext(MainData)
    return (
        Data.menuData.map((menu,index) =>
            <Menu menu={menu} key={index+'_id'} mainId={index} addToCart={props.addToCart}/>
        )
    )
}
