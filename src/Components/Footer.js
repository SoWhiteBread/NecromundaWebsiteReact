import { React } from "react";
import quotes from "../Data/quotes.json";

function getRandomQuote() {
  return quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];
}

export const Footer = () => {
  return (
    <div className="footer">
      <div className="terms">THOUGHT FOR THE DAY</div>
      <div className="terms">+ + + {getRandomQuote().toUpperCase()} + + +</div>
    </div>
  );
};
