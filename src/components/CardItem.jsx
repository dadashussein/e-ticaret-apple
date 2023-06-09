import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContex";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { discount } from "./Product";

const CardItem = ({ item }) => {
  const { removeFromCart, decreaseAmount, increaseAmount } =
    useContext(CartContext);

  const { _id, title, images, price, amount } = item;
  return (
    <div
      className="flex gap-x-4 py-2   lg:px-6 border-b 
    border-gray-200 w-full font-light dark:text-gray-300 "
    >
      <div
        className="w-full min-h-[100px]   flex  
    items-center gap-x-4"
      >
        {/* image */}
        <Link to={`/product/${_id}`}>
          <img className="max-w-[80px]" src={images[0]} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title  & remove icon */}
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${_id}`}
              className="text-sm uppercase font-medium max-w-[240px]  hover:underline"
            >
              {title}
            </Link>
            {/* remove icon */}
            <div
              onClick={() => removeFromCart(_id)}
              className="text-xl cursor-pointer "
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div
            className="flex gap-x-2
          h-[36px] text-sm"
          >
            {/* qty */}
            <div
              className="flex flex-1 max-w-[70px] items-center h-full
             border border-black dark:border-gray-500 rounded text-primary font-medium"
            >
              <div
                onClick={() => decreaseAmount(_id)}
                className="flex-1 flex justify-center items-center cursor-pointer h-full "
              >
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="h-full text-xs flex justify-center  items-center px-2">
                {amount}
              </div>

              <div
                onClick={() => increaseAmount(_id)}
                className="flex-1  h-full flex justify-center items-center cursor-pointer  "
              >
                <IoMdAdd />
              </div>
            </div>

            {/* items price */}
            <div className="flex-1 text-xs  flex items-center flex-col">
              endirim{" "}
              <span className="text-xs text-red-500 ">
                {parseFloat((price - discount(price)) * amount).toFixed(2)}₼
              </span>
            </div>
            {/* final price */}
            {/* make the price at 2 decimals */}
            <div
              className="flex-1 flex justify-end
             item-center text-primary font-medium"
            >{`₼ ${parseFloat(discount(price) * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
