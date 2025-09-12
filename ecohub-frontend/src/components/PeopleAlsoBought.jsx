import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "../lib/axios";
import toast from "react-hot-toast";
// import LoadingSpinner from "./LoadingSpinner";

const PeopleAlsoBought = () => {
	const [recommendations, setRecommendations] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchRecommendations = async () => {
			try {
				const res = await axios.get("/products/recommendations");
				setRecommendations(res.data);
			} catch (error) {
				toast.error(error?.response?.data?.message || "An error occurred while fetching recommendations");
			} finally {
				setIsLoading(false);
			}
		};

		fetchRecommendations();
	}, []);

	// Uncomment below if you implement a loading spinner
	// if (isLoading) return <LoadingSpinner />;

	return (
		<section className="py-12 text-secondary font-sans">
			<div className="container mx-auto px-4">
				<h3 className="text-3xl sm:text-4xl font-bold text-accent mb-6">
					People also bought
				</h3>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{recommendations.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
			</div>
		</section>
	);
};

export default PeopleAlsoBought;
