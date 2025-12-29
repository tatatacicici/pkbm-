import rateLimit from 'express-rate-limit';

export const authLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 5,
    message:{
        success: false,
        message: "Too many attempts, please try again later",
    }
});


export const otpLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max : 3,
    message:{
        success: false,
        message: "Too many OTP requests, please try again later",
    }
});