// import { Link } from "react-router-dom";
// import { ShoppingCart, Info } from "lucide-react";
// import { useUserStore } from "../stores/useUserStore";
// import { useCartStore } from "../stores/useCartStore";
// import toast from "react-hot-toast";

// const ProductCard = ({ product }) => {
// 	const { user } = useUserStore();
// 	const { addToCart } = useCartStore();

// 	const handleAddToCart = () => {
// 		if (!user) {
// 			toast.error("Please login to add products to cart", { id: "login" });
// 			return;
// 		}
// 		addToCart(product);
// 	};

// 	return (
// 		<div className="flex w-full flex-col overflow-hidden rounded-2xl border border-accent/30 shadow-light hover:shadow-xl transition-shadow duration-300 bg-lightBackground">
// 			<Link to={`/product/${product._id}`} className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl group">
// 				<img src={product.image} alt={product.name} className="object-cover w-full transition-transform duration-300 group-hover:scale-105" />
// 				<div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-25 transition-all duration-300 flex items-center justify-center">
// 					<Info size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
// 				</div>
// 			</Link>

// 			<div className="mt-4 px-5 pb-5">
// 				<h5 className="text-xl font-semibold text-secondary">{product.name}</h5>
// 				<div className="mt-2 mb-5 flex items-center justify-between">
// 					<p>
// 						<span className="text-2xl font-bold text-darkAccent">Rs.{product.price.toFixed(2)}</span>
// 					</p>
// 				</div>

// 				<button

// 				{/* <button

// 					className="w-full flex items-center justify-center rounded-lg bg-darkAccent hover:bg-accent text-white font-medium px-5 py-2.5 transition duration-300"
// 					onClick={handleAddToCart}
// 				>
// 					<ShoppingCart size={20} className="mr-2" />
// 					Add to Cart
// 				</button>
// 				</button> */}
// 				{user?.role !== "admin" && (
// 	            <button
// 		        className="w-full flex items-center justify-center rounded-lg bg-darkAccent hover:bg-accent text-white font-medium px-5 py-2.5 transition duration-300"
// 		        onClick={handleAddToCart}
// 	            >
// 		        <ShoppingCart size={20} className="mr-2" />
// 		        Add to Cart
// 	            </button>
// )}

// >
// 			</div>
// 		</div>
// 	);
// };

// export default ProductCard;
import { Link } from "react-router-dom";
import { ShoppingCart, Info } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
	const { user } = useUserStore();
	const { addToCart } = useCartStore();

	const handleAddToCart = () => {
		if (!user) {
			toast.error("Please login to add products to cart", { id: "login" });
			return;
		}
		addToCart(product);
	};

	return (
		<div className="flex w-full flex-col overflow-hidden rounded-2xl border border-accent/30 shadow-light hover:shadow-xl transition-shadow duration-300 bg-lightBackground">
			<Link to={`/product/${product._id}`} className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl group">
				<img
					src={product.image}
					alt={product.name}
					className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-25 transition-all duration-300 flex items-center justify-center">
					<Info size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
				</div>
			</Link>

			<div className="mt-4 px-5 pb-5">
				<h5 className="text-xl font-semibold text-secondary">{product.name}</h5>
				<div className="mt-2 mb-5 flex items-center justify-between">
					<p>
						<span className="text-2xl font-bold text-darkAccent">Rs.{product.price.toFixed(2)}</span>
					</p>
				</div>

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
	);
};

export default ProductCard;
