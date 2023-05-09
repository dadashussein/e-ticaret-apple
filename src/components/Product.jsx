import { useContext } from "react";
import Rating from "./Rating";
import { CartContext } from "../context/CartContex";
import { FiEye } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";

export const discount = (price) => {
  return price - (price * 5) / 100;
};

const Product = ({ product }) => {
  const { _id, title, price, images } = product;
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product, _id);
    toast.success(`${product?.title} səbətə əlavə edildi.`);

    //saved to localstorage

    const savedProducts = localStorage.getItem("savedProducts");
    const parsedProducts = savedProducts ? JSON.parse(savedProducts) : [];
    parsedProducts.push(product);
    localStorage.setItem("savedProducts", JSON.stringify(parsedProducts));
  };

  return (
    <div className="justify-center  flex flex-wrap gap-4 ">
      <Toaster />
      <div className="cardMd">
        {/* product image */}
        <div className="md:border-b  border-r flex py-1 items-center justify-center ">
          <img
            src={images[0]}
            alt=""
            className=" md:w-[14rem] max-w-[5rem]  md:max-w-[13rem]  flex object-cover"
          />
        </div>
        <div className="p-1 sm:p-3 md:p-5 flex flex-col gap-1 sm:gap-2 md:gap-3">
          {/* badge */}

          <div className="flex items-center gap-1 md:gap-2">
            <span className="badge">anbarda</span>
            <span className="badge">rəsmi magaza</span>
          </div>

          {/* product title */}

          <h2 className="product-title  border-b">{title}</h2>

          {/* product price */}
          <div>
            <span className="text-sm sm:text-lg md:text-xl font-bold ">
              {discount(price)} AZN
            </span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm line-through text-red-600 opacity-50">
                {price} AZN
              </span>
              <span className="discount-percent">endirim 10%</span>
            </div>
          </div>
          {/* product rating */}
          <div>
            <Rating />
          </div>

          {/* product action button */}

          <div className=" mt-1 sm:mt-3 md:mt-5 flex gap-2">
            <button onClick={handleAddToCart} className="button-primary">
              Səbətə at
            </button>
            <button className="button-icon h-6 md:h-8 ">
              <AiOutlineHeart />
            </button>
            <Link to={`/product/${_id}`} className="button-icon h-6 md:h-8 ">
              <FiEye />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
