import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Badge from "react-bootstrap/Badge"
import Nav from "react-bootstrap/Nav";
import { useContext } from "react";
import { Store } from "./Store";
import CartPage from "./pages/CartPage";
import SignInPage from "./pages/SignInPage";

function App() {
  const { state } = useContext(Store);
  const {  cart } = state
  return (
    <Router>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Market</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
              <Link to="/cart" className="nav-link">
                Cart
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="success">
                    {cart.cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
                  </Badge>
                )}
              </Link>

              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">&copy;2023</div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
