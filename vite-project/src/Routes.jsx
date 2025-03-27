import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import First from "./components/One";
import Second from "./components/Two";
import App from "./App";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/one" element={<First />} />
                <Route path="/two" element={<Second />} />
            </Routes>
        </BrowserRouter>
    )
}
