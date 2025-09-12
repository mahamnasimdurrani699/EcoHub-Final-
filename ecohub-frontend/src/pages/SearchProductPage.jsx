import { useProductStore } from "../stores/useProductStore";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

const SearchProductPage = () => {
	const { filteredProducts, loading } = useProductStore();

	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to top on page load
	}, []);

	return (
		<div className="min-h-screen bg-lightBackground text-secondary">
			<div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				
				{/* Page Title */}
				<motion.h2
					className="text-center text-4xl sm:text-5xl font-bold text-accent mb-8"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Search Results
				</motion.h2>

				{/* Loader */}
				{loading ? (
					<p className="text-center text-darkAccent text-lg">
						Loading search results...
					</p>
				) : filteredProducts.length === 0 ? (
					<p className="text-center text-2xl mt-10 font-semibold text-darkAccent">
						No products found.
					</p>
				) : (
					/* Products Grid */
					<motion.div
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						{filteredProducts.map((product) => (
							<ProductCard key={product._id} product={product} />
						))}
					</motion.div>
				)}
			</div>
		</div>
	);
};

export default SearchProductPage;
