import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import company_data from "./company_data.json";

export const socialLinks_list = [
  {
    href: company_data.social_links.youtube,
    label: "YouTube",
    icon: FaYoutube,
    className: "text-red-600 hover:text-red-800",
  },
  {
    href: company_data.social_links.twitter,
    label: "Twitter",
    icon: FaTwitter,
    className: "text-blue-500 hover:text-blue-700",
  },
  {
    href: company_data.social_links.instagram,
    label: "Instagram",
    icon: FaInstagram,
    className: "text-pink-500 hover:text-pink-700",
  },
];
