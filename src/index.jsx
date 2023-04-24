import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
function Home() {
  return (
    <>
      <h1>Hello Home! 😃</h1>
    </>
  );
}

function About() {
  return (
    <>
      <h1>About Jake,</h1>
      <ul>
        <li>Likes to code</li>
        <li>Has 2 pet dogs</li>
        <li>Has a lovely girlfriend</li>
      </ul>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
