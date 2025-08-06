import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function HomepageImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "/assets/hero.jpg",
    title: "Paella de Marisco",
  },
  {
    img: "/assets/chef.png",
    title: "Chef",
  },
  {
    img: "/assets/valenciana.png",
    title: "Paella Valenciana",
  },
  {
    img: "/assets/chefs.jpg",
    title: "Chefs",
  },
  {
    img: "/assets/storefront.jpg",
    title: "Sign outside wine bar",
  },
  {
    img: "/assets/serving.jpg",
    title: "Chefs serving paella at an early event",
  },
];
