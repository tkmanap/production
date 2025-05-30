import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router";
import {ThemeProvider} from "app/providers/ThemeProvider";
import {ErrorBoundary} from "app/providers/ErrorBoundary";

import App from "./app/App";
import 'app/styles/index.scss'
import {PageError} from "widgets/PageError";

import "shared/config/i18n/i18n";
import {StoreProvider} from "app/providers/StoreProvider";

const root = createRoot(document.getElementById("root")!);
root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary fallback={<PageError/>}>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>
)
