import React from "react";
import { close } from "../redux/showCart";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.cartState);
  const { cartItems, itemCount } = useSelector((state) => state.cartData);

  return (
    <div
      className={
        show
          ? "bg-white text-gray-600 fixed py-2 px-5 right-0 top-0 flex flex-col items-center gap-6 h-full w-[250px] shadow-md lg:w-[500px]"
          : "hidden right-[-999px]"
      }
    >
      <div className="flex justify-between items-center w-full">
        <h2 className="font font-semibold text-2xl">Cart Items</h2>
        <AiOutlineClose
          className="text-3xl cursor-pointer hover:text-gray-950"
          onClick={() => dispatch(close())}
        />
      </div>
      {itemCount == 0 ? (
        <h3 className="font-semibold text-xl py-56">Cart is empty</h3>
      ) : (
        <div className="scroll w-full h-full overflow-y-auto grid gap-4 grid-cols-1 lg:grid-cols-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="max-w-[200px] max-h-[300px] p-3 rounded-lg border shadow"
            >
              <div className="h-[200px]">
                <img
                  src={item.image}
                  alt="The Store"
                  className="rounded-xl w-full max-h-full"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="w-[100%] overflow-x-scroll">{item.title}</p>
                  <p>{item.price}</p>
                </div>
                <div className="cursor-pointer">delete</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
