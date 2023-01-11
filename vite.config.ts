import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-plugin-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	optimizeDeps: {
		include: ["antd", "lodash", "moment"],
	},
	server: {
		port: 3000,
		open: "/",
	},
	build: {
		outDir: "build",
	},
	plugins: [
		react(),
		tsconfigPaths(),
		VitePWA({
			disable: true, // Enable if you want
			registerType: "autoUpdate",
			devOptions: {
				enabled: false, // Enable to get pwa in development mode
			},
			// workbox: {
			// 	cleanupOutdatedCaches: true,
			// },
		}),
	],
});
