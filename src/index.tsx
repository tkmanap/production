import {createRoot} from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router";
import ThemeProvider from "./shared/theme/ThemeProvider";

const root = createRoot(document.getElementById("root")!);
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
)
