import React from 'react'
import "./Categories.scss";
import { Link } from "react-router-dom";


export default function Categories() {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
            <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/tweed-suit-jackets-tom-gowanlock.jpg" alt="" />
            <button>
                <Link className="link" to="/products/1">Sale</Link>
            </button>
        </div>
        <div className="row">
        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVuJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <button>
                <Link className="link" to="/products/1">Women</Link>
            </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
        <img src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fHww" alt="" />
            <button>
                <Link className="link" to="/products/1">New Season</Link>
            </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
            <div className="col">
                <div className="row">
                <img src="https://media.istockphoto.com/id/1322913815/photo/young-bearded-businessman-sitting-on-desk-and-posing.webp?b=1&s=170667a&w=0&k=20&c=v8XiUc-TUyBORZD75IRq9ryYERh-oxGBspSz4fKGQtE=" alt="" />
            <button>
                <Link className="link" to="/products/1">Men</Link>
            </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src="https://images.unsplash.com/photo-1506169894395-36397e4aaee4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFjY2Vzc29yaWVzfGVufDB8fDB8fHww" alt="" />
            <button>
                <Link className="link" to="/products/1">Accessories</Link>
            </button>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="row">
            <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fHww" alt="" />
            <button>
                <Link className="link" to="/products/1">Shoes</Link>
            </button>
            </div>
        </div>
      </div>
    </div>
  )
}
