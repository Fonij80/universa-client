import logoImage from "@/assets/images/Universa_Logo.png";
import { NavLink } from "react-router-dom";

export const Logo = () => {
  return (
    <NavLink to="/">
      <img src={logoImage} alt="Logo" className="h-12" />
    </NavLink>
  );
};
