import { BarChart, PlusCircle, ShoppingBasket } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import AnalyticsTab from "../components/AnalyticsTab";
import CreateProductForm from "../components/CreateProductForm";
import ProductsList from "../components/ProductsList";
import { useProductStore } from "../stores/useProductStore";

const tabs = [
	{ id: "create", label: "Create Product", icon: PlusCircle },
	{ id: "products", label: "Products", icon: ShoppingBasket },
	{ id: "analytics", label: "Analytics", icon: BarChart },
];

const AdminPage = () => {
	const [activeTab, setActiveTab] = useState("create");
	const { fetchAllProducts } = useProductStore();

	useEffect(() => {
		fetchAllProducts();
	}, [fetchAllProducts]);

	return (
		<div className="min-h-screen bg-lightBackground text-secondary relative overflow-hidden">
			<div className="relative z-10 container mx-auto px-4 py-16">
				<motion.h1
					className="text-4xl sm:text-5xl font-bold mb-8 text-center text-accent"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Admin Dashboard
				</motion.h1>

				{/* Tabs */}
				<div className="flex justify-center mb-10">
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`flex items-center px-5 py-2 mx-2 rounded-2xl shadow-md transition-colors duration-300 ${
								activeTab === tab.id
									? "bg-accent text-white shadow-lg"
									: "bg-gray-100 text-secondary hover:bg-darkAccent hover:text-white"
							}`}
						>
							<tab.icon className="mr-2 h-5 w-5" />
							{tab.label}
						</button>
					))}
				</div>

				{/* Tabs Content */}
				<div className="bg-white shadow-lg rounded-2xl p-6">
					{activeTab === "create" && <CreateProductForm />}
					{activeTab === "products" && <ProductsList />}
					{activeTab === "analytics" && <AnalyticsTab />}
				</div>
			</div>
		</div>
	);
};

export default AdminPage;
