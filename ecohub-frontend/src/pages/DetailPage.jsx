import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  BadgeCheck,
  PackageCheck,
  Info,
  ShoppingCart,
  Star,
} from "lucide-react";
import { useProductStore } from "../stores/useProductStore";
import { useCartStore } from "../stores/useCartStore";
import { useUserStore } from "../stores/useUserStore";
import toast from "react-hot-toast";

const DetailPage = () => {
  const { id } = useParams();
  const products = useProductStore((state) => state.products);

  const featuredProducts = products.filter((p) => p.isFeatured);

  const addToCart = useCartStore((state) => state.addToCart);
  const { user } = useUserStore();

  const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   const foundProduct = products.find((product) => product._id === id);
  //   setProduct(foundProduct);
  // }, [id, products]);
  // useEffect(() => {
  //   const foundProduct = products.find(
  //     (product) => product._id === id && product.isFeatured
  //   );
  //   setProduct(foundProduct);
  // }, [id, products]);
  // useEffect(() => {
  //   const foundProduct = products.find(
  //     (product) => product._id === id && product.isFeatured
  //   );
  //   setProduct(foundProduct);
  // }, [id, products]);

  useEffect(() => {
    const foundProduct = products.find((product) => product._id === id);
    setProduct(foundProduct);
  }, [id, products]);

  if (!product) {
    return (
      <div className="text-center text-xl text-green-700 font-poppins">
        Product not found
      </div>
    );
  }

  const handleAddToCart = async () => {
    if (!user) {
      toast.error("Please login to add products to cart");
      return;
    }
    await addToCart(product);
    toast.success("Product added to cart");
  };

  const getRandomProducts = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const recommendedProducts = getRandomProducts(
    products.filter(
      (prod) => prod._id !== product._id && prod.category === product.category
    ),
    4
  );

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24 text-[#333333] font-poppins">
      {/* Main Product Section */}
      <div className="flex flex-col md:flex-row gap-x-16">
        {/* Product Image */}
        
        <div className="md:w-1/3 h-98 rounded-2xl overflow-hidden shadow-[rgba(0,0,0,0.1)]">
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-full object-cover"
  />
</div>


        {/* Product Info */}
        <div className="md:w-1/2 py-4 space-y-4">
          <h2 className="text-3xl font-bold text-[#7B9E5B] flex items-center gap-2">
            <Star size={28} className="text-yellow-400" />
            {product.name}
          </h2>

          <p className="text-base text-gray-600 flex items-center gap-2">
            <Info size={18} /> {product.description}
          </p>

          <p className="text-2xl text-[#9CBA7F] font-semibold flex items-center gap-2">
            Rs{product.price}
          </p>

          <div className="flex gap-4 mt-2">
            <p className="flex items-center gap-2 text-green-600">
              <PackageCheck size={18} /> In Stock
            </p>
            <p className="flex items-center gap-2 text-blue-500">
              <BadgeCheck size={18} /> Quality Assured
            </p>
          </div>

          <div className="mt-6">
            {/* <button
              onClick={handleAddToCart}
              className="bg-[#9CBA7F] hover:bg-[#7B9E5B] text-[#333333] py-2 px-6 rounded-2xl flex items-center gap-2 transition duration-300 shadow"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button> */}
            {user?.role !== "admin" && (
					<button
						className="w-full flex items-center justify-center rounded-lg bg-darkAccent hover:bg-accent text-white font-medium px-5 py-2.5 transition duration-300"
						onClick={handleAddToCart}
					>
						<ShoppingCart size={20} className="mr-2" />
						Add to Cart
					</button>
				)}
          </div>
        </div>
      </div>

      {/* Product Info Section */}
      <div className="mt-10 border-t pt-6">
        <p className="text-base text-gray-700 flex items-start gap-2">
          <Info size={20} className="mt-1 text-[#7B9E5B]" />
          {product.info || "No additional information available."}
        </p>
      </div>

      {/* Recommended Products */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-[#7B9E5B] mb-4">
          <Star size={24} className="inline-block text-yellow-400 mr-2" />
          Recommended Products
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recommendedProducts.length > 0 ? (
            recommendedProducts.map((recommendedProduct) => (
              <Link
                key={recommendedProduct._id}
                to={`/product/${recommendedProduct._id}`}
                className="bg-[#FFFFFF] border border-gray-100 rounded-2xl overflow-hidden group hover:shadow-lg transition shadow-[rgba(0,0,0,0.1)]"
              >
                <img
                  src={recommendedProduct.image}
                  alt={recommendedProduct.name}
                  className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-[#333333] group-hover:text-[#7B9E5B]">
                    {recommendedProduct.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {recommendedProduct.shortDescription || "No preview"}
                  </p>
                  <p className="text-[#9CBA7F] font-semibold">
                    Rs{recommendedProduct.price}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p>No recommended products available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
