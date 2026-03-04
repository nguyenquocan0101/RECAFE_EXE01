tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#402d1e",
                "primary-dark": "#2c1f15",
                "coffee": {
                    DEFAULT: "#402d1e",
                    dark: "#2c1f15",
                    light: "#D7CCC8",
                    rich: "#402d1e"
                },
                "background": {
                    light: "#fdfaf6", // Dùng màu Vintage làm chuẩn
                    dark: "#1a1512"
                },
                "surface": {
                    light: "#ffffff",
                    dark: "#2a221c"
                },
                "text-main": "#2c1e14",
                "text-muted": "#7c6a5a",
                "border-vintage": "#e2d1c3",
            },
            fontFamily: {
                "serif": ["Crimson Pro", "serif"],      // Font nghệ thuật, tiêu đề chính (Vintage)
                "display": ["Space Grotesk", "sans-serif"], // Font hiện đại, tiêu đề phụ, nhãn (Modern)
                "sans": ["Inter", "sans-serif"],        // Font nội dung, UI, văn bản (Clean)
            },
            borderRadius: {
                "DEFAULT": "0.125rem",
                "lg": "0.5rem",
                "xl": "1rem",
                "full": "9999px"
            },
        },
    },
}
