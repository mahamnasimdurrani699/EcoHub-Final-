import { motion } from "framer-motion";
import { useCartStore } from "../stores/useCartStore";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "../lib/axios";

const stripePromise = loadStripe(
	"pk_test_51RTfz009MtgwLTa3nLQkl6jvivTPd1tXlLTGVWB7RUoylTAuXBr6fJui0CABEhhOqAa4K52UAr3Q9OEDNVMmMpbN00sW9wpNLw"
);

const OrderSummary = () => {
	const { total, subtotal, coupon, isCouponApplied, cart } = useCartStore();

	const savings = subtotal - total;
	const formattedSubtotal = subtotal.toFixed(2);
	const formattedTotal = total.toFixed(2);
	const formattedSavings = savings.toFixed(2);

	const handlePayment = async () => {
		const stripe = await stripePromise;
		const res = await axios.post("/payments/create-checkout-session", {
			products: cart,
			couponCode: coupon ? coupon.code : null,
		});

		const session = res.data;
		const result = await stripe.redirectToCheckout({
			sessionId: session.id,
		});

		if (result.error) {
			console.error("Error:", result.error);
		}
	};

	return (
		<motion.div
			className='space-y-4 rounded-lg border border-accent p-4 shadow-sm sm:p-6'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<p className='text-xl font-semibold text-accent'>Order Summary</p>

			<div className='space-y-4'>
				<div className='space-y-2'>
					<dl className='flex items-center justify-between gap-4'>
						<dt className='text-base font-normal text-secondary'>Original Price</dt>
						<dd className='text-base font-medium text-secondary'>Rs.{formattedSubtotal}</dd>
					</dl>

					{savings > 0 && (
						<dl className='flex items-center justify-between gap-4'>
							<dt className='text-base font-normal text-secondary'>Savings</dt>
							<dd className='text-base font-medium text-accent'>-Rs.{formattedSavings}</dd>
						</dl>
					)}

					{coupon && isCouponApplied && (
						<dl className='flex items-center justify-between gap-4'>
							<dt className='text-base font-normal text-secondary'>Coupon ({coupon.code})</dt>
							<dd className='text-base font-medium text-accent'>
								-{coupon.discountPercentage}%
							</dd>
						</dl>
					)}

					<dl className='flex items-center justify-between gap-4 border-t border-darkAccent pt-2'>
						<dt className='text-base font-bold text-secondary'>Total</dt>
						<dd className='text-base font-bold text-accent'>Rs.{formattedTotal}</dd>
					</dl>
				</div>

				<motion.button
					className='flex w-full items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-darkAccent focus:outline-none focus:ring-4 focus:ring-accent'
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={handlePayment}
				>
					Proceed to Checkout
				</motion.button>

				<div className='flex items-center justify-center gap-2'>
					<span className='text-sm font-normal text-secondary'>or</span>
					<Link
						to='/'
						className='inline-flex items-center gap-2 text-sm font-medium text-linkText underline hover:text-darkAccent hover:no-underline'
					>
						Continue Shopping
						<MoveRight size={16} />
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default OrderSummary;
