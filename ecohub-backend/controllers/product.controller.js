import cloudinary from "../lib/cloudinary.js";
import { redis } from "../lib/redis.js";
import Product from "../models/product.model.js"

export const getAllProducts = async (req,res) =>{
    try {
        const products = await Product.find({});
        res.json({products});
    } catch (error) {
        console.log("Error in getAll Prodouct", error.message);
        res.status(500).json({message:"Server Error",error: error.message});
        
    }
};

export const getFeaturedProducts = async (req,res)=>{
    try {
        let featuredProducts;
        
        // Try to get from Redis cache first (if Redis is available)
        if (redis) {
            try {
                const cachedProducts = await redis.get("featured_products");
                if(cachedProducts){
                    return res.json(JSON.parse(cachedProducts));
                }
            } catch (redisError) {
                console.log("Redis cache miss, fetching from database:", redisError.message);
            }
        }
        
        // Fetch from database
        featuredProducts = await Product.find({isFeatured:true}).lean();
        if(!featuredProducts || featuredProducts.length === 0){
            return res.status(404).json({message:"No Featured Product found"});
        }
        
        // Try to cache in Redis (if available)
        if (redis) {
            try {
                await redis.set("featured_products", JSON.stringify(featuredProducts));
            } catch (redisError) {
                console.log("Failed to cache in Redis:", redisError.message);
            }
        }
        
        res.json(featuredProducts);
    } catch (error) {
        console.log("Error in getFeaturedProduct", error.message);
        res.status(500).json({message:"error server", error: error.message});
    }
};

export const createProduct = async (req,res)=>{
    try {
        const {name, description, price, image, category} = req.body;
        let cloudinaryResponse = null
        if(image){
            cloudinaryResponse = await cloudinary.uploader.upload(image,{folder:"products"}) 
        }
        const product = await Product.create({
            name,
            description,
            price,
            image: cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : "",
            category
        })
        res.status(201).json(product)
    } catch (error) {
        console.log("Error in createProduct in controller", error.message);
        res.status(500).json({message:"server error",error: error.message});
        
    }
};

export const deleteProduct = async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id)
        if (!product){
            return res.status(404).json({message:"product not found"});
        }
        if(product.image){
            const publicId = product.image.split("/").pop().split(".")[0];
            try {
              await cloudinary.uploader.destroy(`products/${publicId}`)
              console.log("delete image from cloudinary")  
            } catch (error) {
              console.log("Error deleting image from cloudinary", error)  
            }
        }
        await Product.findByIdAndDelete(req.params.id)
        res.json({message:"Product deleted successfully"})
    } catch (error) {
        console.log("Error in delete product controller", error.message)
        res.status(500).json({message:"Server Error", error: error.message})
    }
};

export const getRecommendedProducts = async (req,res)=>{
    try {
        const products = await Product.aggregate([
            {
                $sample: {size:3}
            },
            {
                $project:{
                    _id:1,
                    name:1,
                    description:1,
                    image:1,
                    price:1,

                }
            }
        ])
        res.json(products)
    } catch (error) {
       console.log("Error in getRecommendedProduct in controller", error.message);
       res.status(500).json({message:"Server error", error: error.message}); 
    }
};

export const getProductsByCategory = async (req,res)=>{
    const {category} = req.params;
    try {
        const products = await Product.find({category});
        res.json({products});
    } catch (error) {
        console.log("Error in getProductBycategory in controller", error.message);
        res.status(500).json({message:"Server error", error: error.message});   
    }
};

export const toggleFeaturedProduct = async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        if(product){
            product.isFeatured = !product.isFeatured;
            const updatedProduct = await product.save();
            await updateFeaturedProductsCache();
            res.json(updatedProduct);
        }else{
            res.status(404).json({message:"Product not found"})
        }
    } catch (error) {
        console.log("Error in toggleFeaturedProduct in controller", error.message);
        res.status(500).json({message:"Server error", error: error.message}); 
    }
};

async function updateFeaturedProductsCache(){
    try {
        if (!redis) {
            console.log("Redis not available, skipping cache update");
            return;
        }
        const featuredProducts = await Product.find({ isFeatured:true}).lean();
        await redis.set("featured_products", JSON.stringify(featuredProducts));
    } catch (error) {
       console.log("Error in update cache function:", error.message) 
    }
};