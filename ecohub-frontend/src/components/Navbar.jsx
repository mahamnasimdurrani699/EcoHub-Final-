
// import { ShoppingCart, LogIn, LogOut, Lock, UserPlus, Search } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { useUserStore } from "../stores/useUserStore";
// import { useCartStore } from "../stores/useCartStore";
// import { useProductStore } from "../stores/useProductStore";
// import { useState } from "react";

// const Navbar = () => {
//   const { user, logout } = useUserStore();
//   const isAdmin = user?.role === "admin";
//   const { cart } = useCartStore();
//   const { searchProducts, fetchAllProducts, <Proucts } = useProductStore();

//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
  

//   const handleSearch = (e) => {
//     e.preventDefault();
//     searchProducts(searchTerm);
//     navigate("/search");
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-primary to-accent text-secondary shadow-xl z-40 border-b border-accent">
//       <div className="container mx-auto px-4 py-4 font-sans">
//         <div className="flex justify-between items-center gap-4">

//           {/* Logo */}
//           <Link to="/" className="text-3xl font-extrabold text-darkAccent flex items-center space-x-2 tracking-wide">
//             EcoHub
//           </Link>

//           {/* Search Bar */}
//           <form
//             onSubmit={handleSearch}
//             className="flex items-center bg-white rounded-full px-4 py-2 shadow-md w-full max-w-md mx-auto flex-grow focus-within:ring-2 focus-within:ring-accent"
//           >
//             <Search className="text-accent" size={20} />
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Search eco-friendly products here"
//               className="ml-3 outline-none w-full text-secondary text-sm bg-transparent placeholder-gray-500"
//             />
//           </form>

//           {/* Navigation */}
//           <nav className="flex flex-wrap items-center gap-4">
//             <Link to="/" className="text-secondary hover:text-darkAccent font-medium transition">Home</Link>

//             {user && (
//               <Link to="/AboutPage" className="text-secondary hover:text-darkAccent font-medium transition">About</Link>
//             )}

//             {user && (
//               <Link to="/cart" className="relative group text-secondary hover:text-darkAccent font-medium transition">
//                 <ShoppingCart size={22} className="inline-block mr-1 group-hover:text-darkAccent" />
//                 <span className="hidden sm:inline">Cart</span>
//                 {cart.length > 0 && (
//                   <span className="absolute -top-2 -left-2 bg-cartBadge text-white rounded-full px-2 py-0.5 text-xs animate-pulse">
//                     {cart.length}
//                   </span>
//                 )}
//               </Link>
//             )}

//             {isAdmin && (
//               <Link to="/secret-dashboard" className="bg-darkAccent hover:bg-accent text-white px-4 py-2 rounded-full font-semibold transition flex items-center">
//                 <Lock size={18} className="inline-block mr-2" />
//                 <span className="hidden sm:inline">Dashboard</span>
//               </Link>
//             )}

//             {user ? (
//               <button
//                 onClick={logout}
//                 className="bg-secondary hover:bg-gray-800 text-white py-2 px-4 rounded-full font-medium flex items-center transition"
//               >
//                 <LogOut size={18} />
//                 <span className="hidden sm:inline ml-2">Log Out</span>
//               </button>
//             ) : (
//               <>
//                 <Link to="/signup" className="bg-accent hover:bg-darkAccent text-white py-2 px-4 rounded-full font-medium flex items-center transition">
//                   <UserPlus size={18} className="mr-2" />
//                   Sign Up
//                 </Link>
//                 <Link to="/login" className="bg-secondary hover:bg-gray-800 text-white py-2 px-4 rounded-full font-medium flex items-center transition">
//                   <LogIn size={18} className="mr-2" />
//                   Login
//                 </Link>
//               </>
//             )}
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import { ShoppingCart, LogIn, LogOut, Lock, UserPlus, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import { useProductStore } from "../stores/useProductStore";
import { useState } from "react";

const Navbar = () => {
  const { user, logout } = useUserStore();
  const isAdmin = user?.role === "admin";
  const { cart } = useCartStore();
  const { searchProducts } = useProductStore();

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    searchProducts(searchTerm);
    navigate("/search");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-primary to-accent text-secondary shadow-xl z-40 border-b border-accent">
      <div className="container mx-auto px-4 py-4 font-sans">
        <div className="flex justify-between items-center gap-4">

          {/* Logo */}
          <Link to="/" className="text-3xl font-extrabold text-darkAccent flex items-center space-x-2 tracking-wide">
            EcoHub
          </Link>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-white rounded-full px-4 py-2 shadow-md w-full max-w-md mx-auto flex-grow focus-within:ring-2 focus-within:ring-accent"
          >
            <Search className="text-accent" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search eco-friendly products here"
              className="ml-3 outline-none w-full text-secondary text-sm bg-transparent placeholder-gray-500"
            />
          </form>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-4">
            <Link to="/" className="text-secondary hover:text-darkAccent font-medium transition">Home</Link>

            {user && (
              <Link to="/AboutPage" className="text-secondary hover:text-darkAccent font-medium transition">About</Link>
            )}

            {user && user.role !== "admin" && (
              <Link to="/cart" className="relative group text-secondary hover:text-darkAccent font-medium transition">
                <ShoppingCart size={22} className="inline-block mr-1 group-hover:text-darkAccent" />
                <span className="hidden sm:inline">Cart</span>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -left-2 bg-cartBadge text-white rounded-full px-2 py-0.5 text-xs animate-pulse">
                    {cart.length}
                  </span>
                )}
              </Link>
            )}

            {isAdmin && (
              <Link to="/secret-dashboard" className="bg-darkAccent hover:bg-accent text-white px-4 py-2 rounded-full font-semibold transition flex items-center">
                <Lock size={18} className="inline-block mr-2" />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            )}

            {user ? (
              <button
                onClick={logout}
                className="bg-secondary hover:bg-gray-800 text-white py-2 px-4 rounded-full font-medium flex items-center transition"
              >
                <LogOut size={18} />
                <span className="hidden sm:inline ml-2">Log Out</span>
              </button>
            ) : (
              <>
                <Link to="/signup" className="bg-accent hover:bg-darkAccent text-white py-2 px-4 rounded-full font-medium flex items-center transition">
                  <UserPlus size={18} className="mr-2" />
                  Sign Up
                </Link>
                <Link to="/login" className="bg-secondary hover:bg-gray-800 text-white py-2 px-4 rounded-full font-medium flex items-center transition">
                  <LogIn size={18} className="mr-2" />
                  Login
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

