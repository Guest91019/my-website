import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import BasicRecipes from "./pages/Recipes";
import TT from "./pages/tt";
import Igd from "./pages/Igd";

export default function App() {

  return (
   <div className="min-h-screen w-screen flex flex-col">
      {/* ชื่อ Application */}
      <header className="bg-orange-50 text-black h-8 flex justify-center items-center" >
        <h6 justify-center items-center>AN318 React Class Week 5 React Route</h6>
      </header>
      <div className="flex flex-1">
              <Sidebar/>

        {/* หน้าจอหลัก */}
        <main className="flex-1 p-6 bg-white">
          <Routes>
            {/* ถ้ากดอะไรจะแสดงอะไร */}
            <Route path ="/"element={<Home />} />
            <Route path ="/Recipes"element={<BasicRecipes />} />
            <Route path ="/tt"element={<TT />} />
            <Route path ="/igd"element={<Igd />} />
          </Routes>
        </main>
      </div>
      <footer className="bg-gray-700 text-white p-4 text-center">2025 Copyright</footer>
    </div>
  )
}