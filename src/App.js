import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import './assets/style/style.scss';
import { Details } from "./pages/Details/Details";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import { FAVOURITES } from "./utils/constants";

function App() {

  useEffect(() => {
    const items =localStorage.getItem(FAVOURITES);
    if (!items && !items.length) {
      localStorage.setItem(FAVOURITES, JSON.stringify([]));
    }
  }, []);

  return (
    <div className="App">
      <Header/>

      <div className="content-container">
        <Container>
          <BrowserRouter>
              <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/details/:id" element={<Details/>}/>
              </Routes>
          </BrowserRouter>
        </Container>
      </div>
    </div>
  );
}

export default App;
