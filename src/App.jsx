import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/home"

const App = () => {
  
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Layout>
    </BrowserRouter>
   )
}

export default App