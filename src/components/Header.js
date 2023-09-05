import React, { useState } from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import { open } from "../redux/showCart";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isTrue } = useSelector((state) => state.modalData);
  const { show } = useSelector((state) => state.cartState);

  return (
    <>
      <div
        className={
          isTrue || show
            ? "blur-lg pointer-events-none select-none bg-white text-gray-600 shadow fixed top-0 w-full"
            : "bg-white text-gray-600 shadow fixed top-0 w-full"
        }
      >
        {MobileHeader()}
        <div className="max-w-[90%] mx-auto py-4 justify-between items-center hidden sm:flex ">
          <NavLink to="/">
            <div className="text-3xl font-bold md:text-4xl">The Store</div>
          </NavLink>
          <div className="flex gap-6 justify-between items-center">
            <div className="flex gap-2">
              <NavLink to="/">
                <p
                  className={
                    location.pathname === "/"
                      ? "text-sm text-gray-950 font-bold md:text-xl"
                      : "text-sm hover:text-gray-950 md:text-xl"
                  }
                >
                  Home
                </p>
              </NavLink>
              <NavLink to="men">
                <p
                  className={
                    location.pathname === "/men"
                      ? "text-sm text-gray-950 font-bold md:text-xl"
                      : "text-sm hover:text-gray-950 md:text-xl"
                  }
                >
                  Men
                </p>
              </NavLink>
              <NavLink to="women">
                <p
                  className={
                    location.pathname === "/women"
                      ? "text-sm text-gray-950 font-bold md:text-xl"
                      : "text-sm hover:text-gray-950 md:text-xl"
                  }
                >
                  Women
                </p>
              </NavLink>
              <NavLink to="jewelry">
                <p
                  className={
                    location.pathname === "/jewelry"
                      ? "text-sm text-gray-950 font-bold md:text-xl"
                      : "text-sm hover:text-gray-950 md:text-xl"
                  }
                >
                  Jewelry
                </p>
              </NavLink>
              <NavLink to="electronics">
                <p
                  className={
                    location.pathname === "/electronics"
                      ? "text-sm text-gray-950 font-bold md:text-xl"
                      : "text-sm hover:text-gray-950 md:text-xl"
                  }
                >
                  Electronics
                </p>
              </NavLink>
            </div>
            <div className="font-bold text-2xl hover:text-gray-950">
              <RiShoppingCartFill
                className="text-4xl cursor-pointer"
                onClick={() => dispatch(open())}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//Mobile navbar

function MobileHeader() {
  const [dropDown, setDropDown] = useState(false);
  const [mobileActive, setMobileActive] = useState(0);
  const dispatch = useDispatch();
  const { isTrue } = useSelector((state) => state.modalData);
  const { show } = useSelector((state) => state.cartState);

  const handleClick = (id) => {
    setMobileActive(id);
    setDropDown(false);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={
        isTrue || show
          ? "blur-lg pointer-events-none select-none flex justify-between max-w-[95%] mx-auto py-2 sm:hidden"
          : "flex justify-between max-w-[95%] mx-auto py-2 sm:hidden"
      }
    >
      <Link to="/">
        <div className="text-xl font-semibold" onClick={()=>setMobileActive(0)}>The Store</div>
      </Link>
      <div className="flex gap-5">
        <div className="flex flex-col gap-2 items-center relative">
          <div className="flex items-center justify-between gap-1 border-2 rounded-lg px-3 py-1 text-sm cursor-pointer max-w-[7rem] min-w-[5rem]">
            <p
              className="font-semibold"
              onClick={() => setDropDown((prev) => !prev)}
            >
              {mobileActive === 0 && "Home"}
              {mobileActive === 2 && "Men"}
              {mobileActive === 3 && "Women"}
              {mobileActive === 4 && "Jewelry"}
              {mobileActive === 5 && "Electronics"}
            </p>
            {!dropDown ? (
              <MdKeyboardArrowDown
                className="mt-1"
                onClick={() => setDropDown((prev) => !prev)}
              />
            ) : (
              <MdKeyboardArrowUp
                className="mt-1"
                onClick={() => setDropDown((prev) => !prev)}
              />
            )}
          </div>
          {dropDown && (
            <div className="absolute top-11 flex flex-col items-center gap-1 bg-white border-2 rounded-lg p-3 w-full h-auto">
              <Link to="/" onClick={() => handleClick(0)}>
                <p className="text-sm hover:text-gray-950 md:text-xl">Home</p>
              </Link>
              <Link to="men" onClick={() => handleClick(2)}>
                <p className="text-sm hover:text-gray-950 md:text-xl">Men</p>
              </Link>
              <Link to="women" onClick={() => handleClick(3)}>
                <p className="text-sm hover:text-gray-950 md:text-xl">Women</p>
              </Link>
              <Link to="jewelry" onClick={() => handleClick(4)}>
                <p className="text-sm hover:text-gray-950 md:text-xl">
                  Jewelry
                </p>
              </Link>
              <Link to="electronics" onClick={() => handleClick(5)}>
                <p className="text-sm hover:text-gray-950 md:text-xl">
                  Electronics
                </p>
              </Link>
            </div>
          )}
        </div>
        <div className="font-bold text-2xl hover:text-gray-950">
          <RiShoppingCartFill
            className="text-3xl cursor-pointer"
            onClick={() => dispatch(open())}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
