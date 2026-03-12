import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import emailjs from "@emailjs/browser";

export default defineConfig({
  plugins: [react()],
});

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_2j596qi",
    "template_mv7jm9z",
    e.target,
    "b83NKbFq6uRdg6hwDHV2N"
  ).then(
    () => {
      alert("Message sent successfully!");
    },
    () => {
      alert("Failed to send message.");
    }
  );
};