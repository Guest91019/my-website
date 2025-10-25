// import { Routes, Route } from "react-router-dom";
// import Sidebar from "./components/sidebar";
// import Home from "./pages/home";
// import BasicRecipes from "./pages/Recipes";
// import TT from "./pages/tt";
// import Igd from "./pages/Igd";

// export default function App() {

//   return (
//    <div className="min-h-screen w-screen flex flex-col">
//       {/* ชื่อ Application */}
//       <header className="bg-orange-50 text-black h-8 flex justify-center items-center" >
//         <h6 justify-center items-center>AN318 React Class Week 5 React Route</h6>
//       </header>
//       <div className="flex flex-1">
//               <Sidebar/>

//         {/* หน้าจอหลัก */}
//         <main className="flex-1 p-6 bg-white">
//           <Routes>
//             {/* ถ้ากดอะไรจะแสดงอะไร */}
//             <Route path ="/"element={<Home />} />
//             <Route path ="/Recipes"element={<BasicRecipes />} />
//             <Route path ="/tt"element={<TT />} />
//             <Route path ="/igd"element={<Igd />} />
//           </Routes>
//         </main>
//       </div>
//       <footer className="bg-gray-700 text-white p-4 text-center">2025 Copyright</footer>
//     </div>
//   )
// }
export default function App() {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center bg-[#1a1a1a] text-white overflow-hidden">

      {/* Soft glowing background */}
      <div className="absolute w-[400px] h-[400px] bg-[#7b8ea3]/25 blur-[100px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-[#b7a6c9]/20 blur-[150px] rounded-full bottom-[-120px] right-[-100px]" />

      {/* Logo */}
      <h1 className="text-6xl font-semibold mb-4 tracking-wide animate-fade-in font-['Cormorant_Garamond'] z-10">
        Guestu
      </h1>

      {/* Tagline */}
      <p className="text-xl text-[#C8CAD1] mb-10 italic animate-fade-in [animation-delay:0.3s] z-10">
        a calm place to create
      </p>

      {/* Button */}
      <button className="px-8 py-3 rounded-2xl bg-white/10 text-white font-medium backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all animate-fade-in [animation-delay:0.6s] z-10">
        Enter Studio
      </button>

      {/* Ambient noise layer */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png')] opacity-10 pointer-events-none" />
    </div>
  );
}
