import { motion } from "framer-motion";
import { Trash, Star } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";

const ProductsList = () => {
  const { deleteProduct, toggleFeaturedProduct, products } = useProductStore();

  return (
    <motion.div
      className="bg-lightBackground shadow-md rounded-2xl overflow-hidden max-w-4xl mx-auto font-poppins"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-accent/20">
          <tr>
            {["Product", "Price", "Category", "Featured", "Actions"].map((col) => (
              <th
                key={col}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-darkAccent uppercase tracking-wider"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-lightBackground divide-y divide-gray-200">
          {products?.map((product) => (
            <tr key={product._id} className="hover:bg-accent/10 transition-colors duration-200">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-darkAccent">{product.name}</div>
                  </div>
                </div>
              </td>

              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-[#333333]">Rs.{product.price.toFixed(2)}</div>
              </td>

              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-[#333333]">{product.category}</div>
              </td>

              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => toggleFeaturedProduct(product._id)}
                  className={`p-1 rounded-full transition-colors duration-200 ${
                    product.isFeatured ? "bg-darkAccent text-lightBackground" : "bg-gray-200 text-darkAccent"
                  } hover:bg-accent`}
                >
                  <Star className="h-5 w-5" />
                </button>
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => deleteProduct(product._id)}
                  className="text-red-500 hover:text-red-400"
                >
                  <Trash className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default ProductsList;
