// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ["~/assets/css/tailwind.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],
    // @ts-ignore
    shadcn: {
        prefix: "",
        componentDir: "./components/ui",
    },
    typescript: {
        typeCheck: true,
        strict: true,
    },
});
