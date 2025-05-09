// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "/Nflx-Clone-2025/", // Replace with your new repo name
// });

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import dotenv from "dotenv";

// dotenv.config();

// export default defineConfig({
//   plugins: [react()],
//   base: "/Nflx-Clone-2025/",
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  plugins: [react()],
  base: "/Nflx-Clone-2025/", // Matches homepage
});