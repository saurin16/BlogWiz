export const plansMap = [
  {
    id: "basic",
    name: "Basic",
    description: "Get started with SpeakEasy!",
    price: "10",
    items: ["3 Blog Posts", "3 Transcription"],
    paymentLink: "https://buy.stripe.com/test_8wM170dbV2YlaME28c",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1QDB8TKOJDVPdFIKh2TFc0m0"
        : "",
  },
  {
    id: "pro",
    name: "Pro",
    description: "All Blog Posts, let’s go!",
    price: "19.99",
    items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
    paymentLink: "https://buy.stripe.com/test_3cseXQ2xhaqN9IA5km",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1QDB9GKOJDVPdFIKPL31gxhA"
        : "",
  },
];

export const ORIGIN_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://blog-wiz-murex.vercel.app/";
