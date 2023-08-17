import { ThemeProvider } from "styled-components";
import { ResetPassword } from "./screens/ResetPassword";

const App = () => (
    <ThemeProvider theme={{}}>
        <ResetPassword />
    </ThemeProvider>
);

export default App;
