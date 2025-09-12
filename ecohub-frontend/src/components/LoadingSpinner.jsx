// const LoadingSpinner = () => {
// 	return (
// 		<div className='flex items-center justify-center min-h-screen bg-gray-900'>
// 			<div className='relative'>
// 				<div className='w-20 h-20 border-emerald-200 border-2 rounded-full' />
// 				<div className='w-20 h-20 border-emerald-500 border-t-2 animate-spin rounded-full absolute left-0 top-0' />
// 				<div className='sr-only'>Loading</div>
// 			</div>
// 		</div>
// 	);
// };

// export default LoadingSpinner;
const LoadingSpinner = () => {
	return (
	  <div className="flex items-center justify-center min-h-screen bg-lightBackground font-poppins">
		<div className="relative">
		  {/* Outer ring */}
		  <div className="w-20 h-20 border-darkAccent border-2 rounded-full" />
		  {/* Animated top ring */}
		  <div className="w-20 h-20 border-accent border-t-2 animate-spin rounded-full absolute left-0 top-0" />
		  <div className="sr-only">Loading</div>
		</div>
	  </div>
	);
  };
  
  export default LoadingSpinner;