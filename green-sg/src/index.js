import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home"
import Activities from "./pages/Activities";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Donate from "./pages/Donate";
import GetStarted from "./pages/GetStarted";


export default function Page() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout /> }>
          <Route index element={<Home />} />
          
          <Route path="activities" element={<Activities />} />
          <Route path="getstarted" element={<GetStarted />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donate" element={<Donate />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);