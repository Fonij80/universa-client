import logoImage from "@/assets/images/universa.png";
import { NavLink } from "react-router-dom";

export const Logo = () => {
  return (
    <NavLink to="/">
      <img src={logoImage} alt="Logo" className="h-12" />
    </NavLink>
  );
};
