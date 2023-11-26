/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./main.js"],
  theme: {
    extend: {
      colors:{
        // Primary
        Dark_Blue_intro_and_email_signup_background: 'hsl(217, 28%, 15%)',
        Dark_Blue_main_background: 'hsl(218, 28%, 13%)',
        Dark_Blue_footer_background: 'hsl(216, 53%, 9%)',
        Dark_Blue_testimonials_background: 'hsl(219, 30%, 18%)',
        // Accent
        Cyan_inside_call_to_action_gradient: 'hsl(176, 68%, 64%)',
        Blue_inside_call_to_action_gradient: 'hsl(198, 60%, 50%)',
        Light_Red_error: 'hsl(0, 100%, 63%)',
        // Neutral
        White: 'hsl(0, 0%, 100%)',
      },
      fontFamily:{
        opensasns:"'Open Sans', sans-serif",
        raleway:"'Raleway', sans-serif"
      },
      backgroundImage:{
        'bg-mobile':'url(./images/bg-curvy-mobile.svg)',
        'bg-deksptop':'url(./images/bg-curvy-desktop.svg)',
      },
    },
  },
  plugins: [],
}

