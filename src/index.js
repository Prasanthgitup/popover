import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Pop from "./component/pop";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/home";

export default function App() {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   // 👇️ navigate programmatically
  //   navigate('/home');

  return (
    <div className="root">
      <BrowserRouter>
        <Routes>
          <Route path="/aravind" element={<Pop />} />
          <Route path="/signup" element={<Home />} />
          <Route path="/" element={<Navigate replace to="/aravind" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
