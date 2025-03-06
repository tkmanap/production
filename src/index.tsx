import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router";
import {ThemeProvider} from "app/providers/ThemeProvider";
import App from "./app/App";

const root = createRoot(document.getElementById("root")!);
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
)
