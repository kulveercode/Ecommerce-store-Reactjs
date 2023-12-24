import React from 'react'
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";


export default function Cart() {
    const data = [
        {
          id: 1,
          img: "https://assets.ajio.com/medias/sys_master/root/20231130/bqsp/65679678ddf7791519a5b0ea/-473Wx593H-466837218-green-MODEL.jpg",
          img2: "https://assets.ajio.com/medias/sys_master/root/20231130/hLw6/65679678ddf7791519a5b073/-473Wx593H-466837218-green-MODEL6.jpg",
          title: "Men Quilted Regular Fit Puffer Jacket",
          desc: "Men winter puffed Jacket",
          isNew: true,
          oldPrice: 19,
          Price: 12,
        },
        {
          id: 2,
          img: "https://assets.ajio.com/medias/sys_master/root/20231130/bqsp/65679678ddf7791519a5b0ea/-473Wx593H-466837218-green-MODEL.jpg",
          img2: "https://assets.ajio.com/medias/sys_master/root/20231130/hLw6/65679678ddf7791519a5b073/-473Wx593H-466837218-green-MODEL6.jpg",
          title: "Men Quilted Regular Fit Puffer Jacket",
          desc: "Men winter puffed Jacket",
          isNew: true,
          oldPrice: 50,
          Price: 25,
        },
    ];
  return (
    <div className='cart'>
      <h1>Products in your Cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0, 100)}</p>
                <div className="price">1 X ${item.Price}</div>
            </div>
        <DeleteOutlinedIcon className='delete' />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className='reset'>Reset Cart</span>
    </div>
  )
}
