// import "./App.css";
// import { useEffect } from "react";
// import Home from "./pages/HomePage/Home";
// import Lenis from "@studio-freight/lenis";
// import "./index.css";
// import "./App.css";
// function App() {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // плавное замедление
//       smoothWheel: true,
//     });

//     function raf(time: number) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);
//   return (
//     <>
//       <div>
//         <Home />
//       </div>
//     </>
//   );
// }

// export default App;
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import "./App.css";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let frameId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app">
      <Outlet />
    </div>
  );
}
