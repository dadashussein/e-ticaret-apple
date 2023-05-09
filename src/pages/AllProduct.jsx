import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import { Link, useParams } from "react-router-dom";

const AllProduct = () => {
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [query, products]);

  return (
    <div className="p-4 h-[60vh]">
      <div>
        <div className="relative overflow-x-auto">
          {filteredProducts.length === 0 ? (
            <p>Məhsul tapılmadı</p>
          ) : (
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#222] dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Məhsul adı
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Rəng
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Kategoriya
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qiymət
                  </th>
                </tr>
              </thead>

              {filteredProducts.map((product) => (
                <tbody key={product._id}>
                  <tr className="bg-white border-b dark:bg-[#333] dark:border-gray-900">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <Link to={`/product/${product._id}`}>
                        {product.title}
                      </Link>
                    </th>
                    <td className="px-6 py-4">{product?.properties?.colour}</td>
                    <td className="px-6 py-4">{product.category[0]}</td>
                    <td className="px-6 py-4">{product.price} ₼</td>
                  </tr>
                </tbody>
              ))}
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
