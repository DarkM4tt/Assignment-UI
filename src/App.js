import "./App.css";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import GoPro from "./components/GoPro";
import Revenue from "./components/Revenue";
import Slots from "./components/Slots";
import Tourism from "./components/Tourism";

function App() {
  return (
    <div className="App flex h-[100vh]">
      <div className="flex flex-col justify-center items-center bg-black w-[20vw]">
        <About />
        <Dashboard />
        <GoPro />
      </div>
      <div className="flex flex-col justify-center items-center bg-black w-[35vw]">
        <Revenue />
        <Tourism />
        <Slots />
      </div>
      <div className="flex bg-yellow-500 w-[45vw]">Right</div>
    </div>
  );
}

export default App;
