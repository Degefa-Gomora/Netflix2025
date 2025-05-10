

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import dotenv from "dotenv";

// dotenv.config();

// export default defineConfig({
//   plugins: [react()],
//   base: "/Nflx-Clone-2025", // Matches homepage
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Nflx-Clone-2025/',  // 👈 must match GitHub repo name
  plugins: [react()],
});