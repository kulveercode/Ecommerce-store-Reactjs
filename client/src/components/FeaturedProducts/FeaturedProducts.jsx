import React from 'react';
import "./FeaturedProducts.scss";
import Card from '../Card/Card';


export default function FeaturedProducts({type}) {

    const data = [
      {
        id: 1,
        img: "https://render.fineartamerica.com/images/rendered/search/t-shirt/23/17/images-medium-5/superman-rusted-shield-brand-a-transparent.png",
        img2: "https://m.media-amazon.com/images/I/916HM61cBHL._SX569_.jpg",
        title: "Men's Regular Fit T-Shirt",
        isNew: true,
        oldPrice: 19,
        Price: 12,
      },
      {
        id: 2,
        img: "https://m.media-amazon.com/images/I/81sZxHm33LL._SX569_.jpg",
        img2: "https://m.media-amazon.com/images/I/916HM61cBHL._SX569_.jpg",
        title: "Men's Regular Fit T-Shirt",
        isNew: true,
        oldPrice: 19,
        Price: 12,
      },
      {
        id: 3,
        img: "https://m.media-amazon.com/images/I/81sZxHm33LL._SX569_.jpg",
        img2: "https://m.media-amazon.com/images/I/916HM61cBHL._SX569_.jpg",
        title: "Men's Regular Fit T-Shirt",
        isNew: false,
        oldPrice: 19,
        Price: 12,
      },
      {
        id: 4,
        img: "https://m.media-amazon.com/images/I/81sZxHm33LL._SX569_.jpg",
        img2: "https://m.media-amazon.com/images/I/916HM61cBHL._SX569_.jpg",
        title: "Men's Regular Fit T-Shirt",
        isNew: false,
        oldPrice: 19,
        Price: 12,
      },

    ]
    
  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ipsum porro odio nostrum est at obcaecati ex eius enim commodi quisquam totam quaerat molestias facere sint consectetur aperiam, sequi deleniti! Soluta quas et, saepe hic aperiam corrupti veritatis expedita suscipit fuga culpa, excepturi dolores, recusandae vel inventore eveniet pariatur voluptates.</p>
      </div>
      <div className="bottom">
        {data.map(item=>(
            <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
