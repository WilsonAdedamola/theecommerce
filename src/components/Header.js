import React, { useState } from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
import { open } from "../redux/showCart";
import { useDispatch, useSelector } from "react-redux";
// import Cart from "./Cart";

const Header = () => {
  const dispatch = useDispatch();
  // const { show } = useSelector((state) => state.cartState);

  return (
    <>
      <div className="bg-white text-gray-600 shadow fixed top-0 w-full">
        {MobileHeader()}
        <div className="max-w-[90%] mx-auto py-4 justify-between items-center hidden sm:flex ">
          <Link to="/">
            <div className="text-3xl font-bold md:text-4xl">The Store</div>
          </Link>
          <div className="flex gap-6 justify-between items-center">
            <div className="flex gap-2">
              <Link to="/">
                <p className="text-sm hover:text-gray-950 md:text-xl">Home</p>
              </Link>
              <Link to="men">
                <p className="text-sm hover:text-gray-950 md:text-xl">Men</p>
              </Link>
              <Link to="women">
                <p className="text-sm hover:text-gray-950 md:text-xl">Women</p>
              </Link>
              <Link to="jewelry">
                <p className="text-sm hover:text-gray-950 md:text-xl">
                  Jewelry
                </p>
              </Link>
              <Link to="electronics">
                <p className="text-sm hover:text-gray-950 md:text-xl">
                  Electronics
                </p>
              </Link>
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
      {/* {show && <Cart />} */}
    </>
  );
};

//Mobile navbar

function MobileHeader() {
  const [dropDown, setDropDown] = useState(false);
  const [mobileActive, setMobileActive] = useState(0);

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
    <div className="flex justify-between max-w-[95%] mx-auto py-2 sm:hidden">
      <Link to="/">
        <div className="text-xl font-semibold">The Store</div>
      </Link>
      <div className="flex gap-5">
        <div className="flex flex-col gap-2 items-center relative">
          <div className="flex items-center justify-center gap-1 border-2 rounded-lg px-3 py-1 text-sm cursor-pointer">
            <p onClick={() => setDropDown((prev) => !prev)}>
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
          <RiShoppingCartFill className="text-3xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Header;
