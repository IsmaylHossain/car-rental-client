import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { routes } from "@/utils/route";


import { Link, NavLink } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger>
          <Button className="text-xl font-medium bg-transparent p-0 bg-second hover:bg-second">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col justify-between items-center">
          <SheetHeader className="w-full">
            <SheetTitle className="text-xl mb-4 ">Menu</SheetTitle>

            <div className="flex flex-col space-y-2">
              {routes.map((route) => (
                <SheetClose asChild key={route.path}>
                  <NavLink
                    key={route.path}
                    className={({ isActive }) =>
                      `font-medium text-gray-100 hover:text-orange-500 uppercase p-2 border-b ${
                        isActive && "text-orange-500"
                      }`
                    }
                    to={route.path}
                  >
                    {route.name}
                  </NavLink>
                </SheetClose>
              ))}
            </div>
          </SheetHeader>
          <SheetFooter className=" w-full">
            <Link to="/login">
              <Button className="text-gray-100 w-full bg-[#E80A0A] hover:bg-[#c10202]">
                LOGIN
              </Button>
            </Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
