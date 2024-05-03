import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Message } from "../models/messageSchema.js";
import xss from 'xss';


const nameRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
const phoneRegex = /^\d{10}$/;


export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!nameRegex.test(firstName)) {
    throw new ErrorHandler("First Name must contain only alphabetic characters!", 400);
  }
  if (!nameRegex.test(lastName)) {
    throw new ErrorHandler("Last Name must contain only alphabetic characters!", 400);
  }
  if (!emailRegex.test(email)) {
    throw new ErrorHandler("Please provide a valid email address!", 400);
  }
  if (!phoneRegex.test(phone)) {
    throw new ErrorHandler("Please provide a valid 10-digit phone number!", 400);
  }
  if (!firstName || !lastName || !email || !phone || !message) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }
  const sanitizedMessage = xss(message);

  await Message.create({ firstName, lastName, email, phone, message: sanitizedMessage });
  res.status(200).json({
    success: true,
    message: "Message Sent!",
  });
});

export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
  const messages = await Message.find();
  res.status(200).json({
    success: true,
    messages,
  });
});
