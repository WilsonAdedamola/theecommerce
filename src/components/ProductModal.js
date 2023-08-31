import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/openModal";
import { BiCartAdd } from "react-icons/bi";
import { addToCart } from "../redux/addToCart";

const ProductModal = () => {
  const { isTrue, modalItem } = useSelector((state) => state.modalData);
  const dispatch = useDispatch();

  return (
    <div
      className={
        isTrue
          ? "flex items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 shadow-xl rounded-md bg-white w-[92vw] h-[90vh] md:w-[70vw] lg:w-[60vw]"
          : "hidden"
      }
    >
      <div
        className="absolute bg-slate-500 py-1 px-3 rounded-md right-3 top-3 cursor-pointer text-white"
        onClick={() => dispatch(closeModal())}
      >
        close
      </div>
      {modalItem.map((item) => (
        <div
          key={item.id}
          className="w-full flex gap-3 flex-col text-gray-600 justify-between items-center bg-white h-full sm:flex-row"
        >
          <div className="flex items-center justify-center w-full md:w-[45%] flex-1">
            <img src={item.image} alt="Product" className="w-[40vw] h-full" />
          </div>
          <div className="justify-end flex flex-col w-full md:w-[55%] flex-1">
            <p className="font-bold">{item.title}</p>
            <p className="mt-3 mb-5">{item.description}</p>
            <p className="font-semibold">${item.price}</p>
            <p>{item.category}</p>
            <div
              className="text-white justify-self-end rounded-sm w-full bg-[#7694A9] cursor-pointer mt-4 flex py-2 px-3 items-center justify-between hover:bg-[#9bc6e0]"
              onClick={() => {
                dispatch(
                  addToCart({
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                  })
                );
              }}
            >
              <p className="text-base">Add to cart</p>
              <BiCartAdd className="text-xl" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductModal;
