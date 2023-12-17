import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link to="/">E-store</Link>
        </div>
        <div className="right">
        <div className="center">
          <Link to="/">Homepage</Link>
        </div>
        <div className="center">
          <Link to="/">About</Link>
        </div>
        <div className="center">
          <Link to="/">Contact</Link>
        </div>
        <div className="center">
          <Link to="/">Stores</Link>
        </div>
        <div className="icons">
          <SearchIcon />
          <PersonOutlineIcon />
          <FavoriteBorderIcon />
          <div className="cartIcon">
            <AddShoppingCartIcon />
            <span>0</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}