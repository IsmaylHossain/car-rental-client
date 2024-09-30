import { Link, NavLink } from "react-router-dom";


import { routes } from "@/utils/route";
import Logo from "./Logo/Logo";
import Headroom from "react-headroom";
import MobileMenu from "./MobileMenu";



const Appber = () => {
    return (
     <Headroom>
       <div className="bg-black">
      <div className="max-w-screen-xl min-h-20 mx-auto flex items-center justify-between px-3 ">
        {/* Logo */}
        <Link to="/">
          <Logo />
        </Link>

        {/* Mobile device menus */}
        <MobileMenu />

        {/* Navigation menu */}
        <div className="md:flex items-center gap-8 hidden">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              className={({ isActive }) =>
                `font-medium text-gray-100 hover:text-[#e80a0a]  ${
                  isActive && "text-[#e80a0a]"
                }`
              }
              to={route.path}
            >
              {route.name}
            </NavLink>
          ))}
          <NavLink to="/login" className={({ isActive }) =>
                `font-medium text-gray-100 hover:text-[#e80a0a]  ${
                  isActive && "text-[#e80a0a]"
                }`
              }>
            
              Login
       
          </NavLink>
        </div>
      </div>
    </div>
     </Headroom>
    );
};

export default Appber;