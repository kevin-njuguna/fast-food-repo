import { IoFastFoodOutline } from "react-icons/io5";
import { LiaCocktailSolid } from "react-icons/lia";
import { LuSalad } from "react-icons/lu";
import { GiChiliPepper } from "react-icons/gi";
import { GiCupcake } from "react-icons/gi";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <IoFastFoodOutline />
          <p className="header-text">All</p>
          <LiaCocktailSolid />
          <p className="header-text">Drinks</p>
          <LuSalad />
          <p className="header-text">Pizza</p>
          <GiChiliPepper />
          <p className="header-text">Spicy</p>
          <GiCupcake />
          <p className="header-text">Sweets</p>
        </div>

        <div className="cta">
          <button className="button-cta">View All</button>
        </div>
      </div>
    </>
  );
}
