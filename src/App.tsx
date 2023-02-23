import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/article/:id" element={<Detail />}></Route>
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
