import React from "react";
import { MenuList } from "../component/Menulist";
import "../component/Menu.css";
import img1 from "../img/pineapple.jpg";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {/* {MenuList.map((menuItem, key) => {
          return (
            // <MenuItem
            //   key={key}
            //   image={menuItem.image}
            //   name={menuItem.name}
            //   price={menuItem.price}
            // />
          // );
        })} */}
      </div>
      <div className="image">
        <img className="img1" src={img1} />
      </div>
    </div>
  );
}

export default Menu;