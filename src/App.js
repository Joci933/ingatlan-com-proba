import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import './assets/style/style.scss';
import { Details } from "./pages/Details/Details";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <Container>
      <BrowserRouter>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/details/:id" element={<Details/>}/>
          </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
