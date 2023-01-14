import ReactDom from "react-dom/client"
import { Suspense } from "react"
import {HashRouter} from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"


import App from "@/App"
import "normalize.css"
import "antd/dist/antd"
import "@/assets/css/index.css"
import store from "./store"
import theme from "./assets/theme"

const root = ReactDom.createRoot(document.querySelector('#root'))
root.render(
    <HashRouter>
        <Provider store={store}>
            <Suspense fallback={<h2>Loading....</h2>}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </Suspense>
        </Provider>
    </HashRouter>
)