import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL || (import.meta.mode === "development" ? "http://localhost:5000/api" : "https://ecohub-backend-maham.onrender.com/api"),
	withCredentials: true, // send cookies to the server
	timeout: 10000, // 10 second timeout
});

// Request interceptor
axiosInstance.interceptors.request.use(
	(config) => {
		// Add any auth headers if needed
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
		if (error.response?.status === 401) {
			// Handle unauthorized access
			localStorage.removeItem('user');
			window.location.href = '/login';
		}
		return Promise.reject(error);
	}
);

export default axiosInstance;