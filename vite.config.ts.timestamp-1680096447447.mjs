// vite.config.ts
import { defineConfig } from "file:///Users/aic/Desktop/zen-blog/node_modules/vite/dist/node/index.js";
import react from "file:///Users/aic/Desktop/zen-blog/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react({ jsxImportSource: "@emotion/react" })],
  server: {
    cors: true,
    proxy: {
      "/api": {
        target: "http://localhost:3005",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYWljL0Rlc2t0b3AvemVuLWJsb2dcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9haWMvRGVza3RvcC96ZW4tYmxvZy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYWljL0Rlc2t0b3AvemVuLWJsb2cvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0Ly8gICBwbHVnaW5zOiBbcmVhY3QoKV0sXG5cdHBsdWdpbnM6IFtyZWFjdCh7IGpzeEltcG9ydFNvdXJjZTogJ0BlbW90aW9uL3JlYWN0JyB9KV0sLy9cdThCRDVcdTRFMDBcdTRFMEJcdUZGMENcdTRGN0ZcdTc1MjggZW1vdGlvbiBcdTc2ODRcdTVFOTNcbiAgXHRzZXJ2ZXI6IHtcblx0XHRjb3JzOiB0cnVlLCAvLyBcdTlFRDhcdThCQTRcdTU0MkZcdTc1MjhcdTVFNzZcdTUxNDFcdThCQjhcdTRFRkJcdTRGNTVcdTZFOTBcblx0XHQvLyBwb3J0OiAzMDA1LFxuXHRcdC8vIG9wZW46IHRydWUsIC8vIFx1NTcyOFx1NjcwRFx1NTJBMVx1NTY2OFx1NTQyRlx1NTJBOFx1NjVGNlx1ODFFQVx1NTJBOFx1NTcyOFx1NkQ0Rlx1ODlDOFx1NTY2OFx1NEUyRFx1NjI1M1x1NUYwMFx1NUU5NFx1NzUyOFx1N0EwQlx1NUU4RlxuXHRcdHByb3h5OiB7IC8vXHU0RUUzXHU3NDA2XHU5MTREXHU3RjZFXHU0RUU1XHU5MDdGXHU1MTREXHU4REU4XHU1N0RGXHU5NUVFXHU5ODk4XG5cdFx0XHQnL2FwaSc6IHtcblx0XHRcdFx0dGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMDA1JywgIC8vXHU0RUUzXHU3NDA2XHU2M0E1XHU1M0UzXG5cdFx0XHRcdGNoYW5nZU9yaWdpbjogdHJ1ZSxcblx0XHRcdFx0cmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKVxuXHRcdFx0fSxcdFx0XG5cdFx0fSxcblx0fSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1RLFNBQVMsb0JBQW9CO0FBQ2hTLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUUzQixTQUFTLENBQUMsTUFBTSxFQUFFLGlCQUFpQixpQkFBaUIsQ0FBQyxDQUFDO0FBQUEsRUFDcEQsUUFBUTtBQUFBLElBQ1QsTUFBTTtBQUFBLElBR04sT0FBTztBQUFBLE1BQ04sUUFBUTtBQUFBLFFBQ1AsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLFVBQVUsRUFBRTtBQUFBLE1BQzdDO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=