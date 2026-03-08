import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css";
import "./styles/Global.css"
import Home from "./pages/Home"
import Quotes from "./pages/Quotes"
import Achievers from "./pages/Achievers"
import Blog from "./pages/Blog"
import BiasDetector from "./pages/BiasDetector"

function App() {

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<Home />} />

<Route path="/quotes" element={<Quotes />} />

<Route path="/achievers" element={<Achievers />} />

<Route path="/blog" element={<Blog />} />

<Route path="/bias" element={<BiasDetector />} />

</Routes>

</BrowserRouter>

)

}

export default App