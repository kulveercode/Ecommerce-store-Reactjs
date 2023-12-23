import React from "react";
import "./List.scss";
import Card from "../Card/Card";

export default function List() {
  const data = [
    {
      id: 1,
      img: "https://assets.ajio.com/medias/sys_master/root/20231130/bqsp/65679678ddf7791519a5b0ea/-473Wx593H-466837218-green-MODEL.jpg",
      img2: "https://assets.ajio.com/medias/sys_master/root/20231130/hLw6/65679678ddf7791519a5b073/-473Wx593H-466837218-green-MODEL6.jpg",
      title: "Men Quilted Regular Fit Puffer Jacket",
      isNew: true,
      oldPrice: 19,
      Price: 12,
    },
    {
      id: 2,
      img: "https://assets.ajio.com/medias/sys_master/root/20231130/bqsp/65679678ddf7791519a5b0ea/-473Wx593H-466837218-green-MODEL.jpg",
      img2: "https://assets.ajio.com/medias/sys_master/root/20231130/hLw6/65679678ddf7791519a5b073/-473Wx593H-466837218-green-MODEL6.jpg",
      title: "Men Quilted Regular Fit Puffer Jacket",
      isNew: true,
      oldPrice: 50,
      Price: 25,
    },
    {
      id: 3,
      img: "https://assets.ajio.com/medias/sys_master/root/20231130/bqsp/65679678ddf7791519a5b0ea/-473Wx593H-466837218-green-MODEL.jpg",
      img2: "https://assets.ajio.com/medias/sys_master/root/20231130/hLw6/65679678ddf7791519a5b073/-473Wx593H-466837218-green-MODEL6.jpg",
      title: "Men Quilted Regular Fit Puffer Jacket",
      isNew: true,
      oldPrice: 45,
      Price: 22,
    },
    {
      id: 4,
      img: "https://assets.ajio.com/medias/sys_master/root/20231130/bqsp/65679678ddf7791519a5b0ea/-473Wx593H-466837218-green-MODEL.jpg",
      img2: "https://assets.ajio.com/medias/sys_master/root/20231130/hLw6/65679678ddf7791519a5b073/-473Wx593H-466837218-green-MODEL6.jpg",
      title: "Men Quilted Regular Fit Puffer Jacket",
      isNew: true,
      oldPrice: 55,
      Price: 38,
    },
  ];

  return <div className="list">{data?.map(item=>(
    <Card item={item} key={item.id} />
  ))}
  </div>;
}
