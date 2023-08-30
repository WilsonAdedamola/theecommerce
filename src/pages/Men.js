import React, { useEffect } from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import { getMenProducts } from "../redux/fetchMenData";
import { addToCart } from "../redux/addToCart";

const Men = () => {
  const { data, isLoading, isError } = useSelector((state) => state.fetchMen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenProducts());
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {isError && (
        <div className="flex items-center justify-center min-h-[600px] font-semibold text-xl">
          Unable to fetch products
        </div>
      )}
      {!isLoading && data.length ? (
        <div className="grid grid-cols-1 gap-4 max-w-[95%] mt-28 mx-auto my-10 sm:max-w-[80%] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((item) => (
            <div
              className="flex flex-col justify-between rounded-xl cursor-pointer border shadow-md hover:mt-[-8px]"
              key={item.id}
            >
              <div className="flex items-center justify-center p-2 shadow-sm h-56">
                <img
                  src={item.image}
                  alt="cloth"
                  className="max-h-full min-h-full max-w-full"
                />
              </div>
              <div className="flex flex-col items-start w-full p-2">
                <p className="font-semibold mb-3">{item.title}</p>
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-start flex-col">
                    <span className="font-bold">${item.price}</span>
                    <span className="text-slate-400">{item.category}</span>
                  </div>
                  <div className="cart">
                    <RiShoppingCartFill
                      className="text-2xl cursor-pointer"
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: item.id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                          })
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Men;
