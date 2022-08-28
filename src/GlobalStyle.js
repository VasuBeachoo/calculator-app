import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    /* THEME 1 */
    --bg-main-1: hsl(222, 26%, 31%);
    --bg-keypad-1: hsl(223, 31%, 20%);
    --bg-screen-1: hsl(224, 36%, 15%);
    --bg-key-blue: hsl(225, 21%, 49%);
    --key-shadow-blue: hsl(224, 28%, 35%);
    --bg-key-red: hsl(6, 63%, 50%);
    --key-shadow-red: hsl(6, 70%, 34%);
    --bg-key-orange-light: hsl(30, 25%, 89%);
    --key-shadow-orange-light: hsl(28, 16%, 65%);
    --text-primary-1: hsl(0, 0%, 100%);
    --text-secondary-1: hsl(221, 14%, 31%);
    --text-tertiary-1: hsl(0, 0%, 100%);
    --text-quarternary-1: hsl(0, 0%, 100%);

    /* THEME 2 */
    --bg-main-2: hsl(0, 0%, 90%);
    --bg-keypad-2: hsl(0, 5%, 81%);
    --bg-screen-2: hsl(0, 0%, 93%);
    --bg-key-cyan-dark: hsl(185, 42%, 37%);
    --key-shadow-cyan-dark: hsl(185, 58%, 25%);
    --bg-key-orange-dark: hsl(25, 98%, 40%);
    --key-shadow-orange-dark: hsl(25, 99%, 27%);
    --bg-key-gray-yellow: hsl(45, 7%, 89%);
    --key-shadow-gray-orange: hsl(35, 11%, 61%);
    --text-primary-2: hsl(60, 10%, 19%);
    --text-secondary-2: hsl(60, 10%, 19%);
    --text-tertiary-2: hsl(0, 0%, 100%);
    --text-quarternary-2: hsl(0, 0%, 100%);

    /* THEME 3 */
    --bg-main-3: hsl(268, 75%, 9%);
    --bg-keypad-3: hsl(268, 71%, 12%);
    --bg-key-violet-light: hsl(281, 89%, 26%);
    --key-shadow-magenta-light: hsl(285, 91%, 52%);
    --bg-key-cyan-light: hsl(176, 100%, 44%);
    --key-shadow-cyan-light: hsl(177, 92%, 70%);
    --bg-key-violet-dark: hsl(268, 47%, 21%);
    --key-shadow-magenta-dark: hsl(290, 70%, 36%);
    --text-primary-3: hsl(52, 100%, 62%);
    --text-secondary-3: hsl(52, 100%, 62%);
    --text-tertiary-3: hsl(198, 20%, 13%);
    --text-quarternary-3: hsl(0, 0%, 100%);
  }

  * {
    box-sizing: border-box;
    font-family: "League Spartan", sans-serif;
  }

  body {
    margin: 0;
  }
`;

export default GlobalStyle;
