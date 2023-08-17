import { ThemeProvider } from "styled-components";
import { ResetPassword } from "./screens/ResetPassword";

const App = () => (
    <ThemeProvider
        theme={{
            primary: "#541e4b",
            secondary: "#da1710",
            white: "#ffffff",
            grey: "#bbbbbb",
        }}
    >
        <ResetPassword />
    </ThemeProvider>
);

export default App;
