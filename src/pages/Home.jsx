import NewFeatured from "../components/NewFeatured";
import Product from "../components/Product";
import { useProducts } from "../context/ProductContext";
const Home = () => {
  const { products } = useProducts();
  return (
    <div>
      <NewFeatured />

      <div className="justify-center my-4 flex flex-wrap gap-4 ">
        {products.map((item) => {
          return <Product product={item} key={item._id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
