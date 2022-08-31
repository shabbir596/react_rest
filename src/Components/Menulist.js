/* eslint-disable no-unused-vars */
import React, { Component, useContext } from 'react'
import './style/Menulist.css'; 
import Isotope from 'isotope-layout';
import MenuListMain from './MenuListMain';

function reveal() {
    var reveals = document.querySelectorAll('.reveal')
    for(var i=0; i< reveals.length;i++){
        var windowHeight=window.innerHeight
        var revealTop = reveals[i].getBoundingClientRect().top
        var revealPOint=-100
        
        if (revealTop < windowHeight - revealPOint) {
            reveals[i].classList.add('active')
        }
    }
}

export default class Menulist extends Component {
    constructor(props) {
        super(props);
        console.log('Menulist it changes', this.props.menuData);
    }
    
    componentDidMount() {
        console.log('Menulist componentDidMount');  
        let grid = document.querySelector('.grid')
        let loader = document.getElementById('preloader')
        setTimeout(()=>{
            loader.classList.add("d-none")
        },1000)
        let masonry= new Isotope(grid, {
        itemSelector: '.grid-item',
        columnWidth: 10
      });
      reveal();
    }
    render() {
        // console.log('Menulist render', this.FetchData.menuData);
        return (
            <div className="grid row cards p-sm-0 mx-1 w-100" id="menu_cards_container">
                <MenuListMain addToCart={this.props.addToCart} />
            </div>
            
        )
    }
}