import { Minus, Plus, Trash } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

const CartItem = ({ item }) => {
	const { removeFromCart, updateQuantity } = useCartStore();

	return (
		<div className='rounded-lg border border-darkAccent p-4 shadow-light font-sans md:p-6'>
			<div className='space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0'>
				
				{/* Product Image */}
				<div className='shrink-0 md:order-1'>
					<img
						className='h-20 md:h-32 rounded object-cover'
						src={item.image}
						alt={item.name}
					/>
				</div>

				{/* Quantity Controls and Price */}
				<div className='flex items-center justify-between md:order-3 md:justify-end'>
					<div className='flex items-center gap-2'>
						<button
							className='inline-flex h-5 w-5 items-center justify-center rounded-md border border-darkAccent bg-darkAccent hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent'
							onClick={() => updateQuantity(item._id, item.quantity - 1)}
						>
							<Minus className='h-3 w-3 text-primary' />
						</button>
						<p className='text-sm font-medium text-secondary'>{item.quantity}</p>
						<button
							className='inline-flex h-5 w-5 items-center justify-center rounded-md border border-darkAccent bg-darkAccent hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent'
							onClick={() => updateQuantity(item._id, item.quantity + 1)}
						>
							<Plus className='h-3 w-3 text-primary' />
						</button>
					</div>

					<div className='text-end md:order-4 md:w-32'>
						<p className='text-base font-bold text-accent'>Rs.{item.price}</p>
					</div>
				</div>

				{/* Product Info and Remove Button */}
				<div className='w-full flex-1 space-y-4 md:order-2 md:max-w-md'>
					<p className='text-base font-medium text-secondary hover:text-accent hover:underline'>
						{item.name}
					</p>
					<p className='text-sm text-darkAccent'>{item.description}</p>

					<div className='flex items-center gap-4'>
						<button
							className='inline-flex items-center text-sm font-medium text-cartBadge hover:text-red-500 hover:underline'
							onClick={() => removeFromCart(item._id)}
						>
							<Trash className='h-4 w-4' />
							<span className='ml-1'>Remove</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
