import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <article className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      <Navbar />
      <Homepage />
    </article>
  );
}

export default App;
