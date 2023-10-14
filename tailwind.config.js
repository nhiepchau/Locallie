/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			white: "#FFFFFF",
			gray: "#A7ADB7",
			bg: "#F5F7F9",
			primary: {
				darker: "#252525",
				dark: "#007F6D",
				normal: "#009580",
				light: "#BFE8E2",
				lighter: "#ECF8F7",
			},
			dark: {
				darker: "#252525",
				dark: "#007F6D",
				normal: "#009580",
				light: "#BFE8E2",
				lighter: "#ECF8F7",
			},
			cloud: {
				light: "#F5F7F9",
				normal: "#E8EDF1",
			},
			ink: {
				normal: '#F4F4F4',
				light: "#4A617C",
			},
		},
		extend: {
			fontSize: {
				title1: [
					"22px",
					{
						lineHeight: "28px",
					},
				],
				normal: [
					"18px",
					{
						lineHeight: "20px",
					},
				],
				xsmall: [
					"12px",
					{
						lineHeight: "16px",
					},
				],
				small: [
					"14px",
					{
						lineHeight: "18px",
					},
				],
			},
			borderRadius: {
				primary: "12px",
				normal: "4px",
				medium: "8px",
			},
			borderWidth: {
				primary: "1.5px",
			},
		},
	},
	plugins: [],
}
