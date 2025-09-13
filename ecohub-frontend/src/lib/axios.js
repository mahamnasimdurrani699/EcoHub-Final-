import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL || (import.meta.mode === "development" ? "http://localhost:5000/api" : "https://ecohub-backend-maham.onrender.com/api"),
	withCredentials: true, // send cookies to the server
	timeout: 10000, // 10 second timeout
});

// Request interceptor
axiosInstance.interceptors.request.use(
	(config) => {
		console.log("Making request to:", config.url);
		console.log("With credentials:", config.withCredentials);
		// Add Authorization header if token exists
		const token = localStorage.getItem('accessToken');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// Response interceptor
axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		// Just return the error, don't redirect
		return Promise.reject(error);
	}
);

export default axiosInstance;