import ratelimit from "../config/upstash.js";



const rateLimiter = async (req, res, next) => {
  try {
    const {success} = await ratelimit.limit("my-key");

    if(!success) return res.status(429).json({message: "Request Limit Exceeded! Try again later!"})
    
      next();
  } catch (error) {
    console.log("Rate limit error", error);
    next(error)
  }
}

export default rateLimiter;