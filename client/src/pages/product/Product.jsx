import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

export default function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://render.fineartamerica.com/images/rendered/search/t-shirt/23/17/images-medium-5/law-and-order-logo-brand-a-transparent.png",
    "https://render.fineartamerica.com/images/rendered/search/t-shirt/23/9/images-medium-5/batman-classic-tv-show-logo-transparent.png",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>T-shirt men</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
          explicabo veritatis quasi perferendis ipsa doloribus nam ullam numquam
          maiores rem.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
        <span>DESCRIPTION</span>
        <hr />
        <span>ADDITIONAL INFORMATION</span>
        <hr />
        <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}
