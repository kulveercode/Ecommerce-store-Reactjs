import React from 'react'
import "./Footer.scss";

export default function Footer() {
  return (
    <div className='footer'>
        <div className="top">
          <div className="item">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
          <div className="item">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className="item">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi sint voluptates autem incidunt necessitatibus vero saepe perferendis, culpa accusamus?</p>
          </div>
          <div className="item">
            <h1>Contact</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eius ea omnis hic molestiae commodi necessitatibus ipsa, perferendis cum explicabo vero velit provident pariatur possimus!</p>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className='logo'>E-Store</span>
            <span className='copyright'> © Copyright 2023. All rights reserved</span>
          </div>
          <div className="right">
            <img src="/img/payment.png" alt="" />
          </div>
        </div>
    </div>
  )
}
