import Redis from "ioredis"
import dotenv from "dotenv"

dotenv.config()

// Create Redis connection with error handling
let redis;

try {
  if (process.env.UPSTASH_REDIS_URL) {
    redis = new Redis(process.env.UPSTASH_REDIS_URL, {
      retryDelayOnFailover: 100,
      maxRetriesPerRequest: 3,
      lazyConnect: true,
      connectTimeout: 10000,
      commandTimeout: 5000,
    });

    redis.on('error', (err) => {
      console.log('Redis connection error:', err.message);
    });

    redis.on('connect', () => {
      console.log('Redis connected successfully');
    });
  } else {
    console.log('Redis URL not provided, running without Redis');
  }
} catch (error) {
  console.log('Redis initialization failed:', error.message);
}

// Export a safe Redis instance
export { redis };