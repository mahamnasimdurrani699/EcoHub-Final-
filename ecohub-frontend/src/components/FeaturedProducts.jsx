// import { useEffect, useState } from "react";
// import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
// import { useCartStore } from "../stores/useCartStore";

// import { useUserStore } from "../stores/useUserStore";

// import { motion } from "framer-motion";

// const FeaturedProducts = ({ featuredProducts }) => {
// 	const [currentIndex, setCurrentIndex] = useState(0);
// 	const [itemsPerPage, setItemsPerPage] = useState(4);
// 	const { addToCart } = useCartStore();

// 	const { user } = useUserStore();


// 	useEffect(() => {
// 		const handleResize = () => {
// 			if (window.innerWidth < 640) setItemsPerPage(1);
// 			else if (window.innerWidth < 1024) setItemsPerPage(2);
// 			else if (window.innerWidth < 1280) setItemsPerPage(3);
// 			else setItemsPerPage(4);
// 		};
// 		handleResize();
// 		window.addEventListener("resize", handleResize);
// 		return () => window.removeEventListener("resize", handleResize);
// 	}, []);

// 	const nextSlide = () => setCurrentIndex((prev) => prev + itemsPerPage);
// 	const prevSlide = () => setCurrentIndex((prev) => prev - itemsPerPage);

// 	const isStartDisabled = currentIndex === 0;
// 	const isEndDisabled = currentIndex >= featuredProducts.length - itemsPerPage;

// 	return (
// 		<section className="py-12 text-secondary font-sans">
// 			<div className="container mx-auto px-4">
// 				<h2 className="text-center text-5xl sm:text-6xl font-bold text-accent mb-8">
// 					Featured
// 				</h2>

// 				<div className="relative">
// 					<div className="overflow-hidden">
// 						<motion.div
// 							className="flex transition-transform duration-300 ease-in-out"
// 							style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
// 						>
// 							{featuredProducts.map((product) => (
// 								<div
// 									key={product._id}
// 									className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 flex-shrink-0"
// 								>
// 									<motion.div
// 										initial={{ opacity: 0, y: 20 }}
// 										animate={{ opacity: 1, y: 0 }}
// 										transition={{ duration: 0.4 }}
// 										className="bg-lightBackground bg-opacity-10 backdrop-blur-sm border border-accent/30 rounded-2xl shadow-light overflow-hidden h-full hover:shadow-xl transition-shadow duration-300"
// 									>
// 										<div className="overflow-hidden">
// 											<img
// 												src={product.image}
// 												alt={product.name}
// 												className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
// 											/>
// 										</div>
// 										<div className="p-4 space-y-2">
// 											<h3 className="text-lg font-semibold text-secondary">
// 												{product.name}
// 											</h3>
// 											<p className="text-darkAccent font-medium">
// 												Rs.{product.price.toFixed(2)}
// 											</p>

// 											<button
// 											{/* <button

// 												onClick={() => addToCart(product)}
// 												className="w-full bg-darkAccent hover:bg-accent text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
// 											>
// 												<ShoppingCart className="w-5 h-5 mr-2" />
// 												Add to Cart

// 											</button>

// 											</button> */}
// 											{user?.role !== "admin" && (
// 	                                        <button
// 		                                    onClick={() => addToCart(product)}
// 		                                    className="w-full bg-darkAccent hover:bg-accent text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
// 	                                        >
// 		                                    <ShoppingCart className="w-5 h-5 mr-2" />
// 		                                    Add to Cart
// 	                                        </button>
//                                         )}

// 										</div>
// 									</motion.div>
// 								</div>
// 							))}
// 						</motion.div>
// 					</div>

// 					{/* Navigation Arrows */}
// 					<button
// 						onClick={prevSlide}
// 						disabled={isStartDisabled}
// 						className={`absolute top-1/2 -left-4 transform -translate-y-1/2 p-2 rounded-full shadow-md ${
// 							isStartDisabled
// 								? "bg-gray-300 cursor-not-allowed"
// 								: "bg-darkAccent hover:bg-accent text-white transition-colors"
// 						}`}
// 					>
// 						<ChevronLeft className="w-6 h-6" />
// 					</button>

// 					<button
// 						onClick={nextSlide}
// 						disabled={isEndDisabled}
// 						className={`absolute top-1/2 -right-4 transform -translate-y-1/2 p-2 rounded-full shadow-md ${
// 							isEndDisabled
// 								? "bg-gray-300 cursor-not-allowed"
// 								: "bg-darkAccent hover:bg-accent text-white transition-colors"
// 						}`}
// 					>
// 						<ChevronRight className="w-6 h-6" />
// 					</button>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default FeaturedProducts;


import { useEffect, useState } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";
import { useUserStore } from "../stores/useUserStore";
import { motion } from "framer-motion";

const FeaturedProducts = ({ featuredProducts }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(4);
	const { addToCart } = useCartStore();
	const { user } = useUserStore();

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) setItemsPerPage(1);
			else if (window.innerWidth < 1024) setItemsPerPage(2);
			else if (window.innerWidth < 1280) setItemsPerPage(3);
			else setItemsPerPage(4);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const nextSlide = () => setCurrentIndex((prev) => prev + itemsPerPage);
	const prevSlide = () => setCurrentIndex((prev) => prev - itemsPerPage);

	const isStartDisabled = currentIndex === 0;
	const isEndDisabled = currentIndex >= featuredProducts.length - itemsPerPage;

	return (
		<section className="py-12 text-secondary font-sans">
			<div className="container mx-auto px-4">
				<h2 className="text-center text-5xl sm:text-6xl font-bold text-accent mb-8">
					Featured
				</h2>

				<div className="relative">
					<div className="overflow-hidden">
						<motion.div
							className="flex transition-transform duration-300 ease-in-out"
							style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
						>
							{featuredProducts.map((product) => (
								<div
									key={product._id}
									className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 flex-shrink-0"
								>
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.4 }}
										className="bg-lightBackground bg-opacity-10 backdrop-blur-sm border border-accent/30 rounded-2xl shadow-light overflow-hidden h-full hover:shadow-xl transition-shadow duration-300"
									>
										<div className="overflow-hidden">
											<img
												src={product.image}
												alt={product.name}
												className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
											/>
										</div>
										<div className="p-4 space-y-2">
											<h3 className="text-lg font-semibold text-secondary">
												{product.name}
											</h3>
											<p className="text-darkAccent font-medium">
												Rs.{product.price.toFixed(2)}
											</p>

											{user?.role !== "admin" && (
												<button
													onClick={() => addToCart(product)}
													className="w-full bg-darkAccent hover:bg-accent text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
												>
													<ShoppingCart className="w-5 h-5 mr-2" />
													Add to Cart
												</button>
											)}
										</div>
									</motion.div>
								</div>
							))}
						</motion.div>
					</div>

					{/* Navigation Arrows */}
					<button
						onClick={prevSlide}
						disabled={isStartDisabled}
						className={`absolute top-1/2 -left-4 transform -translate-y-1/2 p-2 rounded-full shadow-md ${
							isStartDisabled
								? "bg-gray-300 cursor-not-allowed"
								: "bg-darkAccent hover:bg-accent text-white transition-colors"
						}`}
					>
						<ChevronLeft className="w-6 h-6" />
					</button>

					<button
						onClick={nextSlide}
						disabled={isEndDisabled}
						className={`absolute top-1/2 -right-4 transform -translate-y-1/2 p-2 rounded-full shadow-md ${
							isEndDisabled
								? "bg-gray-300 cursor-not-allowed"
								: "bg-darkAccent hover:bg-accent text-white transition-colors"
						}`}
					>
						<ChevronRight className="w-6 h-6" />
					</button>
				</div>
			</div>
		</section>
	);
};

export default FeaturedProducts;
