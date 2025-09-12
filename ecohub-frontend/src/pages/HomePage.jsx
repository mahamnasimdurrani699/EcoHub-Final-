import { useEffect } from "react";
import Slider from "react-slick";
// Import Slick Carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import Whatsapp_icon from "../components/Whatsapp_icon";
import Scroll_to_top from "../components/ScrollToTab";
const categories = [
  { id: 1, href: "/furniture", name: "Furniture", imageUrl: "/Furniture.jpeg" },
  { id: 2, href: "/food and beverages", name: "Food and beverages", imageUrl: "/Food and beverages.jpeg" },
  { id: 3, href: "/personal care", name: "Personal care", imageUrl: "/Personal care.jpeg" },
  { id: 4, href: "/household products", name: "Household products", imageUrl: "/Household products.jpeg" },
  { id: 5, href: "/best finds", name: "Best finds", imageUrl: "/Best finds.jpeg" },
];

const HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <>
      {/* Slider Section */}
      <div className="mt-10 flex justify-center bg-white p-0 m-0">
        <div className="slider-container w-[95%] md:w-[90%] lg:w-[85%] bg-white rounded-2xl shadow-lg overflow-hidden">
          <Slider {...settings}>
            <div>
              <img
                src="/slider 1.webp"
                alt="Slide 1"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <img
                src="/slider2.avif"
                alt="Slide 2"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <img
                src="/slider3.avif"
                alt="Slide 3"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <img
                src="/slider4.avif"
                alt="Slide 4"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </Slider>
        </div>
      </div>

      {/* Categories and Featured Products Section */}
      <div className="relative min-h-screen text-accent bg-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-center text-5xl sm:text-6xl font-bold text-accent mb-4">
            Explore Our Categories
          </h1>
          <p className="text-center text-xl text-accent mb-12">
            Discover the latest trends in eco-friendly fashion
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <CategoryItem category={category} key={category.name} />
            ))}
          </div>

          {!isLoading && products.length > 0 && (
            <FeaturedProducts featuredProducts={products} />
          )}
        </div>
        <Scroll_to_top/>
		<Whatsapp_icon/>
      </div>
    </>
  );
};

export default HomePage;
