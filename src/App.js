import "./App.css";
import About from "./components/About";
import Community from "./components/Community";
import Dashboard from "./components/Dashboard";
import GoPro from "./components/GoPro";
import ProjectDetail from "./components/ProjectDetail";
import Revenue from "./components/Revenue";
import Slots from "./components/Slots";
import Tourism from "./components/Tourism";
import TransactionDetail from "./components/TransactionDetail";

function App() {
  return (
    <div className="App flex h-[100vh]">
      <div className="flex flex-col justify-center w-[16vw]">
        <About />
        <Dashboard />
        <GoPro />
      </div>

      <div className="flex flex-col items-center justify-center w-[28vw]">
        <Revenue />
        <Tourism />
        <Slots />
      </div>

      <div className="flex flex-col justify-center w-[37vw]">
        <Community />
        <TransactionDetail />
        <ProjectDetail />
      </div>
    </div>
  );
}

export default App;
