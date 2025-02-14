import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/sushmitha-baliga-b-202286263/",
  github: "https://github.com/SUSH9391",
  twitter: "https://twitter.com",
  instagram: "https://www.instagram.com/_.xsushhhhx._/",
};

const handleClick = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin onClick={() => handleClick(socialLinks.linkedin)} className="cursor-pointer" />
        <FaGithub onClick={() => handleClick(socialLinks.github)} className="cursor-pointer" />
        <FaXTwitter onClick={() => handleClick(socialLinks.twitter)} className="cursor-pointer" />
        <FaInstagram onClick={() => handleClick(socialLinks.instagram)} className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
