import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
const Whatsapp_icon = () => {
    const handleClick = () => {
        window.open("https://wa.me/+92311223344"); // External link
      };
  return (
   <div className="fixed bottom-4 right-4">
                 <div
                   onClick={handleClick}
                   className="flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300"
                 >
                   <FaWhatsapp className="text-accent w-12 h-12 hover:text-darkAccent transition-all duration-300" />
                 </div>
               </div>
  )
}

export default Whatsapp_icon