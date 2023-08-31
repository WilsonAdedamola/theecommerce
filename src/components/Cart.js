import React from "react";
import { close } from "../redux/showCart";
import { AiOutlineClose, AiFillDelete } from "react-icons/ai";
import { FcDeleteDatabase } from "react-icons/fc";
import { removeFromCart, clearCart } from "../redux/addToCart";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.cartState);
  const { cartItems, itemCount } = useSelector((state) => state.cartData);

  return (
    <div
      className={
        show
          ? "bg-white text-gray-600 fixed opacity-1 duration-700 z-10 py-2 px-5 right-0 top-0 flex flex-col items-center gap-4 h-full w-[270px] shadow md:w-[550px]"
          : "fixed opacity-0 -right-[9999px] duration-500"
      }
    >
      <div className="flex justify-between items-center w-full">
        <h2 className="font font-semibold text-2xl">Cart Items</h2>
        <AiOutlineClose
          className="text-3xl cursor-pointer hover:text-gray-950"
          onClick={() => dispatch(close())}
        />
      </div>
      {itemCount === 0 ? (
        <h3 className="font-semibold text-xl py-56">Cart is empty</h3>
      ) : (
        <div className="scroll w-full h-full overflow-y-auto grid gap-4 grid-cols-1 md:grid-cols-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="max-w-[200x] w-full max-h-[430px] p-3 rounded-lg border shadow flex flex-col justify-between bg-white"
            >
              <div className="h-[200px]">
                <img
                  src={item.image}
                  alt="The Store"
                  className="rounded-xl w-full max-h-full h-full"
                />
              </div>
              <div className="flex flex-col items-center justify-between">
                <div>
                  <p className="w-[100%] font-semibold mb-2">{item.title}</p>
                  <p>${item.price}</p>
                </div>
                <div
                  className="text-white rounded-sm w-full bg-[#7694A9] cursor-pointer mt-1 flex py-1 px-3 items-center justify-between hover:bg-[#B4D0E2]"
                  onClick={() => {
                    dispatch(removeFromCart(item.id));
                  }}
                >
                  <p className="text-base">Remove from cart</p>
                  <AiFillDelete />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {itemCount !== 0 && (
        <div className="gap-4 cursor-pointer bg-[#FF0000] rounded flex justify-between items-center py-1 px-3 hover:bg-[#f56b6b]">
          <p
            className="text-white font-semibold"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </p>
          <FcDeleteDatabase />
        </div>
      )}
    </div>
  );
};

export default Cart;
