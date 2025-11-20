// utils/paddleUtils.js - ENHANCED DEBUGGING
import { initializePaddle } from "@paddle/paddle-js";

let paddleInstance = null;

export const getPaddle = async () => {
  if (paddleInstance) {
    console.log("Returning existing Paddle instance");
    return paddleInstance;
  }

  try {
    console.log("Initializing Paddle with:", {
      environment: import.meta.env.VITE_PADDLE_ENVIRONMENT,
      token: import.meta.env.VITE_PADDLE_CLIENT_TOKEN,
    });

    paddleInstance = await initializePaddle({
      environment: import.meta.env.VITE_PADDLE_ENVIRONMENT,
      token: import.meta.env.VITE_PADDLE_CLIENT_TOKEN,
    });

    console.log("✅ Paddle initialized successfully", paddleInstance);
    return paddleInstance;
  } catch (error) {
    console.error("❌ Failed to initialize Paddle:", error);
    throw new Error("Payment system initialization failed: " + error.message);
  }
};

export const openPaddleCheckout = async (transactionId, callbacks = {}) => {
  try {
    console.log(
      "🔄 Opening Paddle checkout with transactionId:",
      transactionId
    );

    const paddle = await getPaddle();

    console.log("Paddle.Checkout available:", !!paddle.Checkout);
    console.log("Paddle.Checkout.open available:", !!paddle.Checkout?.open);

    paddle.Checkout.open({
      transactionId: transactionId,
      success:
        callbacks.success ||
        (() => {
          console.log("✅ Payment successful");
        }),
      close:
        callbacks.close ||
        (() => {
          console.log("🔒 Checkout closed by user");
        }),
      error:
        callbacks.error ||
        ((err) => {
          console.error("❌ Checkout error:", err);
          console.error("Error details:", JSON.stringify(err, null, 2));
        }),
    });

    console.log("✅ Checkout opened successfully");
  } catch (error) {
    console.error("❌ Failed to open checkout:", error);
    throw error;
  }
};
