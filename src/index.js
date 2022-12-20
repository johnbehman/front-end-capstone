import React from "react"; 
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { MagicCakes } from "./components/MagicCakes"
import "./index.css"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <MagicCakes/>
    </BrowserRouter>
)
