import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

// Implementation of MUI ImageList (standard) adapted from MUI documentation at https://mui.com/material-ui/react-image-list/

export default function HomepageImageList() {
  return (
    <ImageList
      sx={{ width: "100%", height: "auto" }}
      cols={3}
      rowHeight={"auto"}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{ width: "100%", height: "auto" }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "/hero.jpg",
    title: "Paella de Marisco",
  },
  {
    img: "/chef.png",
    title: "Chef",
  },
  {
    img: "/valenciana.png",
    title: "Paella Valenciana",
  },
  {
    img: "/chefs.jpg",
    title: "Chefs",
  },
  {
    img: "/storefront.jpg",
    title: "Sign outside wine bar",
  },
  {
    img: "/serving.jpg",
    title: "Chefs serving paella at an early event",
  },
];
